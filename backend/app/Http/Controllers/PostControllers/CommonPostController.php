<?php

namespace App\Http\Controllers\PostControllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\PostModels\Post;

class CommonPostController extends Controller
{
    // Get posts on page scrolling
    // Don't change 1 from paginate method
    public function getPosts(){
        
        $posts = Post::paginate(4);
        return response()->json($posts);
    }
}
