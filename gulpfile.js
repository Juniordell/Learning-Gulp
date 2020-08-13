var gulp = require('gulp')

var sass = require('gulp-sass')

gulp.task('default', function() {
    console.log('Hello Gulp!')
})

gulp.task('sass', function() {
    return gulp.src('src/style/style.scss')
        .pipe(sass().on('Error', sass.logError))
        .pipe(gulp.dest('style'))
})