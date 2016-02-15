var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.sourcemaps = true;

elixir(function(mix) {
    mix.sass('talala.scss', 'public/css/talala.css', null);
    mix.copy('resources/assets/sass/talala/fonts', 'public/css/fonts');
    mix.copy('resources/assets/sass/talala/img', 'public/img');
});

elixir(function(mix) {
    mix.coffee('Utils.coffee', 'public/js/Utils.js', null);
    mix.coffee('talala.coffee', 'public/js/talala.js', null);
});