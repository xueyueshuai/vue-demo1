<template>
  <div class="rili-page">
    <loading v-if="loading"/>
    <div class="btn-month-btn">
      <button class="pro-month-btn" @click="clickProMonth">上月</button>

      <div>{{ month }}</div>

      <button class="next-month-btn" @click="clickNextMonth">下月</button>

    </div>

    <div class="day-list">
      <div class="day-div">一</div>
      <div class="day-div">二</div>
      <div class="day-div">三</div>
      <div class="day-div">四</div>
      <div class="day-div">五</div>
      <div class="day-div">六</div>
      <div class="day-div">日</div>

      <template v-for="d in dayArr">
        <div class="day-div" :class="[jiaArr.includes(d.value)?'day-green':'',today === d.value?'day-today':'']">
          {{ d.display }}
        </div>
      </template>

    </div>

    <div style="text-align: center;margin: 4rem">
      <button class="next-month-btn" @click="clickNowMonth">
        返回当前月
      </button>

      今天是
      <span style="color: #e77320">{{ today }}</span>
    </div>


  </div>

</template>

<script>

import {test13} from "@/api/test";
import Loading from "@/components/Loading";

export default {
  name: 'Rili',
  components: {Loading},
  data() {
    return {
      loading: false,
      month: '',
      dayArr: [],
      today: '',

      jiaArr: []
    }
  },
  mounted() {
    this.today = this.getToday()

    this.clickNowMonth();

    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      test13({}).then(res => {
        this.jiaArr = res.data.days;
      }).catch(err => {
        console.log('err', err);
      }).finally(() => {
        setTimeout(() => {
          this.loading = false
        }, 1000)
      })
    },
    getToday() {
      let date = new Date();
      let Y = date.getFullYear();
      let M = this.formatNumber(date.getMonth() + 1);
      let d = this.formatNumber(date.getDate())

      let today = Y + '-' + M + '-' + d
      return today
    },

    clickProMonth() {
      this.start(this.getProMonth(this.month))
    },
    clickNextMonth() {
      this.start(this.getNextMonth(this.month))
    },
    clickNowMonth() {
      this.start(this.getNowMonth())
    },

    getNowMonth() {
      let date = new Date();
      let Y = date.getFullYear();
      let M = this.formatNumber(date.getMonth() + 1);

      return Y + '-' + M
    },
    getProMonth(month) {
      let arr = month.split('-')
      let Y = arr[0] * 1
      let M = arr[1] * 1

      let proMonth = ''

      if (M == 1) {
        proMonth = (Y - 1) + '-12'
      } else {
        proMonth = Y + '-' + this.formatNumber(M - 1)
      }
      return proMonth
    },
    getNextMonth(month) {
      let arr = month.split('-')
      let Y = arr[0] * 1
      let M = arr[1] * 1

      let nextMonth = ''

      if (M == 12) {
        nextMonth = (Y + 1) + '-01'
      } else {
        nextMonth = Y + '-' + this.formatNumber(M + 1)
      }
      return nextMonth
    },
    start(month) {
      console.log(month)
      this.month = month
      this.dayArr = this.getDays(month)
    },
    getDays(month) {
      // month为 2022-01,2022-02,...2022-12
      let arr = month.split('-')
      let Y = arr[0]
      let M = arr[1]

      month = Y + '-' + this.formatNumber(M);

      // 某月的一号是周几
      let dayOfWeek = new Date(Y, M - 1, 1).getDay()// 得到0-6

      // 获取某月有多少天
      let dayTotal = new Date(Y, M, 0).getDate()

      // 空多少天
      let emptyTotal
      if (dayOfWeek === 0) {
        emptyTotal = 0
      } else {
        emptyTotal = dayOfWeek - 1
      }

      let dayArr = []
      for (let i = 0; i < emptyTotal; i++) {
        dayArr.push({
          value: '',
          display: ''
        })
      }
      for (let i = 1; i <= dayTotal; i++) {
        dayArr.push({
          value: month + '-' + this.formatNumber(i),
          display: i
        })
      }

      // console.log(month + '月有' + dayTotal + '天，一号是周' + (emptyTotal == 0 ? '日' : emptyTotal))


      return dayArr
    },
    formatNumber(num) {
      let n = num * 1
      if (n <= 9) {
        n = '0' + n
      }
      return n
    },
  }
}
</script>

<style lang="scss" scoped>

.rili-page {
  color: #1d4c28;
}

.btn-month-btn {
  height: 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.pro-month-btn, .next-month-btn {
  border: 0 solid red;
  border-radius: .8rem;
  padding: 1rem 2rem;
  background: #1d4c28;
  color: #fff;
}

.day-list {
  width: 75rem;
  overflow: hidden;
}

.day-div {
  width: 8rem;
  height: 4rem;
  margin: 1.3rem;
  text-align: center;
  line-height: 4rem;
  overflow: hidden;
  float: left;
  box-sizing: border-box;
  border: .2rem solid #fff;
  border-radius: .4rem;
}

.day-green {
  border-color: #1d4c28;
}

.day-today {
  color: #e77320;
}


</style>