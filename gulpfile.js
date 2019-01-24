const gulp = require('gulp');
const typedoc = require('gulp-typedoc');
const rollup = require('gulp-better-rollup');
const typescript = require('rollup-plugin-typescript2');
const { terser } = require('rollup-plugin-terser');

const pkg = require('./package.json');

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
