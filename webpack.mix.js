const mix = require('laravel-mix');


mix.js('assets/app.js', 'build/js')
.postCss('assets/style.css', 'build/css');