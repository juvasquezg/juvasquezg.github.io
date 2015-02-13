var gulp = require('gulp'),
	connect = require('gulp-connect'),
	stylus    = require('gulp-stylus'),
    nib       = require('nib'),
    jshint    = require('gulp-jshint'),
    stylish   = require('jshint-stylish'),
    historyApiFallback = require('connect-history-api-fallback');

// Servidor web de desarrollo
gulp.task('server', function() {
	connect.server({
		root: '.',
		hostname: '0.0.0.0',
		port: 8080,
		livereload: true,
		middleware: function(connect, opt) {
			return [ historyApiFallback ];
		}
	});
});

// Preprocesa archivos Stylus a CSS y recarga los cambios
gulp.task('css', function() {
  gulp.src('./css/main.styl')
    .pipe(stylus({ use: nib() }))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function() {
  gulp.src('./**/*.html')
    .pipe(connect.reload());
});

// Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function() {
  return gulp.src('./js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});


// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function() {
	gulp.watch(['./**/*.html'], ['html']);
	gulp.watch(['./css/**/*.styl'], ['css']);
	gulp.watch(['./js/**/*.js', './Gulpfile.js'], ['jshint']);
});

gulp.task('default', ['server', 'watch']);