<?php

namespace App\Http\Controllers;

use App\Http\Middleware\AdminMiddleware;
use App\Models\Curriculum;
use Illuminate\Http\Request;

class CurriculumController extends Controller
{
    public function __construct()
    {
        $this->middleware(AdminMiddleware::class)->except('view');
    }

    public function index()
    {
        return view('curriculo.curriculo-create');
    }

    public function get(Curriculum $curriculum)
    {
        return view('curriculo.curriculo-edit', compact('curriculum'));
    }

    public function view(Curriculum $curriculum)
    {
        return view('curriculo.curriculo-view', compact('curriculum'));
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
            ],
            [
                'name.required' => 'Informe um nome.',
                'name.string' => 'O nome deve ser formado por letras.',
                'email.required' => 'Informe um e-mail.',
                'email.string' => 'O campo email deve ser formado por letras.',
                'email.email' => 'O campo e-mail deve conter um e-mail válido.',
                'birth_date.required' => 'Informe uma Data de Nascimento.',
                'birth_date.date' => 'O campo Data de Nascimento deve conter uma data válida.',
                'phone_number.required' => 'Informe um telefone.',
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
            ],
            [
                'name.required' => 'Informe um nome.',
                'name.string' => 'O nome deve ser formado por letras.',
                'email.required' => 'Informe um e-mail.',
                'email.string' => 'O campo email deve ser formado por letras.',
                'email.email' => 'O campo e-mail deve conter um e-mail válido.',
                'birth_date.required' => 'Informe uma Data de Nascimento.',
                'birth_date.date' => 'O campo Data de Nascimento deve conter uma data válida.',
                'phone_number.required' => 'Informe um telefone.',
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
