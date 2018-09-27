<?php

namespace App\Http\Controllers\AuthenticationControllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\User; 
use App\NotificationModels\Notification;
use Carbon\Carbon;
use Validator;
use DB;
use Mail;



use Laravel\Passport\HasApiTokens;


/**
* 
*/
class PassportController extends Controller
{
	public $successStatus = 200;

	/**
	* login api
	* @return \Illuminate\Http\Response
	*/
	public function login(Request $request){

		//return response()->json('hi');
		// return response()->json(['data'], 200);

		// validate user login details
		$validator = Validator::make($request->all(),[
			'student_no' => 'required',
			'password' => 'required',
			
		]);


		// return validate result
		if($validator->fails()){
			return response()->json([$validator->errors()],	400);
		}


		// check credintials (student on and password) and user activation status
		if(Auth::attempt(['student_no' => request('student_no'), 'password'
			=> request('password'), 'is_activated'=>1])){
			
			// Get the currently authenticated user...
			$user = Auth::user();

			// get role of the currently authenticated user
			$role = $user->roles;
			
			// assign id of currenlt authenticated user's id into return array
			$complete['id'] = $user['id'];
				  
		    // if currently authenticated user has a role
		    if(count($role)>0){
		    	// assign role of currently authenticated user in to return array
		    	$complete['role'] = $role[0]->name; 
		    }else{

				// if currenlty aitheticted user doesn't have any role type, the he/she will be 
				// assigned a default user type call ROLE_GENERAL into return array
		    	$complete['role'] = 'ROLE_GENERAL';
		    }

			// assign token into currenty authenticated user and it also assign into return array
			$complete['token'] = Auth::user()->createToken('oauth')->
			accessToken; //Assign token to authenticated user

			// return, return array with id, role_type and token
			return response()->json(['complete' => $complete], 200);

		}else{

			// return fail response, if unauthorized credentials was provided.
			return response()->json(['fail' => 'Unauthorised credentials. Try again'], 401);
		}
		
	}

	


	/**
	* Register api
	*
	* @return \Illuminate\Http\Response
	*/
	public function register(Request $request){
		//return response()->json([$request->password, $request->confirm_password]);
		$validator = Validator::make($request->all(),[
			'student_no'=> 'required|unique:users',
			'email' => 'required|unique:users|email',
			'password' => 'required',
			'confirm_password' => 'required|same:password',
		]);

		
		//Validate inputs
		if($validator->fails()){
			return response()->json([$validator->errors()], 200);
		}

		//get request details
		$input = $request->all();

		//encrypt password
		$input['password'] = bcrypt($input['password']);
		
		//Create user and get details
		$user = User::create($input);
	
		// assign id of newly created user into rturn array
		$success['id'] = $user->id;

		//Create random strings for email
		$user['code'] =  str_random(4);

		// create new record with user id and code ni user_activation table
		DB::table('users_activation')->insert(['id_user' => $user['id'], 'code' => $user['code']]);

		// Then send email to provided email with 4 string code.
		$mail = Mail::send('emails.activation', $user->toArray(), function($message) use ($user){
			$message->to($user['email']);
			$message->subject('Student welfare, UOK - Activation code');
		});

		// assign success message into return array.
		$success['message'] = 'Activation code sent. Check your email';

		// return response with, user id and message.
		return response()->json(['complete'=> $success], 200);
	}



	//Verify user by code
	public function verifyUser(Request $request, $id){

		// grab code from request
		$code = $request->code;

		// grab id from request
		$user_id = $id;
		
		// get recorde of current user from users_activation table
		$check = DB::table('users_activation')->where('id_user', $user_id)->first();

		// if a row exisit
		if(!is_null($check)){

			// check mailed code and user provided code are match or not.
			if($code == $check->code ){

				// then get user details of current user.
				$user = User::find($check->id_user);

				// if account status already equal to one
				if($user->is_activated == 1){
					// return message
					return response()->json(['error'=> 'You already activated. Please login.'], 400);
				}else{// if user account is not activated yet

					// get the role of current user
					$role = $user->roles;

					// if current user has a role
					 if(count($role)>0){
						
						// assign role into return array
		    			$success['role'] = $role[0]->name; //Assign role name to response array
		    	    }else{

						// if the current user doesn't have a role, then assign default user type call 
						// ROLE_GENERAL
		    	    	$success['role'] = 'ROLE_GENERAL';
		    	    }
					
					// assign current user id into return array
					$success['id'] = $user['id'];

					// activate user by updating value of is_activated  into 1
					$user->update(['is_activated'=>1]);

					// remove row or activated user from users_activation table
					DB::table('users_activation')->where('code', $code)->delete();

					//create and assign a token into return array
					$success['token'] = $user->createToken('oauth')->accessToken;
					
					// return response with id, role, token
					return response()->json(['complete'=> $success], 200);
				}
			}else{

				// if codes don't match
				// return error message
				return response()->json(['fail'=>'Invalid code.'], 400);
			}
		}else{

			// if user doesn't have a row in users-activation table
			// return error message
			return response()->json(['fail'=>'An error has occured. Please contact Administrator.', 401]);
		}

		
	}


	//request for activate user after entering manually (using scv file) into the system 
	// this should implemented in verify page.
	public function requestForActivate(Request $request){

		// validate student_no field
		$validator = Validator::make($request->all(),[
            'student_no'=> 'required'            
        ]);

		// if validation faled
        if($validator->fails()){
			// return error message
        	return response()->json(['fail' => $validator->errors()],    400);
        }

		
		try{

			// if validation pass
			// get user id of user who made the account actiation request
			$user_id = User::select('id')
			->where('student_no', $request->student_no)
			->get();

			// get date information in colombo
			$datetime =  Carbon::now('Asia/Colombo');

			// create new 
			$notification['user_id'] = $user_id[0]->id;
			$notification['notification_type_id'] = 1;
			$notification['date'] = $datetime -> format('Y-m-d');
			$notification['time'] = $datetime -> format('H:i:s');
			$notification['notification_title'] = 'Requesting activate my account';
			$notification['notification_body'] = 'Hello, my student number is '.$request->student_no.'. Please activate my account. Thank you.';
			$notification['status'] = 0;

			// check user accout aleardy activated or not
			$is_activated = User::select('is_activated')->where('id', $user_id[0]->id)->get();
			
			// if user doen't activate yet
			if ($is_activated[0]->is_activated != 0) {
				return response()->json(['complete' => 1], 200); // account already activated   
			}else { // if not activate yet
				// create new record in notification table
				$addedNotification = Notification::create($notification);
				
				// return respons message
				return response()->json(['complete' => 2], 200);             
			}

			

        }catch(QueryException $e){

			// 
            $errorCode = $e->errorInfo[1];
            return response()->json(['fail' => $errorCode], 400);
        }
	}


	/**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard(){
        return Auth::guard('api');
    }

	// logout the user
    public function logout(Request $request)
    {
        $accessToken = Auth::user()->token();
        DB::table('oauth_refresh_tokens')->where('access_token_id', $accessToken->id)->update(['revoked' => true]);
        $accessToken->revoke();
        return response(['message'=>'Logout!'], 200);
    }

}

