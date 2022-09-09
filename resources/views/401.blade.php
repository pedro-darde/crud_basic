@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"> Inicio </div>
                    <div class="card-body">
                        <p> Você não tem acesso à esta página! </p>
                        <a href="{{ route('dashboard') }}"> Voltar </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
