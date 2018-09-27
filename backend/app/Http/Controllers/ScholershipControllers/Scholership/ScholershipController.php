<?php

namespace App\Http\Controllers\ScholershipControllers\Scholership;

use App\Models\ScholershipModels\Scholership\Scholership;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ScholershipController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{

            $scholaerships = Scholership::all();
            //$faculties = Faculty::get();

            return response()->json(['complete' => $scholaerships], 200);

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

            $result = Scholership::create($request->all());
            return response()->json($result);

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];
            return response()->json($errorCode);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ScholershipModels\Scholership\Scholership  $scholership
     * @return \Illuminate\Http\Response
     */
    public function show(Scholership $scholership)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ScholershipModels\Scholership\Scholership  $scholership
     * @return \Illuminate\Http\Response
     */
    public function edit(Scholership $scholership)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ScholershipModels\Scholership\Scholership  $scholership
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        try{
            $result = Scholership::find($id)
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
     * @param  \App\Models\ScholershipModels\Scholership\Scholership  $scholership
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
        // return response()->json($scholership);
        try{
            
            //return $id;
            $result = Scholership::where('id' , $id)->delete();
            return response()->json($result);
            
        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    }
}
