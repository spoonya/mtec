//Подключение модулей

const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const pug = require('gulp-pug');

//Таск на стили SASS
function styles() {
	//Подключить все файлы SASS - './src/sass/**/*.sass'
	return gulp.src('./src/sass/*.sass')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		//Конкатанация файлов
		.pipe(concat('style.css'))
		//Добавление префиксов
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		//Минификация CSS
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./build/css'))
		.pipe(browserSync.stream());
}

//Таск на скрипты JS
function scripts() {
	return gulp.src('./src/js/**/*.js')
		.pipe(concat('script.js'))
		// Минификация JS
		.pipe(uglify({
			toplevel: true
		}))
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
}

//Таск переноса PUG файлов в папку build
function pugCompiller() {
	return gulp.src([
			'./src/**/*.pug',
			'./src/**/*.html'
		])
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./build'))
		.pipe(browserSync.stream());
}

//Таск переноса изображений в папку build/img
function images() {
	return gulp.src([
			'./src/img/**/*.jpg',
			'./src/img/**/*.png',
			'./src/img/**/*.webp',
			'./src/img/**/*.svg',
			'./src/img/**/*.gif'
		])
		.pipe(gulp.dest('./build/img'))
		.pipe(browserSync.stream());
}

//Таск очистки папки build
function clean() {
	return del(['build/*'])
}

//Просмотр обновления файлов
function watch() {
	browserSync.init({
		server: {
			baseDir: "./build/"
		}
	});
	//Следить за SASS файлами
	gulp.watch([
		'./src/sass/**/*.sass',
		'./src/sass/**/*.css',
		'./src/sass/**/*.scss'
	], styles);
	//Следить за JS файлами
	gulp.watch('./src/js/**/*.js', scripts);
	//Следить за PUG файлами
	gulp.watch([
		'./src/**/*.pug',
		'./src/**/*.html'
	], pugCompiller);
	//Следить за изображениями
	gulp.watch([
		'./src/img/**/*.jpg',
		'./src/img/**/*.png',
		'./src/img/**/*.svg',
		'./src/img/**/*.webp',
		'./src/img/**/*.gif'
	], images);
}

//Таск, вызывающий функцию styles
gulp.task('styles', styles);
//Таск, вызывающий функцию scripts
gulp.task('scripts', scripts);
gulp.task('pug', pugCompiller);
gulp.task('del', clean);
gulp.task('watch', watch);
gulp.task('images', images);
gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts, pugCompiller, images)));
gulp.task('start', gulp.series('build', 'watch'))