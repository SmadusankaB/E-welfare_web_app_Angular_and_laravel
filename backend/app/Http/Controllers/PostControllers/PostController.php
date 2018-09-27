<?php

namespace App\Http\Controllers\PostControllers;

use App\Models\PostModels\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Database\QueryException;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        try{

            $posts = Post::all();

            return response()->json(['complete'=>$posts], 200);

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
    public function create (){
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store (Request $request) {

        try{

            $result = Post::create($request->all());
            return response()->json($result);

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];
            return response()->json($errorCode);

        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PostModels\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PostModels\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PostModels\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{

            $result = Post::find($id)
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
     * @param  \App\Models\PostModels\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
        try{
            
            //return $id;
            return $result = Post::where('id' , $id)->delete();
            

        }catch(QueryException $e){

            $errorCode = $e->errorInfo[1];

            return response()->json($errorCode);
        }
    }
}
