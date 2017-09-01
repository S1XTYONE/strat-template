var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    prefix = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    minifyjs = require('gulp-js-minify'),
    concatJS = require("gulp-concat-js"),
    imagemin = require('gulp-imagemin'),
    cleanCSS = require('gulp-clean-css');
 
gulp.task('css', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass())
    .pipe(prefix('last 4 versions'))
    .pipe(cleanCSS(''))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('jsmin', function(){
  gulp.src('js/*.js')
    .pipe(minifyjs())
    .pipe(contactJS('main.js'))
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('imgmin', function(){
  gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function(){
    gulp.watch('sass/*.sass', ['csss']);
});

gulp.task('watchjs', function(){
    gulp.watch('js/*.js', ['jsmin']);
});