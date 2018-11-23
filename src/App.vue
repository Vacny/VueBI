<template>
  <div id="app">
    <router-view/>

    <div v-transfer-dom>
      <loading :show="load"></loading>
    </div>
    <!--<div style="margin-top: 60px;" v-text="userInfo"></div>-->
  </div>

</template>

<script>
  import {mapMutations, mapGetters, mapState} from "vuex"
  import {TransferDomDirective as TransferDom} from "vux"

  export default {
    name: 'App',
    directives: {
      TransferDom
    },
    data() {
      return {
        info: {
          name: "text",
          value: "111"
        }
      }
    },
    computed: {
      ...mapGetters(['userInfo']),
      ...mapState(['load'])
    },
    methods: {
      ...mapMutations([
        'setUserInfo',
        'setDepartPaySettlement',
        "setLoad"
      ]),
      postM: function () {
        this.$axios({
          method: "POST",
          url: "dologin",
          data: {
            userName: "1",
            password: "123456"
          },
          transformRequest: function (data) {
            let ret = '';
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          },
          headers: {
            'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
          }
        }).then(function (res) {
          // console.log(res)
        })
      }
    },
    created: function () {
      this.postM()
    }
  }

</script>


<style lang="less">
  @import '~vux/src/styles/reset.less';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 46px;*/
    overflow: hidden;
  }

  html, body, #app {
    height: 100%;
  }

  p, .weui-label {
    text-align: left;
  }

  .contentBox {
    margin-top: 46px;
    overflow-y: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: auto;
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
