<template>
  <div>
    test3
  </div>
</template>

<script>

const { Realtime, TextMessage } = require('leancloud-realtime');
const realtime = new Realtime({
  appId: 'vOKOdDe490zJoC3cQGK0F2Uv-gzGzoHsz',
  appKey: '7FKho3296WNDzipnntXUcKxi',
  server: 'https://vokodde4.lc-cn-n1-shared.com',
});

localStorage.setItem('debug', 'LC*');


// Tom 用自己的名字作为 clientId 登录，并且获取 IMClient 对象实例
realtime.createIMClient('Tom').then(function (tom) {
  // 成功登录
  console.log('登录成功')
}).catch(console.error);

export default {
  name: '',
  data() {
    return {
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