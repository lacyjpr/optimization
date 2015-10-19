var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin');
	pngquant = require('imagemin-pngquant')

var paths = {
	scripts: ['src/js/*.js'],
	styles: ['src/css/*.css'],
	images: ['src/img/*']
}

// Uglifies js files and outputs them to dist/js
gulp.task('scripts', function(){
	return gulp.src(paths.scripts)
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'))
});

// Minifies css files and outputs them to dist/css
gulp.task('styles', function(){
	return gulp.src(paths.styles)
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css/'))
});

// Compresses image files and outputs them to dist/img
gulp.task('images', function(){
	return gulp.src(paths.images)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/img/'))
});
