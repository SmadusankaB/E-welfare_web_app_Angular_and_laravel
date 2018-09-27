<?php

namespace App\Models\FileModels\Image;

use Illuminate\Database\Eloquent\Model;
use App\Models\FileModels\Image\Image;

class Image extends Model
{
    

    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'real_name', 'new_name', 'saved_path','extension', 'uploaded_date', 'uploaded_time', 'user_id'
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'real_name', 'new_name', 'extension', 'id'
    ];

    
    /**
     * Get the user that owns the image.
     */
    public function user()
    {
        return $this->belongsTo('App\User')
        ->withTimestamps();
    }
}
