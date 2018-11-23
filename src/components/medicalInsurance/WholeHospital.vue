<template>
  <div id="wholeHos">
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'全院医保出院分析'"
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
            <MedicaInsuranceType :ret-medical="getMedical"></MedicaInsuranceType>
            <set-type :ret-type="getType"></set-type>
            <x-date :title="'开始日期'" :ret-date="getStartDate"></x-date>
            <x-date :title="'结束日期'" :ret-date="getEndDate"></x-date>
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

      <div style="margin-top:10px">
        <line-chart :id="'one'" :chart-data="chartData" :chart-title="chartTitle" :chart-axis="chartAxis"></line-chart>
        <line-chart :id="'two'" :chart-data="chartData" :chart-title="chartTitle" :chart-axis="chartAxis"></line-chart>
      </div>

      <div class="table" style="padding-top: 15px;">
        <div v-if="table.two">
          <h4>XXX表</h4>
          <x-table :cell-bordered="false" style="background-color:#fff;">
            <thead>
            <tr style="background-color: #F7F7F7">
              <th>科室</th>
              <th>费用</th>
              <th>病人明细</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(value, key) in tableData">
              <td><span @click="alertData(value,$event)">{{value.departName}}</span></td>
              <td><span>{{value.money}}</span></td>
              <td><span>{{value.detail}}</span></td>
            </tr>
            </tbody>
          </x-table>
        </div>
      </div>
      <tabbar>
        <tabbar-item :selected="true" @on-item-click="changeTab('one')">
          <span slot="label">结算类型超定额</span>
        </tabbar-item>
        <tabbar-item @on-item-click="changeTab('two')">
          <span slot="label">科室超定额</span>
        </tabbar-item>
        <tabbar-item @on-item-click="changeTab('three')">
          <span slot="label">医生超定额</span>
        </tabbar-item>
      </tabbar>
    </div>

  </div>
</template>

<script>
  import vHead from "../common/vHead"
  import MedicaInsuranceType from "../common/MedicalInsuranceType"
  import setType from "../common/SetType"
  import xDate from "../common/vDate"
  import LineChart from "../common/charts/LineChart"
  import {XButton, Tabbar, TabbarItem, XTable} from 'vux'

  export default {
    name: "whole-hospital",
    components: {
      vHead,
      MedicaInsuranceType,
      xDate,
      setType,
      XButton,
      LineChart,
      Tabbar,
      TabbarItem,
      XTable
    },
    data() {
      return {
        startDate: "",
        endDate: "",
        depart: "",
        medical: "",
        type: "",
        search: false,
        table: {
          one: true,
          two: false,
          three: false
        },
        tableData: [
          {
            departName: "科室1",
            money: "5681",
            detail: "病人明细"
          },
          {
            departName: "科室2",
            money: "5682341",
            detail: "病人明细"
          }
        ],
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
        list: [
          {
            label: '医保类型',
            value: '3.29'
          }, {
            label: '结算类型',
            value: '1.04'
          }, {
            label: '开始日期',
            value: '8.00'
          }, {
            label: '截止日期',
            value: '8.00'
          }
        ]
      }
    },
    computed: {
    },
    methods: {
      userQuery: function () {
        this.$axios({
          method: "POST",
          url: '/bitest/sys-account/query',
          data: {
            name: "test1"
          }
        }).then(function (res) {
          console.log("success")
        })
      },
      alertData: function (data, $event) {
        console.log(data);
        this.$router.push("/medicalInsurance/Depart")
      },
      test: function () {   //echarts 重新载入数据
        this.chartData = [
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
          }
        ];
        this.chartTitle = "修改测试"
      },
      openSearch: function () {
        this.search = true
      },
      closeSearch: function () {
        this.search = false
      },
      searchData: function () {
        this.userQuery();
        this.closeSearch()
      },
      changeTab: function (str) {
        for (let key in this.table) {
          this.table[key] = key === str ? true : false;
        }
        this.test();
      },
      getStartDate: function (value) {
        this.startDate = value;
        console.log("start:" + this.startDate)
      },
      getEndDate: function (value) {
        this.endDate = value;
        console.log("end:" + this.endDate)
      },
      getMedical: function (value) {
        this.medical = value;
        console.log("medical:" + this.medical)
      },
      getType: function (value) {
        this.type = value;
        console.log("type:" + this.type)
      },
      getDepart: function (value) {
        this.depart = value;
        console.log("depart:" + this.depart)
      }
    }
  }
</script>

<style scoped>
  #wholeHos {
    height: 100%;
  }

  .contentBox {
    padding-bottom: 50px
  }

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
