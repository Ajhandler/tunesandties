var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint'); 
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var plumber = require('gulp-plumber'); 
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer')

//sass task, with auto-prefix
gulp.task('sass', function(){
	gulp.src('./scss/*.scss')

	.pipe(plumber(plumberErrorHandler))
	.pipe(sass({outputStyle: 'compact'}))
  .pipe(autoprefixer('last 2 version'))
	.pipe(gulp.dest('.'))
});

//js task
gulp.task('js',function(){
	gulp.src('assets/javascript/*.js')

	.pipe(plumber(plumberErrorHandler))
	.pipe(concat('theme.js'))
  .pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('assets/javascript/'));
});

//image opt task
gulp.task('img', function() {
 
  gulp.src('assets/images/*.{png,jpg,gif}')
    .pipe(imagemin({
      optimizationLevel: 7,
      progressive: true
 
    }))
    .pipe(plumber(plumberErrorHandler))
    .pipe(gulp.dest('assets/img'))
});

//Plumber error
var plumberErrorHandler = { errorHandler: notify.onError({
 
    title: 'Gulp',
 
    message: 'Error: <%= error.message %>'
 
  })
 
};

//Watch task

gulp.task('watch',function(){
	gulp.watch('scss/*.scss', ['sass']);

	gulp.watch('assets/javascript/*.js', ['js']);
 
  gulp.watch('assets/images/*.{png,jpg,gif}', ['img']);
});

gulp.task('default', ['sass', 'js', 'img', 'watch']);