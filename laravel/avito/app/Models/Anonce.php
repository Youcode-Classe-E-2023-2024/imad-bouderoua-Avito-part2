<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anonce extends Model
{
    use HasFactory;
    protected $fillable = ['product_name', 'product_price', 'description', 'product_photo', 'city','productowner','premium'];

}
