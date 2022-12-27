module.exports = {
    outputDir: "dist",  //打包时生成的生产环境构建文件的目录
    publicPath: "./",  // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径 ，配合 “历史模式为hash模式使用即#模式”
    assetsDir: 'static',  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
}