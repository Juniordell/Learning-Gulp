var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var sass = require('gulp-sass')

gulp.task('default', function() {
    console.log('Hello Gulp!')
})

gulp.task('minify-css', function() {
    return gulp.src('style/style.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('style'))
})

gulp.task('sass', function() {
    return gulp.src('src/style/style.scss')
        .pipe(sass().on('Error', sass.logError))
        .pipe(gulp.dest('style'))
})

gulp.task('watch', function() {
    return gulp.watch('src/style/*.scss', gulp.series(sass, minify-css))
})