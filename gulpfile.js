const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require("tsify");
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
let tsProject = ts.createProject('tsconfig.json');
let pkg = require('./package.json');

gulp.task('clean:dist', function () {
    let stream = gulp.src("dist/*").pipe(clean());
    return stream;
});

gulp.task('clean:test', function () {
    let stream = gulp.src("test/*").pipe(clean());
    return stream;
});

gulp.task("clean", ['clean:dist', 'clean:test']);

gulp.task('compile', ["compile:type"], function () {
    let stream = tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest("dist/"));
    return stream;
});

gulp.task("compile:type",['clean:dist'],function(){
    let stream = tsProject.src()
        .pipe(tsProject())
        .dts
        .pipe(gulp.dest("dist/type/"));
    return stream;
});

gulp.task("compile:test", ["clean:test"], function () {
    let stream = gulp.src("src/**/*.ts")
        .pipe(ts({
            target: "ES6",
            module: "commonjs",
            outDir: "test",
            rootDir: "src"
        }))
        .pipe(gulp.dest("test/"));
    return stream;
});

gulp.task("compile:all", ['compile', 'compile:test']);

gulp.task('test', ["compile:test"], function () {
    let stream = gulp.src("test/**/*[sS]pec.js")
        .pipe(jasmine());
    return stream;
});

gulp.task("build", ["test"], function () {
    gulp.start('compile');
});


gulp.task('watch:test', ["test"], function () {
    gulp.watch("src/**/*.ts", ["test"]);
});

gulp.task('watch', ["build"], function () {
    gulp.watch("src/**/*.ts", ["build"]);
});

gulp.task("default", ['build']);

gulp.task("copy-html", function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/browser'));
});
gulp.task("copy-css", function () {
    return gulp.src('src/**/*.css')
        .pipe(gulp.dest('dist/browser'));
});

gulp.task('compile:browser', ['copy-html', "copy-css"], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/index.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .transform('babelify', {
            presets: ['es2015'],
            extensions: ['.ts']
        })
        .bundle()
        .pipe(source(`${pkg.name}-${pkg.version}.min.js`))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/browser'));
});

gulp.task("build:browser", ["test"], function () {
    gulp.start('compile:browser');
});


gulp.task("watch:browser", ["build:browser"], function () {
    gulp.watch("src/**/*.*", ["build:browser"]);
});

