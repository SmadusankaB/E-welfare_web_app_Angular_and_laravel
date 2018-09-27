<?php

namespace App\Models\ScholershipModels\Scholership;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Scholership extends Model
{
    /**
     * Get the users for the faculty.
     */
    public function users()
    {
        return $this->hasMany('User');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
   
         'scholership_name',
         'amount'
    ];

    /**
    * The attributes that should be hidden for arrays.
    *
    * @var array
    */
    protected $hidden = [
      
    ];

}
