var gulp = require('gulp');

gulp.task('copy_cracks', function() {
    return gulp.src(['cracks/**/*.js'])
        .pipe(gulp.dest('/home/gekctek/.config/hackmud/gekctek/scripts/'));
});

gulp.task('default', ['copy_cracks']);