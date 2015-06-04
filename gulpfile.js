var gulp = require('gulp'),
	sass = require('gulp-ruby-sass')
	bower = require('gulp-bower');

var config = {
	sassPath: './source/_sass',
	bowerDir: './bower_components'
}

gulp.task('default', function() {
	// TODO: fill in the blanks
});


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