<template>
  <div>
    <group :gutter="5">
      <datetime
        :min-year="2000"
        :format="format"
        v-model="time"
        :title="title"
        @on-change="dateChange"
      ></datetime>
    </group>
  </div>
</template>

<script>
  import {Datetime, Group} from 'vux'

  export default {
    name: "x-date",
    components: {
      Datetime,
      Group
    },
    props:{
      format:{
        type:String,
        default:"YYYY-MM-DD"
      },
      title:{
        type:String,
        default:"请选择日期"
      },
      retDate:{
        type:Function,
        default:() => {}
      }
    },
    data() {
      return {
        time: ""
      }
    },
    methods: {
      dateChange: function (value) {
        this.retDate(value)
      }
    }
  }
</script>

<style scoped>

</style>
