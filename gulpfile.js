const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const { deleteAsync } = require('del');
const browserSync = require('browser-sync').create();
const gulpif = require('gulp-if');
const fs = require('fs');

// Configuration
const config = {
    src: {
        scss: 'src/assets/scss/**/*.scss',
        js: ['ovary-roll.js', 'script.js'].map(file => `src/assets/js/${file}`),
        html: './*.html'
    },
    dest: {
        css: 'src/assets/css',
        js: 'src/assets/js',
        dist: 'dist'
    },
    isProduction: process.env.NODE_ENV === 'production'
};

// Ensure directories exist
function ensureDirectoriesExist() {
    [config.dest.css, config.dest.js, config.dest.dist].forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });
}

// Clean task
async function clean() {
    ensureDirectoriesExist();
    await deleteAsync([
        `${config.dest.css}/*.min.css`,
        `${config.dest.css}/*.min.css.map`,
        `${config.dest.js}/*.min.js`,
        `${config.dest.js}/*.min.js.map`,
        `${config.dest.dist}/**/*`
    ], { force: true });
}

// Styles task with sourcemaps and error handling
function styles() {
    ensureDirectoriesExist();
    return gulp.src(config.src.scss)
        .pipe(gulpif(!config.isProduction, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulpif(!config.isProduction, sourcemaps.write('.')))
        .pipe(gulp.dest(config.dest.css))
        .pipe(browserSync.stream());
}

// Scripts task with sourcemaps and error handling
function scripts() {
    ensureDirectoriesExist();
    return gulp.src(config.src.js, { allowEmpty: true })
        .pipe(gulpif(!config.isProduction, sourcemaps.init()))
        .pipe(concat('script.js'))
        .pipe(terser().on('error', function(e) {
            console.error(e);
            this.emit('end');
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulpif(!config.isProduction, sourcemaps.write('.')))
        .pipe(gulp.dest(config.dest.js))
        .pipe(browserSync.stream());
}

// HTML task
function html() {
    ensureDirectoriesExist();
    return gulp.src(config.src.html)
        .pipe(gulp.dest(config.dest.dist));
}

// BrowserSync server
function serve() {
    browserSync.init({
        server: {
            baseDir: './',
            routes: {
                "/src": "src"
            }
        },
        notify: false
    });
}

// Watch task
function watch() {
    gulp.watch(config.src.scss, styles);
    gulp.watch(config.src.js, scripts);
    gulp.watch(config.src.html).on('change', browserSync.reload);
}

// Build task for production
const build = gulp.series(
    clean,
    gulp.parallel(styles, scripts),
    html
);

// Development task
const dev = gulp.series(
    clean,
    gulp.parallel(styles, scripts),
    gulp.parallel(serve, watch)
);

// Export tasks
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.build = build;
exports.dev = dev;
exports.default = dev;