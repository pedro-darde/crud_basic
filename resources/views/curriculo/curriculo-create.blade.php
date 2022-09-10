@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <b>Currículo </b>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Criar currículo</h5>
                        <div class="row">
                            <curriculo-add></curriculo-add>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
