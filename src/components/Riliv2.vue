<template>
  <div>
    <loading v-if="loading"/>

    <van-calendar
      :min-date="minDate"
      :max-date="maxDate"
      :show-title="false"
      :show-confirm="false"
      type="multiple"
      readonly
      :poppable="false"
      :style="{ height: 'calc(100vh - 100px)' }"
      first-day-of-week="1"
      :default-date="v"
    />
  </div>
</template>

<script>
import {Calendar} from 'vant'
import 'vant/lib/calendar/style'
import {test13} from "@/api/test";
import Loading from "@/components/Loading";

export default {
  components:{
    Loading,
    [Calendar.name]:Calendar
  },
  name: 'Riliv2',
  data() {
    return {
      show:true,
      minDate: new Date(2023, 0, 1),
      maxDate: new Date(2023, 11, 31),
      v:[],
      loading:false,
    }
  },
  mounted() {
    this.getList()
  },
  methods:{
    getList() {
      this.loading = true
      test13({}).then(res => {
        let days = res.data.days;

        console.log(days)

        this.v = days.map(day=>{
          return new Date(day)
        })

      }).catch(err => {
        console.log('err', err);
      }).finally(() => {
        setTimeout(() => {
          this.loading = false
        }, 100)
      })
    },
  }
}
</script>

<style lang="scss" scoped>
</style>