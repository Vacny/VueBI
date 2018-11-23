<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'门诊收入趋势'"
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
        <button @click="routerGoIncomeStatement">门诊收入报表</button>
        <button>药房出库数据表</button>
        <line-chart></line-chart>
        <bar-chart :id="'one'"></bar-chart>
        <bar-chart :id="'two'"></bar-chart>

      </div>



    </div>
  </div>
</template>

<script>
  import vHead from "../../common/vHead"
  import xDate from "../../common/vDate"
  import lineChart from "../../common/charts/LineChart"
  import barChart from "../../common/charts/BarChart"
  import {XButton, Tabbar, TabbarItem, XTable} from 'vux'

  export default {
    name: "outpatient-revenue-trends",
    components:{
      lineChart,
      barChart,
      vHead,
      xDate,
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
      routerGoIncomeStatement: function () {
        this.$router.push('/BasicOperation/OutpatientIncomeStatement')
      }

    }
  }
</script>

<style scoped>

</style>
