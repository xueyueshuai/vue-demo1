<template>
  <div>
    <van-count-down :time="s" format="DD 天 HH 时 mm 分 ss 秒" />
<!--    <van-button type="primary"></van-button>-->
    <abc></abc>
  </div>
</template>

<script>
import { CountDown,Button } from 'vant';
import 'vant/lib/count-down/style';
import 'vant/lib/button/style';
// import Abc from "@/components/Abc";

import Abc from '@xueyueshuai/frist-component'

export default {
  components:{
    Abc,
    [CountDown.name]:CountDown,
    [Button.name]:Button,
  },
  name: '',
  data() {
    return {
      s:0
    }
  },
  mounted() {

    let bDay = new Date('2023-06-18T00:00:00')
    let nowDay = new Date()

    let bS = bDay.getTime()
    let nowS = nowDay.getTime()

    this.s = bS-nowS
    if(this.s<0){
      this.s = 0
    }


  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
</style>