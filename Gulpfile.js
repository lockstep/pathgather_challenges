"use strict";

var concat, gulp, gutil, paths, rename, watch;

gulp = require('gulp');
gutil = require('gulp-util');
concat = require('gulp-concat');
rename = require('gulp-rename');
watch = require('gulp-watch');

paths = {
  lib: [
    './node_modules/angular/angular.js',
    './node_modules/angular-animate/angular-animate.js',
    './node_modules/bootstrap/dist/js/bootstrap.js'
  ],
  css: [
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './source/css/**/*.css'
  ],
  fonts: [
    './node_modules/bootstrap/dist/fonts/*'
  ],
  js: ['./source/js/**/*.js'],
  templates: ['./source/**/*.html']
};

gulp.task('watch', function() {
  watch(paths.lib, function() {
    return gulp.start(['library']);
  });
  watch(paths.css, function() {
    return gulp.start(['css']);
  });
  watch(paths.js, function() {
    return gulp.start(['appjs']);
  });
  return watch(paths.templates, function() {
    return gulp.start(['templates']);
  });
});

gulp.task('default', ['build', 'watch']);

gulp.task('build', ['library', 'appjs', 'templates', 'css', 'fonts']);

gulp.task('css', function(done) {
  gulp.src(paths.css)
    .pipe(concat('application.css'))
    .pipe(gulp.dest('./www/css/')).on('end', done);
});

gulp.task('templates', function() {
  return gulp.src(paths.templates)
    .pipe(gulp.dest('./www/'));
});

gulp.task('fonts', function() {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest('./www/fonts'));
});

gulp.task('appjs', function() {
  gulp.src(paths.js)
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./www/js'));
});

gulp.task('library', function() {
  return gulp.src(paths.lib)
    .pipe(concat('libraries.js'))
    .pipe(gulp.dest('./www/js'));
});
