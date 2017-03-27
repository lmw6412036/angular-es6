var gulp=require("gulp");
var inject=require("gulp-inject");
var to5=require("gulp-6to5");
var annotate=require("gulp-ng-annotate");
var sass=require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var path=require("path");



gulp.task('html',function () {
    console.log(path.join(__dirname,'build'));
    gulp.src([
        'app/*.html','app/**/*.html'
    ],{cwd:'./src'})
        .pipe(gulp.dest('./build/app'));
});

gulp.task('images',function () {
    gulp.src([
            'images/*.*','images/**/*.*'
        ],{cwd:'./src'})
        .pipe(gulp.dest('./build/images'));
});


gulp.task('scripts',function () {
    gulp.src([
        'lib/*.js',
        'lib/**/*.js','lib/**/*.css',
        '!lib/register.js'
    ],{cwd:'./src'})
        .pipe(gulp.dest("./build/lib"));

    gulp.src([
        'app/*.js',
        'app/**/*.js'
    ],{cwd:'./src'})
        .pipe(to5())
        .pipe(annotate())
        .pipe(gulp.dest('./build/app'));

    gulp.src("./src/lib/register.js")
        .pipe(to5())
        .pipe(gulp.dest('./build/lib'));
});

gulp.task("sass",function () {
    gulp.src('./src/app/style.scss')
        .pipe(sass())
        .pipe(gulp.dest("./build/css"));
});


gulp.task("inject",function () {
    var target=gulp.src('./src/index.html');
    var css=gulp.src('css/style.css',{cwd:'./build'});
    var js=gulp.src([
        'lib/register.js',
        'lib/jquery/jquery-1.12.3.min.js',
        'lib/angular/angular.min.js',
        'lib/angular/angular-route.min.js',
        'lib/angular/ocLazyLoad.min.js',
        'lib/angular/angular-animate.js',
        'app/main.js',
        'app/!(main.js)',
        'app/**/*.js'
    ],{read:false,cwd:'./build'});
    var ig="../E:/web/szc/build/";
    target
        .pipe(inject(css,{addRootSlash:false,ignorePath:ig}))
        .pipe(inject(js,{addRootSlash:false,ignorePath:ig}))
        .pipe(gulp.dest('./build'));
});

gulp.task("init",['html','images','scripts','sass']);

gulp.task("serve",function () {
    browserSync.init({
        server: "./build"
    });
    var dev="./src/";
    var dest='./build/';

    gulp.watch([
        dev+"app/*.js",
        dev+"app/**/*.js",
        dev+"lib/*.js",
        dev+"lib/**/*.js"
    ],['scripts']);

    gulp.watch([
        dev+'app/*.scss',
        dev+'app/**/*.scss'
    ],['sass']);

    gulp.watch([
        dev+'app/*.html',
        dev+'app/**/*.html'
    ],['html']);

    gulp.watch([
        dev+'images/*.*',
        dev+'images/**/*.*'
    ],['images']);

    gulp.watch([
        dev+'index.html',
        dest+'*.js',
        dest+'**/*.js',
        dest+'*.css',
        dest+'**/*.css'
    ],['inject']);

    gulp.watch([
        dev+'*.js',
        dev+'**/*.js',
        dev+'*.scss',
        dev+'**/*.scss',
        dev+'*.html',
        dev+'**/*.html'
    ]).on('change',reload);

});