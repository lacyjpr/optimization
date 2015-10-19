var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css'),
	imageminJpegRecompress = require('imagemin-jpeg-recompress'),
	htmlmin = require('gulp-htmlmin');

var paths = {
	scripts: ['src/js/*.js'],
	styles: ['src/css/*.css'],
	images: ['src/img/*.jpg'],
	content: ['src/*.html']
}

// Uglifies js files and outputs them to dist/js
gulp.task('scripts', function(){
	return gulp.src(paths.scripts)
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));
});

// Minifies css files and outputs them to dist/css
gulp.task('styles', function(){
	return gulp.src(paths.styles)
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css/'));
});

// Compresses image files and outputs them to dist/img
gulp.task('images', function(){
	return gulp.src(paths.images)
		.pipe(imageminJpegRecompress({loops: 3})())
		.pipe(gulp.dest('dist/img/'));
});

// Minifies HTML and outputs it to dist
gulp.task('content', function(){
	return gulp.src(paths.content)
		.pipe(htmlmin({collapseWhitespace: true, removeComments: true, minifyCSS: true, minifyJS: true}))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts', 'styles', 'images', 'content']);