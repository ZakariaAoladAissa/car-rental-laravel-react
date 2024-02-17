<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminRoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the authenticated user has the admin role
        if ($request->user() && $request->user()->hasRole('admin')) {
            return $next($request);
        }else{
            // If user doesn't have admin role, return unauthorized response
            return response()->json(['error' => 'You should be admin to get here'], 403);
    
        }

        
    }
}
