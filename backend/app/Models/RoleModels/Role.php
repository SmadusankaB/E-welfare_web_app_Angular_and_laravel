<?php

namespace App\Models\RoleModels;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /**
     * Get the users that belongs to the role.
     */
    public function users(){
        return $this
            ->belongsToMany('App\User')
            ->withTimestamps();
    }



    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 
        'name',
        'description'
   ];

   /**
    * The attributes that should be hidden for arrays.
    *
    * @var array
    */
   protected $hidden = [
       
       'created_at',
       'updated_at'
   ];
}
