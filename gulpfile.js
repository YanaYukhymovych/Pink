'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./scss/main.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('autoprefix', function () {
    return gulp.src('./css/main.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'));
});


gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass', 'autoprefix'));
});