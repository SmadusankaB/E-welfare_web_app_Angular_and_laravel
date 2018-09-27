<?php

namespace App\Models\FacultyModels\Faculty;

use Illuminate\Database\Eloquent\Model;


class Faculty extends Model
{



	/**
     * Get the users for the faculty.
     */
    public function users()
    {
        return $this->hasMany('App\User');
    }



	/**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'faculty_name'
    ];

    /**
    * The attributes that should be hidden for arrays.
    *
    * @var array
    */
     protected $hidden = [
      
    ];
    

 
}
