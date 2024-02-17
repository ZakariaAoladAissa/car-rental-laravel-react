<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Car;
use App\Models\Rent;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class RentController extends Controller
{
    function index(){
        $rentals = Rent::orderBy("created_at","DESC")->get();
        return response()->json($rentals);
    }

    function store(Request $request){
        $rent = $request->validate([
            'rental_date'=>'required',
            'return_date'=>'required',
            'price'=>'required',
            'car_id'=>'required'
        ]);
        $oldDate = $rent['rental_date'] / 1000; // Convert milliseconds to seconds
        $rent['rental_date'] = Carbon::createFromTimestamp($oldDate);
        $oldDate = $rent['return_date'] / 1000; // Convert milliseconds to seconds
        $rent['return_date'] = Carbon::createFromTimestamp($oldDate);
        $rent['user_id']=auth()->id();

        Rent::create($rent);
        return response()->json([
            'message' => "Rent successfully created."
        ],200);
    }

    function show($user_id){
        //there maybe another way to get the user id without it being sent 
        //using auth()->payload()->get('sub')
        try {
            $user = User::find($user_id); 
            if(!$user){
                return response()->json(['message'=>'User not found'], 404);
            }
            //return the rent of the user and also infos of the car (uses fk car_id and car() method in Rent model)
            $rentals = $user->rents()->with('car')->get();
 
            return response()->json($rentals);
        } catch (\Exception $e) { 
            return response()->json(['error' => $e->getMessage()], 404);
        }
    }

    function destroy($user_id,$id){
        $user = User::find($user_id);

        if(!$user){
            return response()->json(['message'=>'User not found'], 404);
        }

        $rental = $user->rents()->find($id);
        if(!$rental){
            return response()->json(['message'=>'Rental not found',404]);
        }
        $rental->delete();

        return response()->json(['message' => 'Rental deleted successfully'], 200);

    }
}
