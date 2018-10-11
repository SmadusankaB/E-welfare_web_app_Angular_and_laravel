<?php

namespace App\Http\Controllers\InstallmentControllers;

use App\Models\InstallmentModels\Installment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\PeriodModels\Period;
use Carbon\Carbon;
use App\User;
use App\Models\ScholershipModels\Scholership\Scholership;
use App\Models\FacultyModels\Faculty\Faculty;
use DB;

class InstallmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            // get current date
            $time_now = Carbon::now()->toDateString();

            // get period data that is in the date now
            $period_data = Period::where('status',1)
            ->where('start_date','<=',$time_now)
            ->where('end_date','>=',$time_now)
            ->get();

            // if current date period not activated.
            if ($period_data->isEmpty()){
                return response()->json(['fail'=> 'Contact Administratior'], 400);
            }

            // get the given user within the given period
            $user = Installment::select('user_id')->where('period_id', $period_data[0]->id)->where('user_id', $request->user_id)->get();

            // if the givn\en user already in the given period
            if (!$user->isEmpty()) {
                return response()->json(['fail'=> 'You already signed.'], 400);
            }else{

                $schol_status = User::select('scholership_status')->where('id', $request->user_id)->get();
                
                if ($schol_status[0]->scholership_status == 0) {
                    return response()->json(['fail'=> 'Activate your scholarship.'], 400);   
                }else {
                   

                    // get scholarship data of current user
                    $schol_data = Scholership::leftJoin('users', function($join_scholerships){
                        $join_scholerships -> on ('users.scholership_id', '=', 'scholerships.id');
                        })->select('scholerships.id', 'scholerships.amount')->where('users.id', $request->user_id)->get();

                    if ($schol_data->isEmpty()){
                        return response()->json(['fail'=> 'You do not have a scholarship.'], 400); 
                        
                    }else {
                        // Create new Installment object
                        $installment = new Installment;
            
                        $installment->period_id = $period_data[0]->id;
                        $installment->user_id = $request->user_id;
                        $installment->signature = "signed";
                        $installment->payment =  $schol_data[0]->amount;
                        $installment->scholership_type_id =  $schol_data[0]->id;
                        
                        // save in the database
                        $result = $installment->save();
                        return response()->json($result, 200);
                    }
                
                }

            }     

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\InstallmentModels\Installment  $installment
     * @return \Illuminate\Http\Response
     */
    public function show(Installment $installment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\InstallmentModels\Installment  $installment
     * @return \Illuminate\Http\Response
     */
    public function edit(Installment $installment)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\InstallmentModels\Installment  $installment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\InstallmentModels\Installment  $installment
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    // get installment details for current month
    public function getDataofCurrentInstallment(Request $request){

        
        //return $request;
        //search accrdong to entrace year
        $period_start_date = $request->period_start_date; 

        //search accrdong to entrace year
        $entrance_year = $request->entrance_year; 
        
        //get faculty id from faculty table according to faculty name 
        $faculty_id_obj = Faculty::select('id')
            ->where('faculty_name', $request->faculty_name)
            ->get();
       
        //get scholership id from scholership table according to scholership name
        $scholership_id_obj = Scholership::select('id')
            ->where('scholership_name', $request->scholership_name)
            ->get();
            //return $scholersip_id_obj;

         //if user select none, set entrance_year to current year
         if($request->entrance_year == ""){
            $entrance_year = Carbon::now('Asia/Colombo')->format('Y');
        }
        
         //if user select none, set entrance_year to current year
        if($period_start_date == ""){
            $x = Period::select('start_date')->orderBy('id', 'desc')->first();

            $period_start_date = $x->start_date;
            // return $period_start_date;
        }

        //if faculty id does not have a value, set null
        if($faculty_id_obj->isEmpty()){
            $commerce = "commerce";
            $commerce_id = Faculty::where('faculty_name', 'like', '%' .$commerce.  '%')->pluck('id');
           
            $faculty_id = $commerce_id[0]; // assign 1 as faculty id
        }else{
            //else, set faculty id from object
            $faculty_id = $faculty_id_obj[0]->id;
           
        }

        //if faculty id does not have a value, set null
        if($scholership_id_obj->isEmpty()){
            $mahapola = "Mahapola";
            $mahapola_id = Scholership::where('scholership_name', 'like', '%' .$mahapola.  '%')->pluck('id');
            $scholership_id = $mahapola_id[0];
           
        }else{
            //else, set faculty id from object
            $scholership_id = $scholership_id_obj[0]->id;
        }

       ///return $scholersip_id;  


        //return $request->entrance_year;
        $result  = Installment::leftJoin('users', 
            function($join_installments)
            {
              
                $join_installments -> on('users.id', '=', 'installments.user_id');
            }
        )->leftJoin('periods', 
            function($join_perios)
            {
              
                $join_perios -> on('installments.period_id', '=', 'periods.id');
            }
        )->leftJoin('scholerships',
            function($join_scholership)
            {
                $join_scholership -> on('users.scholership_id', '=', 'scholerships.id');
            }
        )->leftJoin('faculties',
        function($join_scholership)
        {
            $join_scholership -> on('users.faculty_id', '=', 'faculties.id');
        })        
        ->select('users.student_no', 'users.first_name', 'users.last_name', 'scholerships.scholership_name','faculties.faculty_name',
         'users.entrance_year', 'users.nic', 'users.email', 'installments.signature'
         )
        ->when($period_start_date, function ($query) use($period_start_date){
            return $query->where('start_date',$period_start_date);
        })->when($faculty_id, function ($query) use($faculty_id){
            return $query->where('faculty_id',$faculty_id);
        })->when($entrance_year, function ($query) use($entrance_year){
            return $query->where('entrance_year',$entrance_year);
        })->when($scholership_id, function ($query) use($scholership_id){
            return $query->where('scholership_id',$scholership_id);
        })/*->paginate(10)*/->get();


        if(!$result){
            return response()->json(['fail' => 'Can not load data'], 404);
        }

        //return response()->json(['data' => $result], 200);
        //return $result;
        return response()->json(['complete' =>$result],200);
    }
}
