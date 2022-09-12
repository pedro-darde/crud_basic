@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"> Inicio </div>
                    <div class="card-body">
                        @guest
                            <p> Faça Login para continuar </p>
                        @else
                            <div class="alert alert-success" role="alert">
                                Seja bem vindo {{ Auth::user()->name }} !
                            </div>
                            <div class="row">
                                <a href="{{ route('dashboard') }}" class="btn btn-dark"> Cadastro Pessoal </a>
                            </div>
                        @endguest
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
