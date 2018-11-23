<template>
  <div class="head">
    <x-header
      :left-options="{showBack: !isList,preventGoBack:isPrevent}"
      @on-click-back="leftOptionFun"
    >{{headTit}}<a slot="right" v-if="search" @click="rightOptionFun">查询</a></x-header>
    <!--<span v-show="!isList" class="back"><router-link to="/">返回</router-link></span>-->
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  export default {
    name: "v-head",
    components: {
      XHeader
    },
    data() {
      return {}
    },
    props: {
      isPrevent:{
        type: Boolean,
        default: false
      },
      isList: {
        type: Boolean,
        default: true
      },
      headTit: {
        type: String,
        default: "欢迎使用图表"
      },
      search: {
        type: Boolean,
        default: false
      },
      rightOptionFun:{
        type: Function,
        default: function () {
          return function () {
            console.log(222)
          }
        }
      },
      leftOptionFun:{
        type: Function,
        default: function () {
          return function () {
            console.log(222)
          }
        }
      }
    }
  }
</script>

<style scoped>
  .head {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 46px;
    text-align: center;
    line-height: 46px;
    background: #35495e;
    color: #fff;
    z-index: 10;
  }
  .back{
    position: absolute;
    width: 100px;
    top:0;
    left: 0;
    height: 46px;
    line-height: 46px;
  }
  .back a{
    color: #fff
  }
  .title{

  }
</style>
