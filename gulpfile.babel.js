import gulp from 'gulp'
import path from 'path'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify-es'
import sass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import postcss from 'gulp-postcss'
import del from 'del'
import chalk from 'chalk'
import htmlmin from 'gulp-htmlmin'
import preprocess from 'gulp-preprocess'

import {paths,templates} from './config.js'
import context from './preprocess.config'

// 配置环境
const ENV = process.env.NODE_ENV
const isDev = ENV === 'development' || ENV === 'dev'
const buildPath = path.join(__dirname, paths[`${ENV}Src`])
const pageBuildPath = path.join(__dirname, templates[`${ENV}Src`])

export const clean = () => del([buildPath])

export const wxml = () => (
    gulp
    .src(paths.wxmlSrc)
    .pipe(preprocess({context:context[ENV]}))
    .pipe(
        htmlmin({
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        })
    )
    .pipe(gulp.dest(buildPath))
)
export const wxmlPage = () => (
    gulp
    .src(templates.wxmlSrc)
    .pipe(preprocess({context:context[ENV]}))
    .pipe(
        htmlmin({
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        })
    )
    .pipe(gulp.dest(pageBuildPath))
)

export const style = () => (
  gulp
    .src(paths.cssSrc)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss())
    .pipe(cleanCSS())
    .pipe(rename((path) => (path.extname = '.wxss')))
    .pipe(gulp.dest(buildPath))
)
export const stylePage = () => (
  gulp
    .src(templates.cssSrc)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss())
    .pipe(cleanCSS())
    .pipe(rename((path) => (path.extname = '.wxss')))
    .pipe(gulp.dest(pageBuildPath))
)

export const js = () => (
  gulp.src(paths.jsSrc)
    .pipe(preprocess())
    .pipe(babel())
    .pipe(
        uglify({
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true
          }
        })
    )
    .pipe(rename((path) => (path.extname='.js')))
    .pipe(gulp.dest(buildPath))
)
export const jsPage = () => (
  gulp.src(templates.jsSrc)
    .pipe(preprocess())
    .pipe(babel())
    .pipe(
        uglify({
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true
          }
        })
    )
    .pipe(rename((path) => (path.extname='.js')))
    .pipe(gulp.dest(pageBuildPath))
)

export const copy = () => (
  gulp
    .src(paths.copySrc)
    .pipe(gulp.dest(buildPath))
)
export const copyPage = () => (
  gulp
    .src(templates.copySrc)
    .pipe(gulp.dest(pageBuildPath))
)

export const watch = () => {
  gulp.watch(paths.wxmlSrc, wxml)
  gulp.watch(templates.wxmlSrc, wxmlPage)
  gulp.watch(paths.jsSrc, js)
  gulp.watch(templates.jsSrc, jsPage)
  gulp.watch(paths.cssSrc, style)
  gulp.watch(templates.cssSrc, stylePage)
  gulp.watch(paths.copySrc, copy)
  gulp.watch(templates.copySrc, copyPage)
}

export default gulp.series(clean, gulp.parallel(copy, style, js, wxml,copyPage,jsPage,wxmlPage,stylePage), () => {
  watch()
  console.log(chalk.green.bold('✔ ✔ ✔ 已准备就绪~~~'))
})

export const build = gulp.series(clean, gulp.parallel(copy, style, js, wxml), done => {
  done()
  console.log(chalk.green.bold('✔ ✔ ✔ 正式环境已重构完成!!!'))
})

export const test = gulp.series(clean, gulp.parallel(copy, style, js, wxml,copyPage,jsPage,wxmlPage,stylePage), done => {
  done()
  console.log(chalk.green.bold('✔ ✔ ✔ 测试环境已重构完成!!!'))
})