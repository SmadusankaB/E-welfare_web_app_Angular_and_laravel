<?php

namespace App\Http\Controllers\ExchangeControllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Models\ExchangeModels\Exchange;
use Carbon\Carbon;

class ExchangeController extends Controller
{
    // show changes of current year
    public function showExchanges () {
    
        try{
            $current_year = Carbon::now('Asia/Colombo')->format('Y');

            $changes = Exchange::leftJoin('users', function($join_users){
                $join_users -> on('exchanges.user_id', '=', 'users.id');
            })->select('users.student_no','users.first_name', 'users.last_name', 'exchanges.exchange_description', 'exchanges.created_at')
            ->where('users.entrance_year', $current_year)->get();

            return response()->json(['complete'=>$changes], 200);
            
        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    }

    // Show changes by years
    public function showExchangesByYear (Request $request) {
        // return $request[0];
        // return response()->json(['complete'=>$request], 200);
        try{

            $changes = Exchange::leftJoin('users', function($join_users){
                $join_users -> on('exchanges.user_id', '=', 'users.id');
            })->select('users.student_no','users.first_name', 'users.last_name', 'exchanges.exchange_description', 'exchanges.created_at')
            ->where('users.entrance_year', $request[0])->get();

            return response()->json(['complete'=>$changes], 200);
            
        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    }
}
