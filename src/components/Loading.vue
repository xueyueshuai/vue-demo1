<template>
  <div>
<!--    <van-button type="primary" text="显示遮罩层" @click="show = true" />-->
    <van-overlay :show="show" style="display: flex;justify-content: center;align-items: center">
      <van-loading type="spinner" />
    </van-overlay>
  </div>
</template>

<script>

import {Button, Overlay,Loading} from "vant";
import 'vant/lib/button/style';
import 'vant/lib/overlay/style';
import 'vant/lib/loading/style';

export default {
  components: {
    [Button.name]: Button,
    [Overlay.name]: Overlay,
    [Loading.name]: Loading,

  },
  name: 'Loading',
  props:{
  },
  data() {
    return {
      show:true
    }
  },
  mounted() {
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
</style>