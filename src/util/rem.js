//兼容处理
// function setHtml() {
//   //获取设备宽度
//   let deviceWidth = document.documentElement.offsetWidth;
//   //给html标签设置fontSize，就是给rem赋值
//   document.documentElement.style.fontSize = deviceWidth / 375 * 10 + 'px';
// }
//
// //窗口大小变化的时候执行
// window.onresize = setHtml;
// //页面初始加载时也要触发
// setHtml();


const baseSize = 37.5 //跟postcss.config.js中rootValue的值是一致的
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 375 宽的缩放比例，可根据自己需要修改。  vantUI使用的是375px页面宽，这里使用375px
  const scale = document.documentElement.clientWidth / 375
  // 设置页面根节点字体大小 最高为两倍图 即设计稿为750
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 4)) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
