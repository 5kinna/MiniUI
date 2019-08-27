export const paths = {
    devSrc: `example/dist`,
    prodSrc: `dist/`,
    wxmlSrc: `src/**/*.wxml`,
    cssSrc: `src/**/*.scss`,
    jsSrc: `src/**/*.js`,
    copySrc: ['src/**', '!src/**/*.wxml', '!src/**/*.js', '!src/**/*.scss', '!src/project.config.*']
}
export const templates = {
    devSrc: `example/`,
    prodSrc: `dist/`,
    wxmlSrc: `template/**/*.wxml`,
    cssSrc: `template/**/*.scss`,
    jsSrc: `template/**/*.js`,
    copySrc: ['template/**', '!template/**/*.wxml', '!template/**/*.js', '!template/**/*.scss', '!template/project.config.*']
}