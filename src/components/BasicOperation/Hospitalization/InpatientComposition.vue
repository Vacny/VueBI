<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'住院病人构成分析'"
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
            <depart></depart>
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
        <pie-chart :id="'one'"></pie-chart>
        <pie-chart :id="'two'"></pie-chart>
        <pie-chart :id="'three'"></pie-chart>
        <bar-chart></bar-chart>
      </div>

    </div>
  </div>
</template>

<script>
  import vHead from "../../common/vHead"
  import xDate from "../../common/vDate"
  import depart from "../../common/Department"
  import PieChart from "../../common/charts/PieChart"
  import BarChart from "../../common/charts/BarChart"
  import {XButton} from 'vux'

  export default {
    name: "inpatient-composition",
    components: {
      vHead,
      xDate,
      depart,
      XButton,
      BarChart,
      PieChart
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
      }
    }
  }
</script>

<style scoped>
  .weui-tabbar {
    position: fixed;
  }

  .weui-tabbar {
    z-index: 10;
  }

</style>
