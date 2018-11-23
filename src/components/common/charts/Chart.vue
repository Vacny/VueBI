<template>
  <div class="bar">
    <!--<v-head :is-list="false" :head-tit="'柱状图'"></v-head>-->
    <div :id="id" class="chart"></div>
  </div>
</template>

<script>
  export default {
    name: "chart",
    props: {
      id: {
        type: String,
        default: function () {
          var date = new Date();
          return date.getTime().toString() + Math.random()
        }
      },
      option: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data() {
      return {
        myChart: ""
      }
    },
    methods: {
      chartTest: function (params) {
        console.log(params);
      }
    },
    mounted() {
      const _this = this;
      this.myChart = this.$echarts.init(document.getElementById(this.id));
      this.myChart.setOption(this.option);
    },
    watch: {
      option: {
        deep: true,
        handler: function (val, oldVal) {
          this.option = val;
          this.myChart.setOption(this.option, true, false);//重绘图表，option对象  是否不合并对象   是否不立即刷新
        }
      }
    }
  }
</script>

<style scoped>

  .bar, .chart {
    width: 100%;
    height: 100%;
  }
</style>
