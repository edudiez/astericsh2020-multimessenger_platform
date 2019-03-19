const gulp = require('gulp'),
// uglify = require('gulp-uglify-es').default,
sass = require('gulp-sass'),
image = require('gulp-image'),// //https://www.npmjs.com/package/gulp-image
autoprefixer = require('gulp-autoprefixer'),
sourcemaps = require('gulp-sourcemaps'),
browserSync = require('browser-sync').create(),
concat = require('gulp-concat'),
pump = require('pump'),
comp_images = true,
image_quiet = true,
// D8 path
files_path = '../../../../sites/default/files',
def_task = ['sync', 'sass_pre', 'watch']; // 'minifyjs', 'sass_pro',

if (comp_images)
	def_task.push('images_theme'); //, 'images_files'


gulp.task('sync', () =>{
	 browserSync.init({
		 proxy: {
	     target: "http://gtd-asterics.local"
		 },
		 open: false
	 })
});

gulp.task('minifyjs', (cb) =>{
	pump([
		gulp.src('./js/*.js'),
		uglify(),
		gulp.dest('./minify')
	],cb);
});

gulp.task('images_theme', (cb) =>{
	pump([
		gulp.src(['./images/*', '!./images/*.svg']),
		image({
	    optimizationLevel: 5,
	    progressive: true,
	    interlaced: true,
	    pngquant: true,
	    jpegoptim: true,
	    optipng: true,
	    zopflipng: false,
	    gifsicle: true,
	    concurrent: 10,
			quiet: image_quiet // LOGS
    }),
		gulp.dest('./images')
	],cb);
});

gulp.task('images_files', (cb) =>{
	pump([
		gulp.src(files_path+'/**/*'),
		image({
	    optimizationLevel: 5,
	    progressive: true,
	    interlaced: true,
	    pngquant: true,
	    jpegoptim: true,
	    optipng: true,
	    zopflipng: false,
	    gifsicle: true,
	    concurrent: 10,
			quiet: image_quiet // LOGS
    }),
		gulp.dest(files_path)
	],cb);
});

gulp.task('sass_pre', (cb) =>{
	pump([
		gulp.src(['./sass/*.scss', '!./sass/_*.scss']),
		sourcemaps.init(),
		sass({
      outputStyle: 'compact',
		}),
		autoprefixer({browsers: ['last 2 versions']}),
		sourcemaps.write('./maps'),
		gulp.dest('./css'),
		browserSync.stream()
	],cb);
});

gulp.task('sass_pro', (cb) =>{
	pump([
		gulp.src(['./sass/*.scss', '!./sass/_*.scss']),
		sass({
			outputStyle: 'compressed',
		}),
		autoprefixer({browsers: ['last 2 versions']}),
		gulp.dest('./minify'),
	],cb);
});

gulp.task('watch', ['sync', 'sass_pre'], (cb)=>{
	gulp.watch([
		'./sass/*.scss',
		'!./sass/_*.scss',
	], ['sass_pre', 'sass_pro'])
	gulp.watch([
		'./js/*.js',
	], ['minifyjs'])
}); //, 'sass_pro'

gulp.task('default',def_task);
