@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <b>Currículo #{{ $curriculum->id }}</b>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Visualizar currículo</h5>
                        <div class="row">
                            <curriculo-view :item="{{ $curriculum }}" :user="{{Auth::user()}}"></curriculo-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
