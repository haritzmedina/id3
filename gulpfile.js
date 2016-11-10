var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');

gulp.task('uglify', function (cb) {
    pump([
            gulp.src('dist/id3.js'),
            uglify(),
            rename({ suffix: '.min' }),
            gulp.dest('dist')
        ],
        cb
    );
});
