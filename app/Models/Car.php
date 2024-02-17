<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;
    protected $fillable = [
        'brand',
        'photo',
        'model',
        'fuel_type',
        'price',
        'gearbox',
        'available',
    ];

    public function rents()
    {
        return $this->hasMany(Rent::class);
    }
}
