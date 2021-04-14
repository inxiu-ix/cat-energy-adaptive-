const {src, dest, series, watch} = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()


function scss() {
  return src('./scss/**.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(dest('css'))
}


function serve() {
  sync.init({
    server: './'
  })

  watch('./scss/**.scss', series(scss)).on('change', sync.reload)
}

exports.build = series(scss)
exports.serve = series(scss, serve)