<template>
  <div id="DepartPaySettlement">
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'医保费用分析基于结算'"
        :search="true"
        :right-option-fun="openSearch"
      ></v-head>

      <div>
        <x-button
          :type="'default'"
          :mini="true"
          :text="'最近一个月'"
        ></x-button>
        <x-button
          :type="'default'"
          :mini="true"
          :text="'最近半年'"
        ></x-button>
        <x-button
          :type="'default'"
          :mini="true"
          :text="'最近一年'"
        ></x-button>
      </div>


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
            <medical-insurance-type></medical-insurance-type>
            <set-type></set-type>
            <x-date :title="'开始日期'"></x-date>
            <x-date :title="'结束日期'"></x-date>
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

      <!--账单大类-->
      <div v-show="pageShow.bigBill">
        <line-chart :chart-data="chartData" :chart-title="chartTitle" :chart-axis="chartAxis"></line-chart>
        <pie-chart></pie-chart>
        <!--表格-->
        <x-table>
          <thead>
          <tr>
            <th colspan="2">分项费用</th>
            <th>时间</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>药费</td>
            <td>项目查询</td>
            <td>132131</td>
          </tr>
          <tr>
            <td>药费</td>
            <td>项目查询</td>
            <td>132131</td>
          </tr>
          </tbody>
        </x-table>
      </div>

      <!--账单小类-->
      <div v-show="pageShow.smallBill">
        <line-chart :id="'small-one'" :chart-data="chartData" :chart-title="chartTitle"
                    :chart-axis="chartAxis"></line-chart>
        <pie-chart :id="'small-two'"></pie-chart>
        <!--表格-->
        <x-table>
          <thead>
          <tr>
            <th colspan="2">分项费用</th>
            <th>时间</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>药费</td>
            <td>项目查询</td>
            <td>132131</td>
          </tr>
          <tr>
            <td>药费</td>
            <td>项目查询</td>
            <td>132131</td>
          </tr>
          </tbody>
        </x-table>
      </div>

      <!--费用构成表-->
      <div v-show="pageShow.billFrom">
        <h4>医保项目费用构成分析</h4>
        <h5>xxx项目</h5>
        <x-table>
          <thead>
          <tr>
            <th>费用项目</th>
            <th>总金额</th>
            <th>数量</th>
            <th>金额同比</th>
            <th>数量同比</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>CT</td>
            <td>94494</td>
            <td>3</td>
            <td>34%</td>
            <td>34%</td>
          </tr>
          </tbody>
        </x-table>
      </div>

    </div>
  </div>
</template>

<script>
  import vHead from "../common/vHead"
  import MedicalInsuranceType from "../common/MedicalInsuranceType"
  import setType from "../common/SetType"
  import xDate from "../common/vDate"
  import depart from "../common/Department"
  import LineChart from "../common/charts/LineChart"
  import PieChart from "../common/charts/PieChart"
  import {XButton, XTable} from 'vux'

  export default {
    name: "depart-pay-settlement",
    components: {
      vHead,
      MedicalInsuranceType,
      xDate,
      setType,
      depart,
      XButton,
      LineChart,
      PieChart,
      XTable
    },
    data() {
      return {
        pageShow: {
          bigBill: true,
          smallBill: false,
          billFrom: false
        },
        search: false,
        chartTitle: "测试",
        chartAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        chartData: [
          {
            name: '邮件营销',
            type: 'line',
            // stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            // stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            // stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            // stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            // stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ],
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
      test: function () {
        console.log(111)
      }
    }
  }
</script>

<style scoped>
  #DepartPaySettlement {
    height: 100%;
  }

  /*.contentBox {*/
  /*padding-bottom: 50px*/
  /*}*/

  .weui-tabbar {
    position: fixed;
  }

  .weui-tabbar {
    z-index: 10;
  }

</style>
