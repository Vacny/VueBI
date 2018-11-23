<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'科室就诊综合分析'"
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
        <bar-chart :chart-title="chartTitle" :chart-data="chartData" :chart-axis="chartAxis"></bar-chart>
        <bar-chart :id="'two'"></bar-chart>
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
            <td>1</td>
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
  import BarChart from "../../common/charts/BarChart"
  import depart from "../../common/Department"
  import {XButton, Tabbar, TabbarItem, XTable, Divider} from 'vux'

  export default {
    name: "outpatient-visit-comprehensive-analysis",
    components: {
      vHead,
      xDate,
      XButton,
      BarChart,
      depart,
      Tabbar,
      TabbarItem,
      XTable,
      Divider
    },
    data() {
      return {
        search: false,
        chartTitle: "测试",
        chartAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        chartData: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
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
