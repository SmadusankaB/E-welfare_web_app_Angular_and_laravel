<?php

namespace App\Http\Controllers\DashboardControllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


use App\Models\FacultyModels\Faculty\Faculty;
use App\Models\PostModels\Post;
use App\User;
use App\Models\ScholershipModels\Scholership\Scholership;
use Carbon\Carbon;
use App\Models\PeriodModels\Period;
use App\Models\InstallmentModels\Installment;

class DashboardController extends Controller
{
    // get admin dashboard counts 
    // this is the default function that will call when admin page loading
    public function getDashboardCounts(){

        try{

            //-------------------------------- section 01----------------------------------
            // count from database
            $n_of_installments = Period::count();
            $n_of_faculties = Faculty::count();
            $n_of_posts = Post::count();
            $n_of_scholarship= Scholership::count();            
            // assign to response array
            $dashboard_counts['n_of_installments'] = $n_of_installments;
            $dashboard_counts['n_of_faculties'] = $n_of_faculties;
            $dashboard_counts['n_of_posts'] = $n_of_posts;
            $dashboard_counts['n_of_scholarship'] = $n_of_scholarship;


            //--------------------------------- section 2-----------------------------------
            $faculty_ids = Faculty::distinct('faculty_name')->pluck('id');
            // return $faculty_ids;
            $scholership_ids = Scholership::distinct('scholership_name')->pluck('id');
            // return $scholership_ids;

            
             // get current status of number of users who has a faculty and a scholarship
              // Also, there may be users who didn't for installments once
              // in this, data getting from users table. so, users table cotains data
              // after doing scholarship changes
                $array_rounded_chart = array();
                $k = 0;
                for( $i = 0; $i < count($faculty_ids); $i++) {
                    for( $j = 0; $j < count($scholership_ids); $j++){
                            $array_rounded_chart[$k] =  User::select('student_no')
                            ->where('faculty_id', $faculty_ids[$i])
                            ->where('scholership_id', $scholership_ids[$j])
                            ->count();  
                            $k++;         
                    }
                } 


            // ----------------------------------------section 3------------------------------------
            // getting number of signed students for installments

            // get current date
            $date_now = Carbon::now()->year;
            $current_periods = Period::where('start_date', 'like', '%' .$date_now.  '%')->pluck('id');
            
            // get status of current year (periods) of users who has signed for instalments
           // there pn be persons who signed for scholarships atleast once
            $array_bar_chart = array();
           
 
            $n = 0;
            for ($l=0; $l < count($current_periods) ; $l ++ ){
                for ($m = 0; $m < count($scholership_ids); $m ++) {
                $array_bar_chart[$n] = Installment::leftJoin('periods', 
                        function($join_periods)
                        {
                            $join_periods-> on('installments.period_id', '=', 'periods.id');
                        })->select('installments.user_id')
                        ->where('installments.scholership_type_id', $scholership_ids[$m])
                        ->where('installments.period_id', $current_periods[$l])
                        ->count();
                        $n ++;
                }
            }

                           // return x;


            return response()->json(['complete' => $dashboard_counts, 
                                     'facul_and_schol_vs_user' => $array_rounded_chart,
                                     'period_and_schol_vs_user' => $array_bar_chart], 200);

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }

    }

