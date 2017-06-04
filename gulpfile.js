const elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;

elixir(mix => {
    mix.sass('front.scss')
    .webpack('front.js');
});


//Modules declaration
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const criticalCss = require('gulp-penthouse'); 


//Images minification
gulp.task('images', () =>
    gulp.src('resources/assets/imgs/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/imgs'))
);




//Creating critical CSS
gulp.task('critical', function () {
    return gulp.src('public/css/front.css')
        .pipe(criticalCss({
            out: 'critical.scss',
            //put url here
            url: 'http://project.url',
            width: 1300,
            height: 900,
            strict: true,
            userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
        }))
        .pipe(gulp.dest('resources/assets/sass/'));
});