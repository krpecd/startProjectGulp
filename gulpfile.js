const elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;

elixir(mix => {
    mix.sass('front.scss')
    .webpack('front.js');
});

//Images minification
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('images', () =>
    gulp.src('resources/assets/imgs/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/imgs'))
);
