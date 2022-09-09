@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <b>Dashboard </b>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Listagem de Currículos</h5>
                        <div class="row">
                            <dashboard :user="{{ Auth::user() }}"> </dashboard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
