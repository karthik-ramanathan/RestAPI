var gulp = require('gulp');
//var babel        = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');
var path = require('path');
var plumber = require('gulp-plumber');

gulp.task('clean', function () {
    del(['bin/**', '!bin', '!bin/release', '!bin/release/plugins']).then(paths => {
      console.log('Deleted files and folders:\n', paths.join('\n '));
    });
  });

  
  gulp.task('default', function () {
    return gulp.src('src/index.js')
      .pipe(plumber())
      .pipe(rename({ dirname: '', suffix: '.min' }))
      .pipe(uglify())
      .pipe(plumber.stop())
      .pipe(gulp.dest('dist/'))
  });