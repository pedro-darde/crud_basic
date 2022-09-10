<?php

namespace App\Http\Controllers;

use App\Models\Curriculum;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $items = Curriculum::all();
        return view('dashboard', compact('items'));
    }
}
