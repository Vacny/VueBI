<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'门诊脱单分析'"
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
        <gauge-chart :id="'one'"></gauge-chart>
        <gauge-chart :id="'two'"></gauge-chart>
        <gauge-chart :id="'three'"></gauge-chart>
        <gauge-chart :id="'four'"></gauge-chart>
      </div>
      <div>
        <x-table>
          <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td @click="routerGoReleaseByDepart">1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          </tbody>
        </x-table>
      </div>



    </div>
  </div>
</template>

<script>
  import vHead from "../../common/vHead"
  import xDate from "../../common/vDate"
  import pieChart from "../../common/charts/PieChart"
  import gaugeChart from "../../common/charts/GaugeChart"
  import {XButton, Tabbar, TabbarItem, XTable} from 'vux'

  export default {
    name: "outpatient-release",
    components:{
      gaugeChart,
      pieChart,
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
      routerGoReleaseByDepart: function () {
        this.$router.push("/BasicOperation/OutpatientReleaseByDepart")

      }
    }
  }
</script>

<style scoped>

</style>
