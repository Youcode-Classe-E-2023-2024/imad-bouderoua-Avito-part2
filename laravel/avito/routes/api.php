<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;

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

Route::post('/register', [LoginController::class, 'login']);
Route::post('/login', [LoginController::class, 'logaccount']);
Route::post('/anonce', [LoginController::class, 'addanonce']);
Route::get('/getanonce', [LoginController::class, 'getdata']);
Route::get('/images/{filename}', [LoginController::class, 'getImage'])->name('image.show');
Route::get('/useranonces/{username}', [LoginController::class, 'useranonces']);

