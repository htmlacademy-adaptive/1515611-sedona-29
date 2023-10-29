import gulp from "gulp";
import plumber from "gulp-plumber";
import sass from "gulp-dart-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import browser from "browser-sync";
import squoosh from "gulp-libsquoosh";
import htmlmin from "gulp-htmlmin";
import terser from "gulp-terser";
import svgmin from "gulp-svgmin";
import svgstore from "gulp-svgstore";
import rename from "gulp-rename";
import { deleteSync as del } from "del";
import { stacksvg } from "gulp-stacksvg";

// HTML

export const minify = () => {
  return gulp
    .src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
};

// Styles

export const styles = () => {
  return gulp
    .src("source/scss/style.scss", { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("build/css", { sourcemaps: "." }))
    .pipe(browser.stream());
};

export const makeStack = () => {
  return gulp
    .src("source/img/icons/**/*.svg")
    .pipe(svgmin())
    .pipe(stacksvg({ output: "sprite" }))
    .pipe(gulp.dest("build/img"));
};

// Scripts

const scripts = () => {
  return gulp.src("source/js/*.js").pipe(terser()).pipe(gulp.dest("build/js"));
};

// Img

export const optimizeImages = () => {
  return gulp
    .src("source/img/**/*.{jpg,png}")
    .pipe(squoosh())
    .pipe(gulp.dest("build/img"));
};

export const copyImages = () => {
  return gulp.src("source/img/**/*.{jpg,png}").pipe(gulp.dest("build/img"));
};

// Webp

export const createWebp = () => {
  return gulp
    .src("source/img/**/*.{jpg,png}")
    .pipe(squoosh({ webp: {} }))
    .pipe(gulp.dest("build/img"));
};

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: "build",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

// svg

const svg = () => {
  return gulp
    .src("source/img/**/*.svg")
    .pipe(svgmin())
    .pipe(gulp.dest("build/img"));
};

//шрифты, манифест теперь синхронный
export const copy = (done) => {
  gulp
    .src(["source/fonts/**/*.{woff2,woff}", "source/*.ico"], {
      base: "source",
    })
    .pipe(gulp.dest("build"));
  done();
};

// Watcher

export const watcher = () => {
  gulp.watch("source/scss/**/*.scss", gulp.series(styles));
  gulp.watch("source/js/*.js", gulp.series(scripts));
  gulp.watch("source/*.html", gulp.series(minify)).on("change", browser.reload);
};

const clean = (done) => {
  del("build");
  done();
};

export const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(styles, minify, scripts, svg, makeStack, createWebp)
);

export default gulp.series(
  clean,
  minify,
  scripts,
  copyImages,
  svg,
  styles,
  copy,
  makeStack,
  server,
  watcher
);
