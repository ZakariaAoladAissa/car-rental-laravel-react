<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class CarController extends Controller
{
    function index(){
        $cars = Car::orderBy("created_at","DESC")->get();
        return response()->json($cars);
    }

    function show($id){
        try {
            $car = Car::findOrFail($id); // Retrieve the car by its ID or throw a 404 error if not found
            return response()->json($car);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Car not found'], 404);
        }
    }


    //DASHBOARD CAR
    function destroy($id){
        $car = Car::find($id);

        if(!$car){
            return response()->json(['message'=>'Car not found',404]);
        }
        $car->delete();

        return response()->json(['message' => 'Car deleted successfully'], 200);

    }

    function store(Request $request){
        try {
            $car = $request->validate([
                'brand'=>'required',
                'model'=>'required',
                'fuel_type'=>'required',
                'price'=>'required',
                'gearbox'=>'required',
                'available'=>'required',
                'photo'=>'image|mimes:jpeg,png,jpg,gif,jfif'
            ]);
            //$imageName is to create a unique name 
            //don't forget to run : php artisan storage:link
            $imageName = Str::random(32).".".$request->photo->getClientOriginalExtension();
            $car['photo'] = $imageName;
            // Create Product
            Car::create($car);
            // Save Image in Storage folder
            Storage::disk('public')->put('images/' . $imageName, file_get_contents($request->photo));
            
            // Return Json Response
            return response()->json([
                'message' => "Car successfully created."
            ],200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => $e->getMessage()
            ],500);
        }
    }

    function update(Request $request, $id){

        $car = Car::find($id);
        if(!$car) { return response()->json(['message'=>'Car not found',404]);
        }
        try {
            $updatedCar = $request->validate([
                'brand'=>'required',
                'model'=>'required',
                'fuel_type'=>'required',
                'price'=>'required',
                'gearbox'=>'required',
                'available'=>'required',
                'photo'=>'sometimes|image|mimes:jpeg,png,jpg,gif,jfif'
            ]);
            if($request->hasFile('photo')){
                //$imageName is to create a unique name 
                //don't forget to run : php artisan storage:link
                $imageName = Str::random(32).".".$request->photo->getClientOriginalExtension();
                $updatedCar['photo'] = $imageName;
                            // Save Image in Storage folder
                Storage::disk('public')->put('images/' . $imageName, file_get_contents($request->photo));
            }
            
            $car->update($updatedCar);
            
            // Return Json Response
            return response()->json([
                'message' => "Car successfully updated."
            ],200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => $e->getMessage()
            ],500);
        }
    }
}
