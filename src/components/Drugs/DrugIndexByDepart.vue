<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'药品指标分析(科室)'"
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
        <grid :cols="2" :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item label="报表" link="/Drugs/DrugIndexByDepart/Table"></grid-item>
          <grid-item label="图表" link="/Drugs/DrugIndexByDepart/Chart"></grid-item>
        </grid>
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
  import vHead from "../common/vHead"
  import xDate from "../common/vDate"
  import depart from "../common/Department"
  import {Grid, GridItem, XButton} from "vux"

  export default {
    name: "drug-index-by-depart",
    components: {
      vHead,
      xDate,
      depart,
      Grid,
      GridItem,
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
