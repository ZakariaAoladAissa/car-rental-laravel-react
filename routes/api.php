<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//user related routes
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'//http://example.dev/auth/login

], function ($router) {
    Route::post('/register',[AuthController::class,'register']);
    Route::post('login', [AuthController::class,'login']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});


//not sure if checking authentication works correctly
Route::group([
    'middleware' => 'api',

], function ($router) {
    //user rentals routes
    Route::get('/{user_id}/rent',[RentController::class,'show']);
    Route::delete('/{user_id}/rent/{id}',[RentController::class,'destroy']);

    //rent routes
    Route::get('/rent',[RentController::class,'index']);
    Route::post('/rent',[RentController::class,'store']);
    //show individual car
    Route::get('/cars/{id}',[CarController::class,'show']);

});

//check admin for dashboard routes
//UI cars routes
Route::group(['middleware' => 'admin'], function () {
    //dashboard user route
    Route::get('/users',[AuthController::class,'index']);
    //dashboard car
    Route::post('/cars',[CarController::class,'store']);
    Route::delete('/cars/{id}',[CarController::class,'destroy']);
    Route::put('/cars/{id}',[CarController::class,'update']);
});

//show all cars 
Route::get('/cars',[CarController::class,'index']);



