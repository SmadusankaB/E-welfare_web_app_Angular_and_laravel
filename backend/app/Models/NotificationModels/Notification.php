<?php

namespace App\Models\NotificationModels;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model{
    
    /**
     * Get the notification_type that owns the notification.
     */
    public function notificationType(){

        return $this->belongsTo('App\Models\NotificationModels\NotificationType');
    }

    /**
     * Get the user that owns the notification.
     */
    public function user(){
        
        return $this->belongsTo('App\User');
    }    


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'user_id',
         'notification_type_id',
         'date',
         'time',
         'notification_title',
         'notification_body',
         'status'
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        
    ];
}
