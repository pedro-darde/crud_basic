<?php

namespace App\Http\Controllers;

use App\Http\Middleware\AdminMiddleware;
use App\Models\Curriculum;
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

    public function get(Curriculum $curriculum)
    {
        return view('curriculo.curriculo-edit', compact('curriculum'));
    }

    public function store(Request $request)
    {
        $validated = $this->validate(
            $request,
            [
                'name' => 'required|string',
                'email' => 'required|string|email',
                'birth_date' => 'required|date',
                'phone_number' => 'required|string'
            ]
        );
        Curriculum::create($validated);

        return response()->json(['Criado com sucesso.']);
    }

    public function edit(Curriculum $curriculum, Request $request)
    {
        $validated = $this->validate(
            $request,
            [
                'name' => 'required|string',
                'email' => 'required|string|email',
                'birth_date' => 'required|date',
                'phone_number' => 'required|string'
            ]
        );

        $curriculum->update($validated);
        return response()->json(['Atualizado com sucesso.']);
    }

    public function delete(Curriculum $curriculum)
    {
        $curriculum->delete();

        return response()->json(['Removido com sucesso.']);
    }
}
