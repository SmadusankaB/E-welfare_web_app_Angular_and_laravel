<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;


class User extends Authenticatable{
    use HasApiTokens, Notifiable;

  /**
     * Get the changes for the user.
     */
    public function exchanges()
    {
        return $this->hasMany('App\Models\ExchangeModels\Exchange');
    }


    /**
     * Get the roles for the user.
     */
    public function roles(){
        return $this
            ->belongsToMany('App\Models\RoleModels\Role')
            ->withTimestamps();
    }

    public function authorizeRoles($roles){
      if ($this->hasAnyRole($roles)) {
        return true;
      }
      
       return response()->json(['message'=>'This action is unauthorized.'], 401);
    }


    public function hasAnyRole($roles)
    {
      if (is_array($roles)) {
        foreach ($roles as $role) {
          if ($this->hasRole($role)) {
            return true;
          }
        }
      } else {
        if ($this->hasRole($roles)) {
          return true;
        }
      }
      return false;
    }


    public function hasRole($role)
    {
      if ($this->roles()->where('name', $role)->first()) {
        return true;
      }
      return false;
    }


    /**
     * Get the faculty record associated with the user.
    */
    public function faculty()
    {
        return $this->belongsTo('App\Models\FacultyModels\Faculty\Faculty');
    }

    /**
     * Get the scholership record associated with the user.
    */
    public function scholership()
    {
        return $this->belongsTo('App\Models\ScholershipModels\Scholership');
    }


    /**
     * Get the images for the user.
     */
    public function images()
    {
        return $this->hasMany('App\Models\FileModels\Image\Image');
    }

    /**
     * Get the installments for the user.
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
          
         'first_name', 
         'last_name',
         'student_no', 
         'email', 
         'password',
         'is_activated',
         'faculty_id',
         'scholership_id',
         'entrance_year',
         'profile_summary',
         'nic',
         'scholership_status',
         'apply_again_status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'faculty_id'
    ];
}
