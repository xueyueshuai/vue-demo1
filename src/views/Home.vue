<template>
  <div class="home-page">
<!--    <h2 class="van-doc-demo-block__title">新知地工具</h2>-->


    <a class="every-card" @click="$router.push('/xzd/tool/rili')">新知地日历</a>

    <a class="every-card" @click="$router.push('/xzd/tool/choujiang')">新知地抽奖</a>

    <a class="every-card" @click="goTo('https://xueyueshuai.github.io/docs/guide/xzdRule/web/')">web工程师必读</a>

<!--    <a class="every-card" @click="showNo">-->
<!--      新知地工具3-->
<!--    </a>-->

  </div>
</template>

<script>
import {Cell, CellGroup,Toast} from 'vant';
import 'vant/lib/cell/style';
import 'vant/lib/cell-group/style';
import 'vant/lib/toast/style';


export default {
  name: 'Home',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    // [Toast.name]: Toast,
  },
  mounted() {
    // this.$router.push('/test/xys/test1')
  },
  methods:{
    showNo(){
      Toast('aaa')
    },
    goTo(url){
      if(url){
        window.location.href=url
      }
    }
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


.every-card{
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  margin: 20px 20px 0;
  padding-left: 20px;
  color: #323233;
  font-weight: 600;
  font-size: 14px;
  line-height: 40px;
  background: #f7f8fa;
  border-radius: 99px;
  overflow: hidden;
}

</style>
