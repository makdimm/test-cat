const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify  = require('gulp-uglify');
const del  = require('del');
const browserSync = require('browser-sync').create();

const cssFiles = [
    './dev/style/main.css',
    './dev/style/card.css',
    './dev/style/media.css'
];
function styles() {
    return gulp.src(cssFiles)
                    .pipe(concat('main.css'))
                    .pipe(autoprefixer({
                        browsers: ['> 0.1%'],
                        cascade: false
                    }))
                    .pipe(cleanCSS({
                        level: 2
                    }))
                    .pipe(gulp.dest('./build/style'))
                    .pipe(browserSync.stream());
}

function scripts(){
    return gulp.src('./dev/scripts/*.js')
                    .pipe(concat('main.js'))
                    .pipe(uglify({
                        toplevel: true
                    }))
                    .pipe(gulp.dest('./build/scripts'))
                    .pipe(browserSync.stream());
}
function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./dev/style/**/*.css',styles);
    gulp.watch('./dev/scripts/**/*.js', scripts);
    gulp.watch('./*.html', browserSync.reload);
}

function clean(){
    return del(['build/*']);
}

gulp.task('scripts', scripts);
gulp.task('styles', styles);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean,
                        gulp.parallel(styles,scripts)
                        ));

gulp.task('dev', gulp.series('build', 'watch'));