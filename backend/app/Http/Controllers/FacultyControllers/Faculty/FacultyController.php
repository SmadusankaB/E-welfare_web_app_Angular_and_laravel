<?php

namespace App\Http\Controllers\FacultyControllers\Faculty;

use App\Models\FacultyModels\Faculty\Faculty;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Exceptions\Handler;

class FacultyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{

            $faculties = Faculty::all();
            //$faculties = Faculty::get();

            return response()->json(['complete' => $faculties], 200);

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }

        
        return response()->json( $faculties );
        
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

            $result = Faculty::create($request->all());
            return response()->json($result);

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];
            return response()->json($errorCode);

        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FacultyModels\Faculty\Faculty  $faculty
     * @return \Illuminate\Http\Response
     */
    public function show(Faculty $faculty)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FacultyModels\Faculty\Faculty  $faculty
     * @return \Illuminate\Http\Response
     */
    public function edit(Faculty $faculty)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FacultyModels\Faculty\Faculty  $faculty
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Faculty $faculty)
    {
        
        try{
            $result = Faculty::find($faculty->id)
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
     * @param  \App\Models\FacultyModels\Faculty\Faculty  $faculty
     * @return \Illuminate\Http\Response
     */
    public function destroy(Faculty $faculty)
    {
        // return response()->json('scholership');
        try{
            $id = $faculty->id;
            //return $id;
            $result = Faculty::where('id' , $id)->delete();
            return response()->json($result);
            

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    }
}
