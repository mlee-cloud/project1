'use strict';
// 载入外挂
var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'), //css压缩
    cssimport = require("gulp-cssimport"),
    //imagemin = require('gulp-imagemin'), //图片压缩
    //uglify = require('gulp-uglify'), //js压缩
    concat = require('gulp-concat'), //文件合并
    notify = require('gulp-notify'), //提示信息
    livereload = require('gulp-livereload') //网页自动刷新（服务器控制客户端同步刷新）


//使用webserver启动一个Web服务器
gulp.task('webserver', function() {
  gulp.src('') //src--root dir
    .pipe(webserver({
        path: '/',
        host: '127.0.0.1',
        port: '8081',
        livereload: true,
        directoryListing: true,
        open: true
    }));
});
//检查文件
gulp.task('html', function () {
    gulp.src('./**/*.html')
        .pipe(webserver());
});

// 编译Scss
gulp.task('sass', function(){
    //sass()方法用于转换sass到css
    return gulp.src('css/main.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('dist/css'))
});

// 默认任务
gulp.task('default',['webserver','watch']);

// 监听文件变化
gulp.task('watch', function() {
    // 看守所有.scss档
    gulp.watch(['./css/*.scss'],['sass']);
    gulp.watch(['./*.html'], ['html']);
});