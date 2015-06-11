var gulp = require('gulp'),
	sass = require('gulp-ruby-sass')
	notify = require('gulp-notify')
	bower = require('gulp-bower');

var config = {
	sassPath: './source/sass',
	bowerDir: './bower_components'
}

gulp.task('bower', function() {
	return bower()
		.pipe(gulp.dest(config.bowerDir))
});


gulp.task('icons', function() {
	return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
		.pipe(gulp.dest('./public/fonts'));
});


gulp.task('css', function() {
	return gulp.src(config.sassPath + '/style.scss')
		.pipe(sass({
			style: 'compressed',
			loadPath: [
				'./source/sass',
				config.bowerDir + '/bootstrap-sass/assets/stylesheets',
				config.bowerDir + '/fontawesome/scss',
			]
		})
			.on("error", notify.onError(function (error) {
				return "Error: " + error.message;
			})))
		.pipe(gulp.dest('./public/css'));
});


gulp.task('watch', function() {
	gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});


gulp.task('default', ['bower', 'icons', 'css']);
