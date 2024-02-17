<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Rent extends Model
{
    use HasFactory;
    protected $fillable = [
        'rental_date',
        'return_date',
        'price',
        'user_id',
        'car_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function car()
{
    return $this->belongsTo(Car::class);
}
}
