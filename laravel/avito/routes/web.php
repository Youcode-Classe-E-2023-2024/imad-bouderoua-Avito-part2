<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

use App\Http\Controllers\AdminController;

Route::get('/', [AdminController::class, 'index']);
Route::delete('/delete-announcement/{id}', [AdminController::class, 'deleteAnnouncement']);
Route::delete('/delete-user/{id}', [AdminController::class, 'deleteuser']);