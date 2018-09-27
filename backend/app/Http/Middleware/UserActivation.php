<?php

namespace App\Http\Middleware;

use Closure;

class UserActivation
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $is_activated)
    {
        if ($request->user()->is_activated == $is_activated) {

            /*abort(401, 'This action is unauthorized.');*/ 
            return $next($request);
        }

        return response()->json(['message'=>'This action is unauthorized.'], 401);
        
    }
}
