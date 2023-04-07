<template>
  <div>
    <van-nav-bar
      title="新知地日历"
      left-arrow
      @click-left="onClickLeft"
    />
        <rili v-if="type == 1" />
    <riliv2 v-if="type == 2" />
  </div>
</template>

<script>
import {test13} from "@/api/test";

import Rili from "@/components/Rili";

import {NavBar} from 'vant'
import 'vant/lib/nav-bar/style';
import Riliv2 from "@/components/Riliv2";

export default {
  name: '',
  components: {
    Riliv2,
    Rili,
    [NavBar.name]: NavBar
  },
  data() {
    return {
      type: 1,
    }
  },
  mounted() {
    this.type = this.$route.query.type || 1
  },
  methods: {
    onClickLeft() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>