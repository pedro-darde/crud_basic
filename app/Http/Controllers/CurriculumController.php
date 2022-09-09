<?php

namespace App\Http\Controllers;

use App\Http\Middleware\AdminMiddleware;
use Illuminate\Http\Request;

class CurriculumController extends Controller
{
    public function __construct()
    {
        $this->middleware(AdminMiddleware::class);
    }
    public function index()
    {
        return view('curriculo.curriculo-create');
    }
}
