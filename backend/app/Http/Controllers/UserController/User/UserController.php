<?php

namespace App\Http\Controllers\UserController\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Carbon\Carbon;
use App\User;
use App\Models\FacultyModels\Faculty\Faculty;
use App\Models\ScholershipModels\Scholership\Scholership;
use Illuminate\Database\QueryException;
use App\Models\FileModels\CsvFiles\Csvs;
use Validator;
use App\Models\ExchangeModels\Exchange;

class UserController extends Controller{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
       

    }

    //search users. this will call for the datatable
    public function searchUser(Request $request){
        
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

        //if faculty id does not have a value, set null
        if($faculty_id_obj->isEmpty()){
            $faculty_id = null;
        }else{
            //else, set faculty id from object
            $faculty_id = $faculty_id_obj[0]->id;
        }

        //if faculty id does not have a value, set null
        if($scholership_id_obj->isEmpty()){
            $scholership_id = null;
        }else{
            //else, set faculty id from object
            $scholership_id = $scholership_id_obj[0]->id;
        }

       ///return $scholersip_id;  


        //return $request->entrance_year;
        $result  = User::leftJoin('images', 
            function($join_images)
            {
              
                $join_images -> on('users.id', '=', 'images.user_id');
            }
        )->leftJoin('faculties', 
            function($join_faculty)
            {
              
                $join_faculty -> on('users.faculty_id', '=', 'faculties.id');
            }
        )->leftJoin('scholerships',
            function($join_scholership)
            {
                $join_scholership -> on('users.scholership_id', '=', 'scholerships.id');
            })
        ->select('users.*', 'images.saved_path', 'faculties.faculty_name', 'scholerships.scholership_name' )
        ->groupBy('users.id')
        ->orderBy('images.new_name', 'desc')
        ->when($entrance_year, function ($query) use($entrance_year){
            return $query->where('entrance_year',$entrance_year);
        })->when($faculty_id, function ($query) use($faculty_id){
            return $query->where('faculty_id',$faculty_id);
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
     * By CSV file
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
       

       $csvFile = $request -> file('csvfile');

        //check the request has a file
        if(!$csvFile){
            return response()->json(['fail' => 'Select a csv file'], 400);
        }

        $sub_path = 'csvs';
        $extension = $csvFile -> getClientOriginalExtension();
        $new_name = date("Y").'-'.date("M").'-'.date("D").'-'.time();
        $destination_path = public_path($sub_path);
        $new_name_wt_ext = $new_name.'.'.$extension;
        
        if($extension != "csv"){
          return response()->json(['fail' => 'Can not be processed. Use CSV format'], 400);
        }

        //save file in server before open it
        $csvFile->move($destination_path,  $new_name_wt_ext);
        
        //get file path after saving it in server
        $file_path = $sub_path.'/'.$new_name_wt_ext;
        
        //open file and read each row.
        $fileD = fopen($file_path , "r");

        $column = fgetcsv($fileD);
        
        $recoreds = -1;
        while(!feof($fileD)){
          $rowData[]=fgetcsv($fileD);
          $recoreds = $recoreds + 1;
        }

        if($recoreds > 500){
            return response()->json(['fail' => 'Maximum number of records should be 500.'], 400);
        }    

        foreach ($rowData as $key => $value) {

           //get faculty id
           $faculty_obj= Faculty::select('id')
                                ->where('faculty_name', $value[6])
                                ->get();
                               
           if(!$faculty_obj->isEmpty()){
             $faculty_id = $faculty_obj[0]->id;
           } else{
            $faculty_id = 1;
           }

           //get sholarship id                    
           $schol_obj= Scholership::select('id')
                                ->where('scholership_name', $value[7])
                                ->get();
                                
           if(!$schol_obj->isEmpty()){
             $schol_id = $schol_obj[0]->id;
           } else {
            $schol_id = 1;
           }

            
        
            $inserted_data = array('student_no'=>$value[1],
                                   'fist_name' => $value[2],
                                   'last_name' => $value[3],
                                   'email'=>$value[4],
                                   'password' => bcrypt($value[1]),
                                   'entrance_year' => $value[5],
                                   'faculty_id' => $faculty_id,
                                   'scholership_id' => $schol_id
                                );

            //return response()->json($inserted_data['student_no'] != null);
            //return response()->json($inserted_data['student_no'] != null);
            //return response()->json($faculty_id);
            if($inserted_data['student_no'] != null  || $inserted_data['email'] != null){
                $validator = Validator::make($inserted_data,[
                'student_no'=> 'unique:users',
                //'email' => 'unique:users|email',
                'password' => 'required',
                 ]);

               // return response()->json($validator->fails()); 
                if($validator->fails()){
                    return response()->json(['fail'=> $inserted_data['student_no'].' or '.$inserted_data['email'].' already exist'], 400);
                    //return response()->json($inserted_data);
                }           

                User::create($inserted_data);
            }
        }

        return response()->json(['complete'=> $recoreds.' users successfully added'], 200);  
    }

    


    /**
     * Display the specified resource.
     * Show details user to it self
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $user = User::leftJoin('faculties', 
                function($join_faculty){
                    $join_faculty -> on('users.faculty_id', '=', 'faculties.id');
                }
            )->leftJoin('images', 
                function( $join_images) {
                    $join_images -> on ('users.id', '=', 'images.user_id') ;
                }
            )->select('first_name', 'last_name','student_no', 'email', 'entrance_year' ,'faculties.faculty_name', 'profile_summary', 'saved_path')
            ->where('users.id', $id)
            ->get();

            
                $complete = $user[0];
            
            return response()->json($complete, 200);

        }catch(QueryException $e){
            $errorCode = $e->errorInfo[1];
            return response()->json($errorCode, 400);
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
      /*  $userEdit = User::select(array('first_name', 'last_name', 'email', 'student_no'))
                    ->where('id', $id)
                    ->get();*/

        $userEdit = User::leftJoin('faculties', 
            function($join_faculty){
                 $join_faculty -> on('users.faculty_id', '=', 'faculties.id');
            }
        )->select('users.first_name', 'users.last_name', 'users.entrance_year' ,
        'faculties.faculty_name', 'users.scholership_status', 'profile_summary')
        ->where('users.id', $id)
        ->get();


         return response()->json($userEdit);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        try{

            //get faculty id to update it in user table
            $faculty_id = Faculty::select('id')
                ->where('faculty_name',  $request->faculty_name)->get();
           
            //uodate user details
            $user = User::find($id)->update([
            'first_name'=> $request -> first_name,
            'last_name'=>$request -> last_name,
            'entrance_year'=>$request -> entrance_year,
            'faculty_id'=> $faculty_id[0]->id,
            'profile_summary'=> $request -> profile_summary
            ]);

            return response()->json($user);             

        }catch(QueryException $e){
            $errorCode = $e->errorInfo[1];
            return response()->json($errorCode);
        }

    }


    // update by admin
    public function userUpdate(Request $request, $id){
        $validator = Validator::make($request->all(),[
            'faculty_name' => 'required',
            'entrance_year' => 'required',
            'scholership_name' => 'required'
            
        ]);

        // return response()->json($request->scholership_status);


        //Validate inputs
        if($validator->fails()){
            return response()->json(['fail' => $validator->errors()],    400);
        }


         try{
             // get faculty if from faculty table
            $faculty_id_array = Faculty::select('id')
            ->where('faculty_name', $request->faculty_name)->get();
            //return $request->faculty_name;
            
            // get scholarship id from scholarship table
            $scholarship_id_array = Scholership::select('id')
            ->where('scholership_name', $request->scholership_name)->get();
                      
            
            // get current scholershp
            $current_schol_id = User::select('scholership_id')
                ->where('id', $id)
                ->get();
            

            // check current scholarshp not equal to updated scholrship
            if ($current_schol_id[0]->scholership_id != $scholarship_id_array[0]->id) {
                
                if ($current_schol_id[0]->scholership_id == 1) {
                    $description = "Change to Bursary.";
                    $result = Exchange::create([
                        'user_id'=>$id,
                        'exchange_description'=>$description
                    ]);
                }else {
                    $description = "Change to Mahapola.";
                    $result = Exchange::create([
                        'user_id'=>$id,
                        'exchange_description'=>$description
                    ]);
                }

                // $result = Exchange::create([
                //     'user_id'=>$id,
                //     'exchange_description'=>$description
                // ]);
      

            }
            
            $user = User::find($id)->update([
                'faculty_id'=> $faculty_id_array[0]->id ,
                'entrance_year' => $request->entrance_year,
                'scholership_id' => $scholarship_id_array[0]->id,
                'is_activated' => $request->is_activated,
                'scholership_status' => $request->scholership_status
            ]);
            
                        
            return response()->json(['complete' =>$user], 200);             

        }catch(QueryException $e){
            $errorCode = $e->errorInfo[1];
            return response()->json(['fail' => $errorCode], 400);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = User::where('id' , $id)->delete();
        if(!$result){
            return response()->json(['fail' => "Some error occured"], 400);
        }
        return response()->json(['complete' =>$result], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */

    public function test(){

        $datetime =  Carbon::now('Asia/Colombo')->format('Y');


        return $datetime;

    }
     
    
    /**
     * Admin login for register the user.
     *
     * @return \Illuminate\Http\Response
     */

    public function loginAdmin(Request $request){

       
		$validator = Validator::make($request->all(),[
			'student_no'=> 'required',
			'email' => 'required'
		]);

		
		//Validate inputs
		if($validator->fails()){
			return response()->json($validator->errors(), 400);
        }else {

            $student_no = User::select('student_no')
            ->where('email', $request->email)->get();

            if ($student_no[0] == null){
                return response()->json(['fail' => 'Enter valid email'], 400);
            }else {
                if ($student_no[0]->student_no == $request->student_no) {
                    return response()->json(['complete' => true], 200);
                }else {
                    return response()->json(['fail' => 'Password did not match'], 400);
                }
            }           
        }
    }


}
