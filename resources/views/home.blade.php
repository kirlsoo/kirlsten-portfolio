@extends('layouts.app')

@section('content')
@include('components.nav')

<div class="container mt-5 pt-5">
    @include('sections.introduction')

    <section id="strength">
        <h1>Strength</h1>
        <p>Describe your personal strengths here.</p>
    </section>

    @include('sections.skills')
    @include('sections.career')

    <section id="projects">
        <h1>Major Projects</h1>
        <p>Detail your most impactful projects.</p>
    </section>
</div>
@endsection
