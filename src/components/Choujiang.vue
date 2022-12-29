<template>
  <div style="overflow: hidden;border:1px solid #fff">

    <div class="father-div">
      <img ref="img" class="zp" src="@/assets/choujiang/zp.png"/>
      <img class="zz" src="@/assets/choujiang/zz.png" @click="startPlay"/>
    </div>

    <div style="margin: 20px;text-align: center">
      <van-button @click="startPlay">开始游戏</van-button>
    </div>

  </div>
</template>

<script>
import {Button} from 'vant'
import 'vant/lib/button/style'
import {rand} from "@/util/func";

export default {
  name: 'Choujiang',
  components: {
    [Button.name]: Button
  },
  data() {
    return {
      r: 0
    }
  },
  mounted() {

  },
  methods: {
    startPlay() {
      this.r += rand(360 * 6, 360 * 12)
      if ((this.r-30) % 60 <= 3) {
        this.r += 3
      }
      if ((this.r-30) % 60 >=57) {
        this.r -= 3
      }
      this.$refs.img.style.transform = 'rotate(' + this.r + 'deg)'
    },
  }
}
</script>

<style lang="scss" scoped>

.father-div {
  width: 300px;
  height: 300px;
  border: 1px solid #fff;
  margin: 37px auto;
  overflow: hidden;
  position: relative;

  .zp {
    transform: rotate(0deg);
    transition: transform 3s;
    width: 100%;
    height: 100%;
  }

  .zz {
    width: 80px;
    position: absolute;
    left: 110px;
    top: 110px;
  }
}

</style>