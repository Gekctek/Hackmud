var gulp = require('gulp');

gulp.task('copy', function() {
    return gulp.src(['cracks/*.js', "*.js"])
        .pipe(gulp.dest('C:\\Users\\egcel\\AppData\\Roaming\\hackmud\\gekctek\\scripts'));
        //.pipe(gulp.dest('/home/gekctek/.config/hackmud/gekctek/scripts/'));
});

gulp.task('default', ['copy']);