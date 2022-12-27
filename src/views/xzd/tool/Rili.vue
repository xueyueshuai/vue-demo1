<template>
  <div>
    <van-nav-bar
      title="新知地日历"
      left-arrow
      @click-left="onClickLeft"
    />
    <rili />
  </div>
</template>

<script>

import Rili from "../../../components/Rili";

import {NavBar} from 'vant'
import 'vant/lib/nav-bar/style';

export default {
  name: '',
  components: {
    Rili,
    [NavBar.name]:NavBar
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods:{
    onClickLeft(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>