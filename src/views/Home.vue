<template>
  <div class="home-page">
    <h2 class="van-doc-demo-block__title">新知地工具</h2>

<!--    <van-cell-group inset>-->
<!--      <van-cell title="单元格" value="内容"/>-->
<!--      <van-cell title="单元格" value="内容" label="描述信息"/>-->
<!--    </van-cell-group>-->

    <a class="aaa" @click="$router.push('/xzd/tool/rili')">
      新知地日历
    </a>
    <a class="aaa">
      新知地工具2
    </a>
    <a class="aaa">
      新知地工具3
    </a>
  </div>
</template>

<script>

import {Cell, CellGroup} from 'vant';
import 'vant/lib/cell/style';
import 'vant/lib/cell-group/style';


export default {
  name: 'Home',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },
  mounted() {
    // this.$router.push('/test/xys/test1')
  }
}
</script>



<style lang="scss" scoped>
.home-page{
  min-height: 100vh;
  //background: #f7f8fa;
}

.van-doc-demo-block__title{
  margin: 0;
  padding: 32px 16px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}

.aaa{
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  margin: 0 40px 12px;
  padding-left: 20px;
  color: #323233;
  font-weight: 600;
  font-size: 14px;
  line-height: 40px;
  background: #f7f8fa;
  border-radius: 99px;
}
</style>
