var gulp = require('gulp');
var webpack = require('webpack-stream');
var browserSync = require('browser-sync');
var path = require('path');
var nib = require('nib');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var connectFallback = require('connect-history-api-fallback');

require('es6-promise').polyfill();

var ROOT = './';
var JS = path.resolve(ROOT, 'app');
var CSS = path.resolve(ROOT, 'media/css');

// Webpack
gulp.task('webpack', function() {
  return gulp.src('./app/app.js')
             .pipe(webpack(require('./webpack.config.js')))
             .pipe(gulp.dest('./'));
});

// CSS
gulp.task('css', function() {
  gulp.src([path.resolve(CSS, '**/*.styl'),
           path.resolve(CSS, 'lib/*.css')])
    .pipe(stylus({compress: true, use: [nib()]}))
    .pipe(autoprefixer())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(CSS))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['build'], function() {
  gulp.watch([path.resolve(JS, '**/*.js'), '!' + path.resolve('media/js', 'bundle.js')], ['webpack']);
  gulp.watch(path.resolve(CSS, '**/*.styl'), ['css']);

  browserSync.init({
    index: 'index.html',
    middleware: [connectFallback()],
    notify: false,
    open: false,
    port: process.env.PORT || 8000,
    server: './'
  });
});

gulp.task('build', ['webpack', 'css']);
gulp.task('default', ['serve']);
