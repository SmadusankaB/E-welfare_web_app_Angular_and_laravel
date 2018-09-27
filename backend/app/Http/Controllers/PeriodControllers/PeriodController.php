<?php

namespace App\Http\Controllers\PeriodControllers;

use App\Models\PeriodModels\Period;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PeriodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{

            $periods = Period::all();

            return response()->json(['complete'=>$periods], 200);

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
        try{

            $result = Period::create($request->all());

            return response()->json($result);

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PeriodModels\Period  $period
     * @return \Illuminate\Http\Response
     */
    public function show(Period $period)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PeriodModels\Period  $period
     * @return \Illuminate\Http\Response
     */
    public function edit(Period $period)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PeriodModels\Period  $period
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        try{

            $result = Period::find($id)
            ->update($request->all());

        return response()->json($result);

        }catch(QueryException $e){
            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PeriodModels\Period  $period
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
           
            //return $id;
            return $result = Period::where('id' , $id)->delete();
            

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    }

    // getPeriodsStartDate
    public function getPeriodsStartDate(){
        // return $period_start_date;

        try{
        
            $period_start_date = Period::select('start_date')->get();
            return response()->json(['complete'=>$period_start_date],200);

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    }
}
