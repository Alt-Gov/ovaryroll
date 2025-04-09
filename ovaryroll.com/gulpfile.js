const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Updated to use Dart Sass
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');

function styles() {
    return gulp.src('src/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('src/assets/css'));
}

function scripts() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(concat('script.js'))
        .pipe(terser())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('src/assets/js'));
}

function watch() {
    gulp.watch('src/assets/scss/**/*.scss', styles);
    gulp.watch('src/assets/js/**/*.js', scripts);
}

exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.default = gulp.series(styles, scripts, watch);