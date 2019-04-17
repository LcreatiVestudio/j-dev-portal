'use strict'

const gulp = require('gulp')
const eslint = require('gulp-eslint')
const standard = require('standard')

gulp.task('lint', (done) => {
  gulp.src(['./src/**/*.ts', './src/**/*.vue', './src/*.ts', './src/*.vue'])
    .pipe(eslint({
      configFile: '.eslintrc'
    }))
    .pipe(eslint.format())
  return standard.lintFiles([], { cwd: './src', fix: true, plugins: ['eslint-plugin-markdown', 'eslint-plugin-import', 'eslint-plugin-node', 'eslint-plugin-vue', 'eslint-plugin-promise'] }, (err, args) => {
    if (err) done(err)
    else done()
  })
})

gulp.task('build', gulp.series(gulp.parallel('lint'), (done) => {
  // do nothing
}))
