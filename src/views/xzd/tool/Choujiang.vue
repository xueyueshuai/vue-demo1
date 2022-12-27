<template>
  <div>
    <van-nav-bar
      title="新知地抽奖"
      left-arrow
      @click-left="onClickLeft"
    />
    <choujiang/>
  </div>
</template>

<script>


import {NavBar} from 'vant'
import 'vant/lib/nav-bar/style';
import Choujiang from "@/components/Choujiang";

export default {
  name: '',
  components: {
    Choujiang,
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