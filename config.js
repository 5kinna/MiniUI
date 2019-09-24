export const paths = {
    devSrc: `example`,
    prodSrc: `dist/`,
    wxmlSrc: `src/**/*.wxml`,
    cssSrc: `src/**/*.scss`,
    jsSrc: `src/**/*.js`,
    copySrc: ['src/**', '!src/**/*.wxml', '!src/**/*.js', '!src/**/*.scss']
}
export const templates = {
    wxmlSrc: `template/**/*.wxml`,
    cssSrc: `template/**/*.scss`,
    jsSrc: `template/**/*.js`,
    copySrc: ['template/**', '!template/pages/**/*.wxml', '!template/**/*.js', '!template/**/*.scss']
}