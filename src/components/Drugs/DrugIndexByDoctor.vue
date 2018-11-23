<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'药品指标分析(医生)'"
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
            <trend></trend>
            <depart></depart>
            <x-date :title="'时间'" :format="'YYYY-MM'"></x-date>
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
        <bar-chart></bar-chart>
      </div>

    </div>
  </div>
</template>

<script>
  import vHead from "../common/vHead"
  import xDate from "../common/vDate"
  import trend from "../common/Trend"
  import barChart from "../BarChart"
  import depart from "../common/Department"
  import {XTable, XButton} from "vux"

  export default {
    name: "drug-index-by-doctor",
    components: {
      vHead,
      xDate,
      depart,
      trend,
      barChart,
      XTable,
      XButton
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

</style>
