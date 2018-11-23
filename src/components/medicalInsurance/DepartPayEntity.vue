<template>
  <div id="DepartPayEntity">
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'医保费用分析基于病种'"
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

      <div>
        <line-chart :id="'one'" :chart-data="chartData" :chart-title="chartTitle" :chart-axis="chartAxis"></line-chart>
        <pie-chart :id="'two'" ></pie-chart>
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
            <MedicaInsuranceType></MedicaInsuranceType>
            <set-type></set-type>
            <entity></entity>
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
    </div>
  </div>
</template>

<script>
  import vHead from "../common/vHead"
  import MedicaInsuranceType from "../common/MedicalInsuranceType"
  import setType from "../common/SetType"
  import entity from "../common/Entity"
  import xDate from "../common/vDate"
  import depart from "../common/Department"
  import LineChart from "../common/charts/LineChart"
  import PieChart from "../common/charts/PieChart"
  import {XButton, Tabbar, TabbarItem, XTable} from 'vux'

  export default {
    name: "depart-pay-entity",
    components: {
      vHead,
      MedicaInsuranceType,
      xDate,
      setType,
      depart,
      entity,
      XButton,
      LineChart,
      PieChart,
      Tabbar,
      TabbarItem,
      XTable
    },
    data() {
      return {
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
