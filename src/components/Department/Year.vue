<template>
  <div id="Year">
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'科室目标管理KPI（年）'"
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
            <x-date :title="'年份'" :format="'YYYY'"></x-date>
            <trend></trend>
            <depart></depart>
            <divider>运行状况</divider>
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
      </div>
      <div>
        <x-table></x-table>
      </div>

    </div>
  </div>
</template>

<script>
  import vHead from "../common/vHead"
  import xDate from "../common/vDate"
  import trend from "../common/Trend"
  import depart from "../common/Department"
  import LineChart from "../common/charts/LineChart"
  import {XButton, XTable, Divider} from 'vux'

  export default {
    name: "year",
    components: {
      vHead,
      xDate,
      trend,
      depart,
      XButton,
      LineChart,
      XTable,
      Divider
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
    }
  }
</script>

<style scoped>
  #Year {
    height: 100%;
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
