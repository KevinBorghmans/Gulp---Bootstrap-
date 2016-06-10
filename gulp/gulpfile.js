var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    imagemin = require('gulp-imagemin'),
    prefix = require('gulp-autoprefixer');;

// /////////////////////////////////
// Scripts Task
// /////////////////////////////////

//Javascript min task
gulp.task('scripts', function(){
    gulp.src('js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('js/minjs'));
});

//Styles task
gulp.task('styles', function(){
    sass('../scss/**/*.scss', {
    style: 'expended'})
        .pipe(plumber())
        .on('error', sass.logError)
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('../css'))
        .pipe(livereload());
});

// Image compress task
gulp.task('image', function(){
    gulp.src('../images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('../images'));
});

// /////////////////////////////////
// Watch Tasks
// /////////////////////////////////

gulp.task('watch', function(){
    
    livereload.listen();
    gulp.watch('../img/*', ['image']);
    gulp.watch('../js/*.js', ['scripts']);
    gulp.watch('../scss/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles','image', 'watch']);