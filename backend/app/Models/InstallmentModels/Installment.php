<?php

namespace App\Models\InstallmentModels;

use Illuminate\Database\Eloquent\Model;

class Installment extends Model
{
    /**
     * Get the user record associated with the installment.
    */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the period record associated with the installment.
    */
    public function period()
    {
        return $this->belongsTo('App\Models\PeriodModels\Period;');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 
        'user_id',
        'period_id',
        'signature',
        'number_of_attempts'
   ];

   /**
    * The attributes that should be hidden for arrays.
    *
    * @var array
    */
   protected $hidden = [
    //    'password', 'remember_token', 'is_activated', 'faculty_id'
   ];
}
