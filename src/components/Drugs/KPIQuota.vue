<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'阳光用药KPI分析(指标图表)'"
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
        <bar-chart :id="'one'"></bar-chart>
        <bar-chart :id="'two'"></bar-chart>
        <bar-chart :id="'three'"></bar-chart>
      </div>

    </div>
  </div>
</template>
<script>
  import vHead from "../common/vHead"
  import barChart from "../common/charts/BarChart"
  import xDate from "../common/vDate"
  import {XButton} from "vux"

  export default {
    name: "k-p-i-quota",
    components: {
      vHead,
      barChart,
      xDate,
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
