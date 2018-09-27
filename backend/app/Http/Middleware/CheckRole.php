<?php
namespace App\Http\Middleware;
use Closure;
class CheckRole{

    /**
    * Handle an incoming request.
    * Check the user has autherization.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  \Closure  $next
    * @return mixed
    */

    public function handle($request, Closure $next, $role){

        if (! $request->user()->hasRole($role)) {

            /*abort(401, 'This action is unauthorized.');*/
            
            return response()->json(['message'=>'This action is unauthorized.'], 401);

        }

        return $next($request);
    }   
}
