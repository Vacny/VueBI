<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'医技检查分析'"
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
        <pie-chart></pie-chart>
        <bar-chart></bar-chart>
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
      <tabbar>
        <tabbar-item :selected="true">
          <span slot="label">检查业务量分析</span>
        </tabbar-item>
        <tabbar-item>
          <span slot="label">检查收入趋势</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
</template>

<script>
  import vHead from "../../common/vHead"
  import xDate from "../../common/vDate"
  import PieChart from "../../common/charts/PieChart"
  import BarChart from "../../common/charts/BarChart"
  import {XButton, Tabbar, TabbarItem, XTable, Divider} from 'vux'

  export default {
    name: "medical-technique-examination",
    components: {
      vHead,
      xDate,
      XButton,
      BarChart,
      PieChart,
      Tabbar,
      TabbarItem,
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

  .contentBox {
    padding-bottom: 50px
  }
</style>
