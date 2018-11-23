<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'门诊处方金额监控'"
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
            <v-date :title="'开始时间'" :format="'YYYY-MM'"></v-date>
            <v-date :title="'结束时间'" :format="'YYYY-MM'"></v-date>
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
        <bar-chart :id="'one'"></bar-chart>
        <bar-chart :id="'two'"></bar-chart>
        <bar-chart :id="'three'"></bar-chart>
      </div>

    </div>
  </div>
</template>

<script>
  import vHead from "../common/vHead"
  import vDate from "../common/vDate"
  import barChart from "../BarChart"
  import {XButton} from "vux"

  export default {
    name: "outpatient-prescription-drug-amount-monitoring",
    components: {
      vHead,
      vDate,
      barChart,
      XButton
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

</style>
