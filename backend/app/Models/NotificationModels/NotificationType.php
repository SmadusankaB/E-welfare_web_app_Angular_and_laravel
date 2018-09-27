<?php

namespace App\Models\NotificationModels;

use Illuminate\Database\Eloquent\Model;

class NotificationType extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'notofication_type'
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        
    ];
}