    // ---------this function will call on yesr  select for Doughnut --------------------------//
    public function getUserByYearsForDoughnut($year) {
       
        try{

            $faculty_ids = Faculty::distinct('faculty_name')->pluck('id');
            $scholership_ids = Scholership::distinct('scholership_name')->pluck('id');
            //return $faculty_ids;
                // this array will contain all the students according to faculty 
                // and scholarship sparately.
                $array_rounded_chart = array();
    
                // $k increaces array index
                $k = 0;
                for( $i = 1; $i <= count($faculty_ids); $i++) {
                    for( $j = 1; $j <= count($scholership_ids); $j++){
                           // Assign each combination on to the array
                            $array_rounded_chart[$k] =  User::select('student_no')
                            ->where('faculty_id', $i)
                            ->where('scholership_id', $j)
                            ->where('entrance_year', $year)
                            ->count();  
                            $k++;        
                    }
                }  

            //dd($result);
            return response()->json(['facul_and_schol_vs_user' => $array_rounded_chart], 200);

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    }

    // get periods of current year
    public function getPeriodsOfCurrentYear() {
        $time_now = Carbon::now()->year;

            $current_periods = Period::select('start_date')
                ->where('start_date', 'like', '%' .$time_now.  '%')->get();
            return response()->json(['complete'=> $current_periods], 200);

    }

 // ---------this function will call on yers  select for Barchart --------------------------//
    public function getUserByYearsForBarChart($year){
        try{

            $A=2019;
            $current_periods = Period::where('start_date', 'like', '%' .$year.  '%')->pluck('id');
            $scholership_ids = Scholership::distinct('scholership_name')->pluck('id');

            $array_bar_chart = array();
               
            // $n = 0;
            // for ($l=0; $l < count($current_periods) ; $l ++ ){
            //     for ($m = 0; $m < count($scholership_ids); $m ++) {
                 
            //             $array_bar_chart[$n] = Installment::leftJoin('periods', 
            //             function($join_periods)
            //             {
            //                 $join_periods-> on('installments.period_id', '=', 'periods.id');
            //             }
            //             )->leftJoin('users', 
            //             function($join_users)
            //             {
            //                 $join_users-> on ('installments.user_id', '=', 'users.id');
            //          })
            //             ->leftJoin('scholerships',
            //             function($join_scholerships){
            //                 $join_scholerships->on( 'users.scholership_id', '=', 'scholerships.id' );
            //             })->select('installments.user_id')
            //             ->where('period_id', $current_periods[$l])
            //             ->where('scholership_id', $scholership_ids[$m])
            //             ->count();                  
            //         $n ++;
            //     }
            // } 

            $n = 0;
            for ($l=0; $l < count($current_periods) ; $l ++ ){
                for ($m = 0; $m < count($scholership_ids); $m ++) {
                $array_bar_chart[$n] = Installment::leftJoin('periods', 
                        function($join_periods)
                        {
                            $join_periods-> on('installments.period_id', '=', 'periods.id');
                        })->select('installments.user_id')
                        ->where('installments.scholership_type_id', $scholership_ids[$m])
                        ->where('installments.period_id', $current_periods[$l])
                        ->count();
                        $n ++;
                }
            }
 
            return response()->json(['period_and_schol_vs_user' => $array_bar_chart], 200);

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }

    }


    public function numberOfSignedUsers(){

        try{
          
            $n_of_registered_users = User::count();

            $n_of_approved_accounts = User::where('is_activated', 1)->count();
            $n_of_rejected_accounts = User::where('is_activated', 0)->count();

            $numOfUsers = Installment::leftJoin('periods', function ($join_periods) {
                $join_periods -> on ('installments.period_id', '=', 'periods.id');
            })->where('periods.status', 1)->count();

            $data['n_of_registered_users'] = $n_of_registered_users;
            $data['numOfUsers'] = $numOfUsers;
            $data['n_of_approved_accounts'] = $n_of_approved_accounts;
            $data['n_of_rejected_accounts'] = $n_of_rejected_accounts;

            return response()->json(['complete' => $data], 200);

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }

    }


    public function getUserDashboardCounts($user_id) {
            // return $user_id;
            
        try{

            // get scholarship
            $user = User::leftJoin('scholerships', function ($join_scholarships) {
                $join_scholarships -> on ('scholerships.id', '=', 'users.scholership_id');
            })->select('scholerships.scholership_name')->where('users.id', $user_id)->get();

            // get number of installemts
            $n_of_installments = Installment::where('user_id', $user_id)->count();

            // current month signature status
            $signature_status = Installment::leftJoin('periods', function($join_periods){

                $join_periods -> on('installments.period_id','=','periods.id');
            })->select('periods.start_date')->where('periods.status', 1)->where('installments.user_id', $user_id)->get();
            
            $active_period = Period::select('start_date', 'end_date')->where('status', 1)->get();
            
            
            // cif user doesn't have a scholarship
            if ($user[0]->scholership_name == null) {

                $data['scholership_name'] = "You don't have any sholarship";
                $data['signature_status'] = "No data";
                $data['n_of_installments'] ="No data";
                $data['period'] = "No data";

            }else{ // if user have scholarship

                // get name
                $data['scholership_name'] = $user[0]->scholership_name;
                // get number od installments
                $data['n_of_installments'] = $n_of_installments;

                // if there is on an active period
                if ($active_period->isEmpty()){
                    $data['period'] = "No active period";
                    $data['signature_status'] = "Not signed yet";
                }else {
                    $data['period'] ='From '. $active_period[0]->start_date.' to '. $active_period[0]->end_date; 

                    // If there is an active period, but user doesn't sign yet
                    if ($signature_status->isEmpty()){

                        $data['signature_status'] = "Not signed yet";                      
                    }else {// If there is an active period and user sign 
                        $data['signature_status'] = "Signed";                       
                    }
                }

               
            }

            $installments = Installment::leftJoin('periods', function($join_period){
                $join_period -> on ('periods.id', '=', 'installments.period_id');
            })->where('installments.user_id', $user_id)->get();
           
            //return $installments;
            return response()->json(['complete' => $data, 'installemtns'=>$installments ], 200);

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    }

    

    
}
