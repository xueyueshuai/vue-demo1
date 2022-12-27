<template>
  <div id="app">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" :key="$route.fullPath"/>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" :key="$route.fullPath"/>
  </div>
</template>

<style lang="scss" scoped>
html {
  font-size: 10px; // 相当于1rem = 10px
}

body {
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
  width: 375px;
}

* {
  margin: 0;
  padding: 0;
  font-size: 16px;


  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  cursor: pointer; /*苹果浏览器 点击事件要有此参数*/
  outline: none;
}

/deep/ .van-icon-arrow-left {
  color: #333 !important;
  //font-size: 20px;
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
