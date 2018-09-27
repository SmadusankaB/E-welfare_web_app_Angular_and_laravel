<?php

namespace App\Models\ExchangeModels;

use Illuminate\Database\Eloquent\Model;

class Exchange extends Model
{
     /**
     * Get the user record associated with the change.
    */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

	/**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'user_id',
         'exchange_description'
    ];

    /**
    * The attributes that should be hidden for arrays.
    *
    * @var array
    */
     protected $hidden = [
      
    ];
}
