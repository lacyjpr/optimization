var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css'),
	imageminJpegRecompress = require('imagemin-jpeg-recompress'),
	imageminPngcrush = require('imagemin-pngcrush'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	htmlmin = require('gulp-htmlmin');

var paths = {
	scripts: ['src/js/*.js'],
	styles: ['src/css/*.css'],
	images: ['src/img/*'],
	jpgImages: ['src/img/*.jpg'],
	pngImages: ['src/img/*.png'],
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

gulp.task('images', function(){
	return gulp.src(paths.images)
	.pipe(imagemin({
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	}))
	.pipe(gulp.dest('dist/img'))
});

// Compresses jpg files and outputs them to dist/img
gulp.task('jpgImages', function(){
	return gulp.src(paths.jpgImages)
		.pipe(imageminJpegRecompress({loops: 3})())
		.pipe(gulp.dest('dist/img/'));
});

// Compresses png files and outputs them to dist/img
gulp.task('pngImages', function(){
	return gulp.src(paths.pngImages)
		.pipe(imageminPngcrush({reduce: true})())
		.pipe(gulp.dest('dist/img'));
});

// Minifies HTML and outputs it to dist
gulp.task('content', function(){
	return gulp.src(paths.content)
		.pipe(htmlmin({collapseWhitespace: true, removeComments: true, minifyCSS: true, minifyJS: true}))
		.pipe(gulp.dest('dist'));
});

// Watches for changes and execute appropriate tasks
gulp.task('watch', function(){
	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('src/css/*.css', ['styles']);
	gulp.watch('src/img/*.jpg', ['jpgImages']);
	gulp.watch('src/img/*.png', ['pngImages']);
	gulp.watch('src/*.html', ['content']);
});

gulp.task('default', ['scripts', 'styles', 'jpgImages', 'pngImages', 'content', 'watch']);
//gulp.task('default', ['scripts', 'styles', 'images', 'content', 'watch']);