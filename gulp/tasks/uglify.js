var gulp       = require('gulp');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var paths = projectConfig.paths;


gulp.task('uglify', [ 'traceur' ], function () {
  return gulp.src([
    './static/bower_components/traceur-runtime/traceur-runtime.js',
    './static/bower_components/localforage/dist/localforage.js',
    './static/bower_components/phaser-official/build/custom/phaser-arcade-physics.js',
    './.tmp/game.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('game.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths['dist']));
});