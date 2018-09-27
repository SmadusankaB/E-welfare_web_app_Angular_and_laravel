<?php

namespace App\Models\PeriodModels;

use Illuminate\Database\Eloquent\Model;

class Period extends Model
{
    /**
     * Get the installments for the period.
     */
    public function installment()
    {
        return $this->hasMany('App\Models\InstallmentModels\Installment');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 
       'start_date',
       'end_date',
       'status'

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
