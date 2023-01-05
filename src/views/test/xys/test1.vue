<template>
  <div class="test1-page">
    <div class="pc-window" ref="pcWindow">
      <iframe style="width:100%;height: 100%" src="https://lightly.teamcode.com/dashboard"></iframe>
    </div>
  </div>

</template>

<script>

export default {
  name: '',
  data() {
    return {}
  },
  mounted() {
    // 获取屏幕的w,h
    console.log(document.body.clientWidth)
    console.log(document.body.clientHeight)

    // 子元素
    let son_width = 1300
    let son_height = document.body.clientHeight * 1300 / document.body.clientWidth

    this.$refs.pcWindow.style.width = son_width + 'px'
    this.$refs.pcWindow.style.height = son_height + 'px'

    console.log(son_height)

    // 缩放比例
    let scale_w = document.body.clientWidth / son_width
    let scale_h = document.body.clientHeight / son_height
    console.log(scale_w)
    console.log(scale_h)
    let s = Math.min(scale_w, scale_h) * 0.99
    console.log(s)

    setTimeout(() => {
      this.$refs.pcWindow.style.transform = 'scale(' + s + ')'
      this.$refs.pcWindow.style.transformOrigin = 'left top'
      this.$refs.pcWindow.style.position = 'absolute'
      this.$refs.pcWindow.style.left = ((document.body.clientWidth - son_width * s) / 2) + 'px'
      this.$refs.pcWindow.style.top = ((document.body.clientHeight - son_height * s) / 2) + 'px'
    }, 1000)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.test1-page {
  width: 375px;
  height: 100Vh;
  box-sizing: border-box;
}

.pc-window {
  width: 1300PX;
  height: 800Px;
  border: 1Px solid red;
  box-sizing: border-box;
  overflow: hidden;
}
</style>