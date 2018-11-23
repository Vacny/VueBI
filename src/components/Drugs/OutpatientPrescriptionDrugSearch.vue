<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'门诊处方汇总'"
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
            <entity></entity>
            <depart></depart>
            <doctor></doctor>
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
        <x-table></x-table>
      </div>

    </div>
  </div>
</template>

<script>
  import vHead from "../common/vHead"
  import xDate from "../common/vDate"
  import entity from "../common/Entity"
  import depart from "../common/Department"
  import doctor from "../common/Doctor"
  import {XTable, XButton} from "vux"

  export default {
    name: "outpatient-prescription-drug-search",
    components: {
      vHead,
      xDate,
      depart,
      entity,
      doctor,
      XTable,
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
