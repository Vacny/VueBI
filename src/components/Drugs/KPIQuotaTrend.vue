<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'指标趋势科室对比(大科)'"
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
            <x-date :title="'时间'" :format="'YYYY'"></x-date>
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

        <x-table>
          <thead>
          <tr style="background-color: #F7F7F7">
            <td>科室</td>
            <td>时间</td>
            <td>时间</td>
            <td>时间</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td @click="routerGoKPIQuotaTrendByDepart">001</td>
            <td>123</td>
            <td>234</td>
            <td>234</td>
          </tr>
          <tr>
            <td>002</td>
            <td>123</td>
            <td>234</td>
            <td>234</td>
          </tr>
          <tr>
            <td>003</td>
            <td>123</td>
            <td>234</td>
            <td>234</td>
          </tr>
          </tbody>
        </x-table>
      </div>


    </div>
  </div>
</template>

<script>
  import vHead from "../common/vHead"
  import xDate from "../common/vDate"
  import trend from "../common/Trend"
  import lineChart from "../common/charts/LineChart"
  import {XButton, XTable} from "vux"

  export default {
    name: "k-p-i-quota-trend",
    components: {
      vHead,
      xDate,
      trend,
      lineChart,
      XButton,
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
      routerGoKPIQuotaTrendByDepart: function () {
        this.$router.push("/Drugs/KPIQuotaTrendByDepart")
      }
    }
  }
</script>

<style scoped>

</style>
