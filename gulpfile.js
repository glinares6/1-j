import  gulp from  'gulp';
import  babel from  'gulp-babel';

// let gulp =require('gulp');
// let babel =require('gulp-babel');


// gulp.task;
// gulp.src();
// gulp.dest();
// gulp.watch();


gulp.task('es6',  () => {
  return  gulp.src('./es6/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./es5'))
});


gulp.task('default', () => {
gulp.watch('./es6/*.js',gulp.parallel('es6'));

});