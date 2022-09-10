<?php

use App\Http\Controllers\CurriculumController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes();
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/curriculo/criar', [CurriculumController::class, 'index'])->name('curriculo.criar');
    Route::post('/curriculo', [CurriculumController::class, 'store']);
    Route::post('/curriculo/{curriculum}', [CurriculumController::class, 'edit']);
    Route::get('/curriculo/editar/{curriculum}', [CurriculumController::class, 'get']);
    Route::delete('/curriculo/{curriculum}', [CurriculumController::class, 'delete']);
});


Route::get('/401', function () {
    return view('401');
});
