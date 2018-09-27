<?php

namespace App\Http\Controllers\RoleControllers;

use App\User;
use App\Models\RoleModels\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Database\QueryException;

class RoleController extends Controller{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
           

        try{

            $roles = Role::all();

            return response()->json(['complete'=>$roles], 200);

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
    public function store(Request $request){

        
        try{

            $result = Role::create($request->all());

            return response()->json($result);

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
           
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RoleModels\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RoleModels\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function edit(Role $role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\RoleModels\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{

            $result = Role::find($id)
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
     * @param  \App\Models\RoleModels\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){

        try{
           
            //return $id;
            return $result = Role::where('id' , $id)->delete();
            

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    }
}