<?php

namespace App\Http\Controllers\FileControllers\Image;

use Validator;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use App\Models\FileModels\Image\Image;
use Illuminate\Support\Facades\Storage; 

class ImageController extends Controller
{

       

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return response()->json('message');

        $user_id = Auth::user()['id'];
        //return $user_id;

        $profile_image = Image::select(array('saved_path', 'uploaded_date', 'uploaded_time'))
            ->where('new_name', Image::where('user_id', $user_id)
            ->max('new_name'))
            ->get();
        return response()->json($profile_image);
         /*$profile_image = Image::select('id')
             ->where('user_id', $user_id)
             ->get();
        return response()->json($profile_image);*/
       
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //http://127.0.0.1:8000/api/image/create
        //get
        //return 'create';

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $validation = Validator::make($request->file(), [

            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            
            ])->validate();

        if(empty($validation)){           
            $image = $request -> file('image');

            $datetime =  Carbon::now('Asia/Colombo');

            $uploaded_image['uploaded_date'] = $datetime -> format('Y-m-d');

            $uploaded_image['uploaded_time'] = $datetime -> format('H:i:s'); 

            $uploaded_image['extension'] = $image -> getClientOriginalExtension();

            $uploaded_image['real_name'] = $image -> getClientOriginalName();

            $uploaded_image['new_name'] = time();

            $uploaded_image['user_id'] = $request->user_id;//2

            $sub_path = 'images/'.$uploaded_image['user_id'];//images/2

            $uploaded_image['saved_path'] = $sub_path.'/'.$uploaded_image['new_name'].'.'.$uploaded_image['extension'];//images/2/1234345.png

            $destination_path = public_path($sub_path);
            //C:\xampp\htdocs\Projects\university2\backend\public\images/2
            
            if(!File::isDirectory($sub_path)){

                File::makeDirectory($sub_path, 0775, true);

            }

                $image->move($destination_path, $uploaded_image['new_name'].'.'.$uploaded_image['extension']);

                $saved_image = Image::create($uploaded_image);

                return response()->json([$saved_image]);
                              
        }else{

            return response()->json($validation);
        }
        
    }
        
        

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FileModels\Image\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        return 'hi';
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FileModels\Image\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit(Image $image)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FileModels\Image\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FileModels\Image\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        //
    }
}
