<template>
  <div style="overflow: hidden;border:1px solid #fff">
    <div class="father-div">
      <img ref="img" class="zp" src="@/assets/choujiang/zp.png"/>
      <img class="zz" src="@/assets/choujiang/zz.png"/>
    </div>

    <div style="margin: 20px;text-align: center">
      <van-button v-if="status===1" @click="startPlay">开始游戏</van-button>
    </div>

    <!--    <van-button v-if="status===2">开始游戏</van-button>-->
  </div>
</template>

<script>
import {Button} from 'vant'
import 'vant/lib/button/style'
import {rand} from "@/util/func";

export default {
  name: '',
  components: {
    [Button.name]: Button
  },
  data() {
    return {
      status: 1,
      r:0
    }
  },
  mounted() {

  },
  methods: {
    startPlay() {
      this.r += rand(360 * 6, 360 * 12)

      this.$refs.img.style.transform = 'rotate(' + this.r + 'deg)'
    },
  }
}
</script>

<style lang="scss" scoped>
.test-img {
  width: 100px;
  height: 100px;
}

.father-div{
  width: 300px;
  height: 300px;
  border:1px solid #fff;
  margin: 37px auto;
  overflow: hidden;
  position: relative;
  .zp{
    transform: rotate(0deg);
    transition: transform 3s;

    width: 100%;
    height: 100%;
  }
  .zz{
    width: 80px;

    position: absolute;
    left: 110px;
    top: 110px;
  }
}
</style>