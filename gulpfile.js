'use strict';

// required modules
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            port: "3500"
        }
    });
});

gulp.task('default', ['browser-sync']);