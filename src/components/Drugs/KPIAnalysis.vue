<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'阳光用药KPI分析(全院)'"
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
        <x-table>
          <thead>
          <tr style="background-color: #F7F7F7">
            <td>指标</td>
            <td>同比</td>
            <td>环比</td>
            <td>科室趋势</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td @click="routerGoKPIQuota">001</td>
            <td>123</td>
            <td>234</td>
            <td @click="routerGoKPIQuotaTrend">科室趋势</td>
          </tr>
          <tr>
            <td>002</td>
            <td>123</td>
            <td>234</td>
            <td>科室趋势</td>
          </tr>
          <tr>
            <td>003</td>
            <td>123</td>
            <td>234</td>
            <td>科室趋势</td>
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
  import {XButton, XTable} from "vux"

  export default {
    name: "k-p-i-analysis",
    components: {
      vHead,
      xDate,
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
      routerGoKPIQuota: function () {
        this.$router.push('/Drugs/KPIQuota')
      },
      routerGoKPIQuotaTrend: function () {
        this.$router.push('/Drugs/KPIQuotaTrend')
      }
    }
  }
</script>

<style scoped>

</style>
