import gulp from 'gulp'
import path from 'path'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify-es'
import sass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import postcss from 'gulp-postcss'
import del from 'del'
import gulpif from 'gulp-if'
import chalk from 'chalk'
import htmlmin from 'gulp-htmlmin'
import preprocess from 'gulp-preprocess'

import paths from './config.js'
import context from './preprocess.config'

// 配置环境
const ENV = process.env.NODE_ENV
const isDev = ENV === 'development' || ENV === 'dev'
const buildPath = path.join(__dirname, paths[`${ENV}Src`])
const format = isDev ? 'beautify' : false

export const clean = () => del([buildPath])

export const wxml = () => (
  gulp
    .src(paths.wxmlSrc)
    .pipe(preprocess({context:context[ENV]}))
    .pipe(
      gulpif(
        !isDev,
        htmlmin({
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        })
      )
    )
    .pipe(gulp.dest(buildPath))
)

export const style = () => (
  gulp
    .src(paths.cssSrc)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss())
    .pipe(cleanCSS({ format }))
    .pipe(rename((path) => (path.extname = '.wxss')))
    .pipe(gulp.dest(buildPath))
)

export const js = () => (
  gulp.src(paths.jsSrc)
    .pipe(preprocess())
    .pipe(babel())
    .pipe(
      gulpif(
        !isDev,
        uglify({
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true
          }
        })
      )
    )
    .pipe(rename((path) => (path.extname='.js')))
    .pipe(gulp.dest(buildPath))
)

export const copy = () => (
  gulp
    .src(paths.copySrc)
    .pipe(gulp.dest(buildPath))
)

export const watch = () => {
  gulp.watch(paths.wxmlSrc, wxml)
  gulp.watch(paths.jsSrc, js)
  gulp.watch(paths.cssSrc, style)
  gulp.watch(paths.copySrc, copy)
}

export default gulp.series(clean, gulp.parallel(copy, style, js, wxml), () => {
  watch()
  console.log(chalk.green.bold('✔ ✔ ✔ 已准备就绪~~~'))
})

export const build = gulp.series(clean, gulp.parallel(copy, style, js, wxml), done => {
  done()
  console.log(chalk.green.bold('✔ ✔ ✔ 正式环境已重构完成!!!'))
})

export const test = gulp.series(clean, gulp.parallel(copy, style, js, wxml), done => {
  done()
  console.log(chalk.green.bold('✔ ✔ ✔ 测试环境已重构完成!!!'))
})