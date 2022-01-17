const {src, dest, series, watch} = require('gulp');
// import gulp from 'gulp';
// const {src, dest, series, watch} = gulp;

const concat = require ('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require ('gulp-autoprefixer');
const cssCleaner = require('gulp-clean-css');
const compilSass = require('gulp-sass')(require('sass'));
const browserSync = require ('browser-sync').create();
const clear = require('del');
const svgSprite = require('gulp-svg-sprite');
// const image = require('gulp-image');
const uglify = require('gulp-uglify-es').default;
const notify = require ('gulp-notify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');


const clear_ = () =>{
  return (
    clear(['dist'])
  )
}

const getCSSfromSASS = ()=>{
  return (
    src('src/style/style.scss')
    .pipe(compilSass().on('error', notify.onError()))
    .pipe(autoprefixer({
      cascade: false
      }))
    .pipe(cssCleaner({
      level:2
      }))
    .pipe(dest('dist/style'))
    .pipe(browserSync.stream())
  )
}

const getCSSfromSASS_dev = ()=>{
  return (
    src('src/style/style.scss')
    .pipe (sourcemaps.init())
    .pipe(compilSass().on('error', notify.onError()))
    .pipe(autoprefixer({
      cascade: false
      }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/style'))
    .pipe(browserSync.stream())
  )
}

const htmlMinify = ()=>{
  return (src('src/**/*.html')
  .pipe(htmlMin({
    collapseWhitespace: true
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
  )}

const htmlMinify_dev = ()=>{
  return (src('src/**/*.html')
    .pipe(dest('dist'))  
    .pipe(browserSync.stream())  
  )}

const svg_sprites= ()=>{
  return (
    src('src/img/svg/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: 'sprite.svg'
        }
      }
    }))
    .pipe(dest('dist/img'))
  )
}

const img_files = ()=>{
  return(
    src([
    'src/img/**/*.jpg',
    'src/img/**/*.png',
    'src/img/**/*.webp',
    'src/img/*.svg'
    ])
    // .pipe(image())
    .pipe(dest('dist/img'))
  )
}



const scripts = () =>{
  return(
    src([
    'src/js/**/*.js'
    ])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('js/app.js'))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(dest('dist'))
  )}


const scripts_dev = () =>{
  return(
    src([
    'src/js/**/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('js/app.js'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream()) 
  )}

 
const addFonts = ()=>{
  return (
    src('src/fonts/**')
    .pipe(dest('dist/fonts'))
  )
} 

const watchFiles = () =>{
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
};
  
watch('src/style/*.scss', getCSSfromSASS_dev);
watch('src/**/*.html', htmlMinify_dev);
watch('src/img/**/*.svg', svg_sprites)
watch('src/js/**/*.js', scripts_dev);
watch('src/fonts/**', addFonts);



exports.prod = series(
    clear_, 
    htmlMinify, 
    getCSSfromSASS, 
    svg_sprites, 
    img_files, 
    scripts, 
    addFonts, 
    watchFiles
  );
 

 exports.dev = series (
  clear_,
  htmlMinify_dev, 
  getCSSfromSASS_dev,
  svg_sprites,
  img_files,
  scripts_dev, 
  addFonts, 
  watchFiles
 );

//  exports.clear_ = clear_;
