import gulp from 'gulp'
import path from 'path'
import uglify from 'gulp-uglify-es'
import sass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import postcss from 'gulp-postcss'
import del from 'del'
import chalk from 'chalk'
import htmlmin from 'gulp-htmlmin'
import preprocess from 'gulp-preprocess'
import changed from 'gulp-changed'
import gulpif from 'gulp-if'

import {
  paths,
  templates
} from './config.js'
import context from './preprocess.config'

// 配置环境
const ENV = process.env.NODE_ENV
const isProd = ENV === 'prod'
const buildPath = path.join(__dirname, paths[`${ENV}Src`])

export const clean = () => del([buildPath])

const srcPath = (str) => {
  const srcs = Array.isArray(paths[str]) ? paths[str] : [paths[str]]
  if (!isProd) {
    if (Array.isArray(templates[str])) srcs.push(...templates[str])
    else srcs.push(templates[str])
  }
  return srcs
}

const renameDirname = (path) => {
  if (!path.dirname.startsWith('pages') && !path.basename.includes('app') && !path.basename.includes('project')) {
    const comName = path.dirname
    path.dirname = `dist/${comName}`
  }
}

export const wxml = () => (
  gulp
  .src(srcPath('wxmlSrc'))
  .pipe(changed(buildPath))
  .pipe(preprocess({
    context: context[ENV]
  }))
  .pipe(rename(renameDirname))
  .pipe(gulp.dest(buildPath))
)

export const style = () => (
  gulp
  .src(srcPath('cssSrc'))
  .pipe(changed(buildPath))
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(postcss())
  .pipe(cleanCSS())
  .pipe(rename((path) => {
    renameDirname(path);
    path.extname = '.wxss';
  }))
  .pipe(gulp.dest(buildPath))
)

export const js = () => (
  gulp.src(srcPath('jsSrc'))
  .pipe(changed(buildPath))
  .pipe(preprocess({
    context: context[ENV]
  }))
  .pipe(
    gulpif(isProd, uglify({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
      }
    }))
  )
  .pipe(rename((path) => {
    renameDirname(path)
    path.extname = '.js'
  }))
  .pipe(gulp.dest(buildPath))
)

export const copy = () => (
  gulp
  .src(srcPath('copySrc'))
  .pipe(changed(buildPath))
  .pipe(rename(renameDirname))
  .pipe(gulp.dest(buildPath))
)

export const watch = () => {
  gulp.watch(srcPath('wxmlSrc'), wxml)
  gulp.watch(srcPath('jsSrc'), js)
  gulp.watch(srcPath('cssSrc'), style)
  gulp.watch(srcPath('copySrc'), copy)
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