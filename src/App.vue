<template>
  <div id="app">
    <div id="app">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" :key="$route.fullPath"/>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" :key="$route.fullPath"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
html {
  font-size: 20px;  // 相当于1rem = 10px
}

body {
  font-size: 32px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
  font-size: 3.2rem;

  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  cursor: pointer; /*苹果浏览器 点击事件要有此参数*/
  outline: none;
}

/deep/ .van-icon-arrow-left {
  color: #333 !important;
  font-size: 4rem;
}
</style>

<script>
export default {
  data() {
    return {
      msg: process.env,
    };
  },
  mounted() {
    console.log(process.env);
  },
};
</script>
