var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint'); 
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

//sass task
gulp.task('sass', function(){
	gulp.src('./scss/*.scss')

	.pipe(sass())
	.pipe(gulp.dest('.'))
});

//js task
gulp.task('js',function(){
	gulp.src('assets/javascript/*.js')


	.pipe(concat('theme.js'))
	.pipe(gulp.dest('assets/javascript/'));
});

//image opt task
gulp.task('img', function() {
 
  gulp.src('assets/images/*.{png,jpg,gif}')
    .pipe(imagemin({
      optimizationLevel: 7,
      progressive: true
 
    }))
    .pipe(gulp.dest('assets/img'))
});

//Watch task

gulp.task('watch',function(){
	gulp.watch('scss/*.scss', ['sass']);

	gulp.watch('assets/javascript/*.js', ['js']);
 
  gulp.watch('assets/images/*.{png,jpg,gif}', ['img']);
});

gulp.task('default', ['sass', 'js', 'img', 'watch']);