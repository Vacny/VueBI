<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'医院运营综合分析'"
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
            <x-date :title="'年份'" :format="'YYYY-MM'"></x-date>
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

      <div style="background: #f8f8f8;">
        <div style="padding-bottom: 15px;">
          <divider>医疗服务量</divider>
          <x-table :cell-bordered="false" style="background-color:#fff;">
            <thead>
            <tr style="background-color: #F7F7F7">
              <th>项目</th>
              <th>本月</th>
              <th>同比</th>
              <th>环比</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>x</td>
              <td>a</td>
              <td>x</td>
              <td>a</td>
            </tr>
            <tr>
              <td>q</td>
              <td>w</td>
              <td>x</td>
              <td>a</td>
            </tr>
            </tbody>
          </x-table>
        </div>
        <div style="padding-bottom: 15px">
          <divider>医疗收入</divider>
          <x-table :cell-bordered="false" style="background-color:#fff;">
            <thead>
            <tr style="background-color: #F7F7F7">
              <th>项目</th>
              <th>本月</th>
              <th>同比</th>
              <th>环比</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>x</td>
              <td>a</td>
              <td>x</td>
              <td>a</td>
            </tr>
            <tr>
              <td>q</td>
              <td>w</td>
              <td>x</td>
              <td>a</td>
            </tr>
            </tbody>
          </x-table>
        </div>
        <div style="padding-bottom: 15px;">
          <divider>医疗费用</divider>
          <x-table :cell-bordered="false" style="background-color:#fff;">
            <thead>
            <tr style="background-color: #F7F7F7">
              <th>项目</th>
              <th>本月</th>
              <th>同比</th>
              <th>环比</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>x</td>
              <td>a</td>
              <td>x</td>
              <td>a</td>
            </tr>
            <tr>
              <td>q</td>
              <td>w</td>
              <td>x</td>
              <td>a</td>
            </tr>
            </tbody>
          </x-table>
        </div>
        <div style="padding-bottom: 15px;">
          <divider>中医药特色</divider>
          <x-table :cell-bordered="false" style="background-color:#fff;">
            <thead>
            <tr style="background-color: #F7F7F7">
              <th>项目</th>
              <th>本月</th>
              <th>同比</th>
              <th>环比</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>x</td>
              <td>a</td>
              <td>x</td>
              <td>a</td>
            </tr>
            <tr>
              <td>q</td>
              <td>w</td>
              <td>x</td>
              <td>a</td>
            </tr>
            </tbody>
          </x-table>
        </div>
        <div style="padding-bottom: 15px;">
          <divider>效率与质量</divider>
          <x-table :cell-bordered="false" style="background-color:#fff;">
            <thead>
            <tr style="background-color: #F7F7F7">
              <th>项目</th>
              <th>本月</th>
              <th>同比</th>
              <th>环比</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>x</td>
              <td>a</td>
              <td>x</td>
              <td>a</td>
            </tr>
            <tr>
              <td>q</td>
              <td>w</td>
              <td>x</td>
              <td>a</td>
            </tr>
            </tbody>
          </x-table>
        </div>
        <div>
          <gauge-chart></gauge-chart>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import vHead from "../common/vHead"
  import xDate from "../common/vDate"
  import depart from "../common/Department"
  import LineChart from "../common/charts/LineChart"
  import {XButton, Tabbar, TabbarItem, XTable, Divider} from 'vux'
  import GaugeChart from "../common/charts/GaugeChart"

  export default {
    name: "comprehensive-analysis",
    components: {
      vHead,
      xDate,
      depart,
      XButton,
      LineChart,
      Tabbar,
      TabbarItem,
      XTable,
      Divider,
      GaugeChart
    },
    data() {
      return {
        search: false
      }
    },
    mounted() {

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
  .searchModel {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    left: 0;
    z-index: 99;
    background: rgba(0, 0, 0, 0.3);
  }

  .searchModel .model {
    width: 100%;
    background: #fff;
    height: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;;
    padding-top: 48px;
  }
</style>
