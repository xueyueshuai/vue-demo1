<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <div>{{ content }}</div>
  </div>
</template>
<script>
export default {
  name:'Abc',
  data() {
    return {
      title: "first component",
      content: "congratulation"
    };
  }
};
</script>
<style scoped>
.title {
  color: #f6a623;
}
</style>