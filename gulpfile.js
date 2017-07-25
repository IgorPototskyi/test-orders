

var gulp        =   require('gulp');
var sass        =   require ('gulp-sass');
var browserSync =   require('browser-sync').create();

// Static server

gulp.task('pre_sass_css',function(){
    return gulp.src('sass/*.scss')
           .pipe(sass())
           .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
           .pipe(gulp.dest('css'))
           .pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
             },
    notify:false
    });
});

gulp.task('default',['browser-sync','pre_sass_css'], function(){
    gulp.watch('sass/*.scss' ,['pre_sass_css'], browserSync.reload)
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('*.json', browserSync.reload);
    gulp.watch('*.js', browserSync.reload);
});
