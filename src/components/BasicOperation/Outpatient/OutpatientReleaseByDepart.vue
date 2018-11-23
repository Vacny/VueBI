<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'门诊脱单分析(科室)'"
        :search="true"
        :right-option-fun="openSearch"
      ></v-head>

      <div class="searchModel" v-show="search">
        <v-head
          :is-list="false"
          :head-tit="'筛选条件'"
          :left-option-fun="closeSearch"
          :isPrevent="true"
        ></v-head>
        <div class="model">
          <div>
            <depart></depart>
            <x-date :title="'开始时间'" :format="'YYYY-MM'"></x-date>
            <x-date :title="'结束时间'" :format="'YYYY-MM'"></x-date>
          </div>
          <div style="margin-top:10px">
            <x-button
              :type="'primary'"
              :text="'查询'"
              @click.native="searchData"
            ></x-button>
          </div>
        </div>
      </div>

      <div>
        <gauge-chart :id="'one'"></gauge-chart>
        <gauge-chart :id="'two'"></gauge-chart>
        <gauge-chart :id="'three'"></gauge-chart>
        <gauge-chart :id="'four'"></gauge-chart>
        <line-chart></line-chart>
      </div>



    </div>
  </div>
</template>

<script>
  import depart from "../../common/Department"
  import vHead from "../../common/vHead"
  import xDate from "../../common/vDate"
  import pieChart from "../../common/charts/PieChart"
  import lineChart from "../../common/charts/LineChart"
  import gaugeChart from "../../common/charts/GaugeChart"
  import {XButton, Tabbar, TabbarItem, XTable} from 'vux'

  export default {
    name: "outpatient-release",
    components:{
      gaugeChart,
      pieChart,
      lineChart,
      vHead,
      xDate,
      depart,
      XButton,
      TabbarItem,
      Tabbar,
      XTable
    },
    data() {
      return {
        search: false
      }
    },
    methods: {
      openSearch: function () {
        this.search = true
      },
      closeSearch: function () {
        this.search = false
      },
      searchData: function () {
        this.closeSearch()
      },
    }
  }
</script>

<style scoped>

</style>
