<?php 
//Cors middleware added to The application's global HTTP middleware stack in app/http/kernel.
//So it will call during each request.
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!

|
*/
//login user
Route::post('login', ['uses' =>'AuthenticationControllers\PassportController@login', 'as'=> 'auth.login']);

//register user
Route::post('register', 'AuthenticationControllers\PassportController@register');

//verify user by user
Route::post('verify/{id}', 'AuthenticationControllers\PassportController@verifyUser');

//request to activate accout by user when user added by annual list.
Route::post('activateaccount', 'AuthenticationControllers\PassportController@requestForActivate');

//testing purpose
Route::get('test', 'UserController\User\UserController@test');

// get common post according to page scrolling
Route::get('commonposts', 'PostControllers\CommonPostController@getPosts');

// actions that want token go in this routes group
Route::group(['middleware'=>['auth:api', 'is_activated:1']], function(){
    
	// This routs only for super admin
	Route::group(['middleware'=>['role:ROLE_SUPERADMIN']], function(){
		
		//Role controller
		Route::resources([
			//index 	- show roles
			//create    -
			//store     - Store new role
			//show      - 
			//edit      - 
			//update    - update role
			//destroy   - delete role	
			'role' => 'RoleControllers\RoleController'	
		]);

		//Post controller
		Route::resources([
			//index 	- show roles
			//create    -
			//store     - Store new role
			//show      - 
			//edit      - 
			//update    - update role
			//destroy   - delete role	
			'post' => 'PostControllers\PostController'	
		]);

		//scholarship controller
		Route::resources([
			//index 	- show roles
			//create    -
			//store     - Store new role
			//show      - 
			//edit      - 
			//update    - update role
			//destroy   - delete role	
			'scholarship' => 'ScholershipControllers\Scholership\ScholershipController'	
		]);

			//scholarship controller
		Route::resources([
			//index 	- show roles
			//create    -
			//store     - Store new role
			//show      - 
			//edit      - 
			//update    - update role
			//destroy   - delete role	
			'period' => 'PeriodControllers\PeriodController'	
		]);

		// get period start dates for select list
		Route::get('periodstartdate', 'PeriodControllers\PeriodController@getPeriodsStartDate');

		//user search by admins
		Route::post('search', 'UserController\User\UserController@searchUser');
	});

	// This routs only for admin
	Route::group(['middleware'=>['role:ROLE_ADMIN']], function(){
		// ROLE_ADMIN routes go here
	});

	//User controller
	// show(id) method is called by both web application and mobile application
	Route::resource(
		//index 	- 
		//create    -
		//store     - Store users by admin using CSV file
		//show      - Show details of user to it self
		//edit      - Edit details of user it self
		//update    - Retern details of user it self to create edit form
		//destroy   - 
		'user' , 'UserController\User\UserController'
	);

	//Image controller
	Route::resources([
		//index 	- Return logged user's profile image
		//create    -
		//store     - Store new profile image
		//show      - 
		//edit      - 
		//update    - 
		//destroy   - 	
    	'image' => 'FileControllers\Image\ImageController'	
	]);

	//Faculty Controller
	Route::resources([
		//index 	- 
		//create    -
		//store     -
		//show      - 
		//edit      - 
		//update    - 
		//destroy   - 
		'faculty' => 'FacultyControllers\Faculty\FacultyController'
	]);

	// installment  controller
	// functionas in this controller will be called by mobile application by user
	Route::resources([
		//index 	- show roles
		//create    -
		//store     - Store new role
		//show      - 
		//edit      - 
		//update    - update role
		//destroy   - delete role	
    	'signature' => 'InstallmentControllers\InstallmentController'	
	]);

	// get installments details for current period
	Route::post('periodscurrent', 'InstallmentControllers\InstallmentController@getDataofCurrentInstallment');


	// bursary app  controller
	// functionas in this controller will be called by mobile application by user
	Route::resources([
		//index 	- show roles
		//create    -
		//store     - Store new role
		//show      - 
		//edit      - 
		//update    - update role
		//destroy   - delete role	
    	'bursaryapp' => 'BursaryAppControllers\BursaryAppController'	
	]);

	// get installments details for current period
	Route::post('bursaryimage', 'BursaryAppControllers\BursaryAppController@saveAddualIncomeImage');

	// approve for bursary by admin
	Route::post('bursaryapprove/{id}', 'BursaryAppControllers\BursaryAppController@approveForBursaryByAdmin');



	

	//user update by admin
	Route::put('/userupdate/{id}', 'UserController\User\UserController@userUpdate');

	// get dashborad components, this will call wheb dashoard page loading
	Route::get('dashborad', 'DashboardControllers\DashboardController@getDashboardCounts');
	// get users according to year for Doughnut
	Route::get('dashboarddoughnut/{year}', 'DashboardControllers\DashboardController@getUserByYearsForDoughnut');
	// get period of current year for Doughnut
	Route::get('currentmonths', 'DashboardControllers\DashboardController@getPeriodsOfCurrentYear');
	// get users according to year for barchart
	Route::get('dashboardbarchart/{year}', 'DashboardControllers\DashboardController@getUserByYearsForBarChart');
	
	// get changes of current year
	Route::get('exchange', 'ExchangeControllers\ExchangeController@showExchanges');
	// get changes accrdong selected year
	Route::post('exchangeyear', 'ExchangeControllers\ExchangeController@showExchangesByYear');
	
	// get signed students in real time
	Route::get('signedstu', 'DashboardControllers\DashboardController@numberOfSignedUsers');

	// get user dashboard counts
	Route::get('dashboraduser/{userId}', 'DashboardControllers\DashboardController@getUserDashboardCounts');

	//logout user
	Route::get('logout', 'AuthenticationControllers\PassportController@logout');
	
});


