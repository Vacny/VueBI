<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'住院病人次分析'"
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
        <line-chart></line-chart>
        <pie-chart></pie-chart>
      </div>
      <div>
        <x-table></x-table>
      </div>

    </div>
  </div>
</template>

<script>
  import vHead from "../../common/vHead"
  import xDate from "../../common/vDate"
  import PieChart from "../../common/charts/PieChart"
  import lineChart from "../../common/charts/LineChart"
  import {XButton, XTable} from 'vux'

  export default {
    name: "inpatient-visits",
    components: {
      vHead,
      xDate,
      XButton,
      lineChart,
      PieChart,
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
