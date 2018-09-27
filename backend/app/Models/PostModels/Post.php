<?php

namespace App\Models\PostModels;

use Illuminate\Database\Eloquent\Model;

class Post extends Model{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 
        'title',
        'date',
        'description',
        'user_id',
   ];

   /**
    * The attributes that should be hidden for arrays.
    *
    * @var array
    */
   protected $hidden = [
      
   ];
}


    