<template>
  <div class="bar">
    <!--<v-head :is-list="false" :head-tit="'柱状图'"></v-head>-->
    <div :id="id" class="chart"></div>
  </div>
</template>

<script>
  export default {
    name: "bar-chart",
    props: {
      id: {
        type: String,
        default: "bar-chart"
      },
      chartData: {
        type: Array,
        default: function () {
          return [
            {
              name: '2012',
              type: 'bar',
              data: [3200, 332, 301, 334, 3900]
            },
            {
              name: '2013',
              type: 'bar',
              data: [220, 1802, 191, 234, 290]
            },
            {
              name: '2014',
              type: 'bar',
              data: [150, 232, 2001, 154, 190]
            },
            {
              name: '2015',
              type: 'bar',
              data: [98, 77, 1001, 99, 400]
            }
          ]
        }
      },
      chartAxis: {
        type: Array,
        default: function () {
          return ['x费', 'y费', 'z费', 'n费', 'm费']
        }
      },
      chartTitle: {
        type: String,
        default: "柱状图"
      }
    },
    data() {
      return {
        myChart: "",
        option: {
          title: {
            text: '',
            top:'10px',
            x: 'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            orient: "vertical",
            right: "0",
            top: "center"
          },
          grid: {
            left: '3%',
            right: '100px',
            bottom: '3%',
            containLabel: true
          },
          yAxis: [
            {
              type: 'value'
            }
          ],
          xAxis: {
            type: 'category',
            data: []
          },
          series: []
        }

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
      this.option.series = this.chartData;
      this.option.title.text = this.chartTitle;
      this.option.xAxis.data = this.chartAxis;
      this.myChart.setOption(this.option);
      this.myChart.on('click', function (params) {
        _this.chartTest(params)
      });
    },
    watch: {
      chartData: {
        deep: true,
        handler: function (val, oldVal) {
          this.option.series = val;
          this.option.title.text = this.chartTitle;
          this.option.xAxis.data = this.chartAxis;
          this.myChart.setOption(this.option,true,false);//重绘图表，option对象  是否不合并对象   是否不立即刷新
        }
      }
    }
  }
</script>

<style scoped>
  .bar {
    width: 100%;
    height: 300px;
  }

  .chart {
    width: 100%;
    height: 100%;
  }
</style>
