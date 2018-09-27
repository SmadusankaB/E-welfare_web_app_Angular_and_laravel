<?php

namespace App\Http\Controllers\BursaryAppControllers;

use App\Models\BursaryAppModels\BursaryApp;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Database\QueryException;
use Validator;
use Illuminate\Support\Facades\File;
use Carbon\Carbon;
use App\Models\ScholershipModels\Scholership\Scholership;
use App\Models\NotificationModels\Notification;


class BursaryAppController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{

            // show all bursary scholarship requests for admin
            $data = BursaryApp::leftJoin('users', function($join_bursary_apps){
                $join_bursary_apps -> on ('users.id','=','bursary_apps.user_id');
                })->select('users.id', 'users.student_no','users.first_name', 'users.last_name', 'bursary_apps.distance',
                'bursary_apps.address', 'bursary_apps.phone_no', 'users.apply_again_status',
                'bursary_apps.saved_path','users.apply_again_status', 'users.scholership_status')
                ->where('users.apply_again_status', 0)->get();

            return response()->json(['complete'=>$data], 200);

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];
 
            return response()->json($errorCode);
        }
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BursaryAppModels\BursaryApp  $bursaryApp
     * @return \Illuminate\Http\Response
     */
    public function show(BursaryApp $bursaryApp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource. when user going to apply for bursary, data
     * of that user will be loaded from this method
     *
     * @param  \App\Models\BursaryAppModels\BursaryApp  $bursaryApp
     * @return \Illuminate\Http\Response
     */
    public function edit(BursaryApp $bursaryApp, $user_id)
    {
        // return $user_id;
        //return $bursaryApp;
        try{

            // send bursary scholarship application data for user
            $data = User::leftJoin('bursary_apps', function($join_bursary_apps){
                $join_bursary_apps -> on ('users.id','=','bursary_apps.user_id');
                })->select('users.first_name', 'users.last_name', 'bursary_apps.distance', 'bursary_apps.address', 
                'bursary_apps.phone_no', 'users.apply_again_status', 'bursary_apps.saved_path',
                'users.scholership_id', 'users.scholership_status')->where('users.id', $user_id)->get();
        
            return response()->json(['complete'=>$data], 200);

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }

    }

    /**
     * Update the specified resource in storage.
     * This method call when user submit bursary scholarship application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BursaryAppModels\BursaryApp  $bursaryApp
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BursaryApp $bursaryApp, $user_id)
    {

        
        try{
            //-------------------------------------------user-----------------------------------//
            // update first name and last name in users table
            $result1 = User::find($user_id)
            ->update(['first_name'=> $request->first_name,
                      'last_name'=> $request->last_name  ,
                      'apply_again_status'=> false  
            ]);

            //----------------------------------------bursaryapps--------------------------------//
            // update bursaryapps table
            $result2 = $bursaryApp::create(
                ['user_id'=>$user_id,
                 'distance'=> $request->distance,
                 'address'=> $request->address ,
                 'phone_no'=> $request->phone_no 
                 
                ]);
               
            //--------------------------------------------notification-------------------------------//
            // get date information in colombo
            $datetime =  Carbon::now('Asia/Colombo');
            
            $user = User::select('student_no', 'scholership_status')->where('id', $user_id)->get();

			// create new 
			$notification['user_id'] = $user_id;
			$notification['notification_type_id'] = 2;
			$notification['date'] = $datetime -> format('Y-m-d');
			$notification['time'] = $datetime -> format('H:i:s');
			$notification['notification_title'] = 'Requesting bursary scholarship';
			$notification['notification_body'] = 'Hello, my student number is '.$user[0]->student_no.'. Please activate my account. Thank you.';
            $notification['status'] = 0;
            
            // update notification table
            if ($user[0]->scholership_status == 0) {
  			    // if not activate yet
			    // create new record in notification table
			    $addedNotification = Notification::create($notification);
            } 

        
            	
			// return respons message
            return response()->json(['complete' => $result1], 200);  

        }catch(QueryException $e){
            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BursaryAppModels\BursaryApp  $bursaryApp
     * @return \Illuminate\Http\Response
     */
    public function destroy(BursaryApp $bursaryApp)
    {
        //
    }

    public function saveAddualIncomeImage(Request $request){

        // validate image file
        $validation = Validator::make($request->file(), [

            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:204800',
            
            ])->validate();

        // fi validation passed
        if(empty($validation)){           
            $image = $request -> file('image');

            $datetime =  Carbon::now('Asia/Colombo');

            $uploaded_image['uploaded_date'] = $datetime -> format('Y-m-d');

            $uploaded_image['uploaded_time'] = $datetime -> format('H:i:s'); 

            $uploaded_image['extension'] = $image -> getClientOriginalExtension();

            $uploaded_image['real_name'] = $image -> getClientOriginalName();

            $uploaded_image['new_name'] = time();

            $uploaded_image['user_id'] = $request->user_id;;

            $sub_path = 'approval_images/'.$uploaded_image['user_id'];//images/2

            $uploaded_image['saved_path'] = $sub_path.'/'.$uploaded_image['new_name'].'.'.$uploaded_image['extension'];//images/2/1234345.png

            $destination_path = public_path($sub_path);
            //C:\xampp\htdocs\Projects\university2\backend\public\images/2
            
            
            if(!File::isDirectory($sub_path)){

                File::makeDirectory($sub_path, 0775, true);

            }

                $image->move($destination_path, $uploaded_image['new_name'].'.'.$uploaded_image['extension']);

                // update BursarryApps table 
                $saved_image = BursaryApp::where('user_id', $uploaded_image['user_id'])->update([
                    'real_name'=>  $uploaded_image['real_name'],
                    'new_name' => $uploaded_image['new_name'],
                    'saved_path' =>  $uploaded_image['saved_path'],
                    'extension' => $uploaded_image['extension'] ,
                    'uploaded_date' => $uploaded_image['uploaded_date'],
                    'uploaded_time' => $uploaded_image['uploaded_time']
                ]);
                     

                return response()->json(['complete' => $saved_image], 200);
                              
        }else{

            return response()->json(['fail' => $validation], 400);
        }
    }

    // aapprove for bursary scholarship
    public function approveForBursaryByAdmin(Request $request, $id){
        // return $id;
        //   return $request;
        try{

            //---------------------------------------update scholarship data in user table--------//
            $bursary = 'Bursary';

            $bursary_id = Scholership::select('id')->where('scholership_name', 'like', '%' .$bursary.  '%')->get();
            
            // return $bursary_id[0]->id;

            if ($bursary_id->isEmpty()){

                return response()->json(['message'=> "Bursary not in the system." ], 400);

            }

            // if admin approve the bursary request
            if ($request->option == "Approve") {
                $result = User::where('id', $id)->update([
                    'scholership_id'=> $bursary_id[0]->id,
                    'scholership_status'=> 1,
                    // 'apply_again_status' => 0 commented because, apply_again_status become 0 when user 
                    // submit the form.
                ]);

                return response()->json(['message'=> $result ], 200);  
            } else{// if 
                $result2 = BursaryApp::where('user_id' , $id)->delete();
                $result3 = User::where('id', $id)->update([
                    'apply_again_status' => 1
                ]);

                return response()->json(['message'=> $result3 ], 200);  
            }

        }catch(QueryException $e){
            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    
        
    }
}
