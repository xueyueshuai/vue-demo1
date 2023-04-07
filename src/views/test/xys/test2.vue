<template>
  <div class="page">
    <div style="text-align: center;padding: 20px">
      <span style="font-size: 40px;font-weight: 500">你知道</span><span style="font-size: 50px;font-weight: 500;color: red;text-decoration: underline">哪些老板最能赚钱</span>
      <div style="font-size: 50px;font-weight: 500">各行业毛利润</div>
    </div>

    <div class="father-div" style="filter: blur(0)">
      <div class="son-div" v-for="o in arr" :class="[o.num>=80?'over80':'',o.num>=90?'over90':'',o.num>=100?'over100':'']">
        <div>{{o.title}}</div>
        <div>{{o.num}}%</div>
      </div>
    </div>
  </div>
</template>

<script>
import {Grid, GridItem} from'vant'
import 'vant/lib/grid/style'
import 'vant/lib/grid-item/style'
export default {
  components:{
    [Grid.name]:Grid,
    [GridItem.name]:GridItem
  },
  name: '',
  data() {
    return {
      // str:'打工:5%,批发:20%,快递:9%,金融:85%,保健:80%,养殖:38%,通信:27%,采矿:70%,车美容:80%,灯饰:45%,服装:60%,能源:50%,旅游:48%,餐饮:65%,种田:15%,食品饮料:25%,食材:30%,汽车配件:50%,互联网游戏:90%,酿酒:60%,医药制造:30%,宾馆:78%,废品回收:35%,美容养发:88%',
      str:'纺织制造:38%,共享经济:300%,软件开发:95%,车辆租赁:70%,房地产:28%,化妆品:85%,运输:20%,芯片制造:90%,广告业:75%,教育培训:40%,药品:60%,手机(苹果):65%,眼镜:300%,医疗美容:85%,零售:30%,汽车制造:15%,外贸:700%,殡葬:600%,摄影婚庆:80%,钢铁制造:10%',
      arr:[]
    }
  },
  mounted() {
    let arr = this.str.split(',')

    this.arr = arr.map(v=>{
      console.log(v)
      let keyValArr = v.split(':')
      let key = keyValArr[0]
      let val = keyValArr[1].replace('%','')
      return {
        title:key,
        num:val,
      }
    })
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
.page{
  position: relative;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  &::before {
    background-image: url("../../../assets/a.png");

    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    filter: blur(100px);
    z-index: -1;
    margin: -30px;
  }
}
.father-div{
  overflow: hidden;
  .son-div{
    width: 81px;
    height: 50px;
    border:1Px solid #323233;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    text-align: center;
    font-size: 14px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.over80{
      background: #73a06b;
    }
    &.over90{
      color: #ffffff;
      background: #dcb063;
    }
    &.over100{
      color: #ffffff;
      background: red;
    }
  }
}
</style>