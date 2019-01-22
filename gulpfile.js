const gulp = require('gulp');
const typedoc = require('gulp-typedoc');

gulp.task('docs', function() {
    return gulp.src(['src/**/*.ts'])
    .pipe(typedoc({
        module: 'iife',
        target: 'es5',
        out: 'docs/',
        name: 'Canvo',
		ignoreCompilerErrors: true,
		version: true,
		hideGenerator: true,
		readme: 'README.md',
		mode: 'file',
    }));
});
