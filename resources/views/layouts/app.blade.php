<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Beedaboo SPA</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>

    @include('components.nav')
    
    <main class="container">
        @yield('content')
    </main>

    <script>
        // Smooth scroll
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
    @vite(['resources/css/custom.css', 'resources/js/app.js', 'resources/css/app.css'])
</body>
</html>
