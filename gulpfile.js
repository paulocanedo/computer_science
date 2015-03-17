var gulp = require('gulp');
var mocha = require('gulp-mocha');
var benchmark = require('gulp-bench');
 
gulp.task('default', function () {
    return gulp.src('./unit_test/*.js', {read: false})
        .pipe(mocha());
});


gulp.task('benchmark', function () {
    return gulp.src('./benchmark/*.js', {read: false})
        .pipe(benchmark());
});