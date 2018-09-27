<?php

namespace App\Models\BursaryAppModels;

use Illuminate\Database\Eloquent\Model;

class BursaryApp extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'distance',
        'address',
        'phone_no',
        'apply_again_status',
        'approvel_status',
        'real_name',
        'new_name',
        'saved_path',
        'extension',
        'uploaded_date',
        'uploaded_time',



   ];

   /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
    protected $hidden = [
     
   ];
}

