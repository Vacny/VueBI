<template>
  <div class="line">
    <!--<v-head :is-list="false" :head-tit="'折线图'"></v-head>-->
    <div :id="id" class="chart"></div>
  </div>
</template>

<script>

  export default {
    name: "gauge-chart",
    props: {
      id: {
        type: String,
        default: "gauge-chart"
      },
      chartData: {
        type: Array,
        default: function () {
          return [
            {
              name: '数据1',
              min: 0,
              max: 150,
              radius: '80%',
              type: 'gauge',
              axisLine: {
                lineStyle: {
                  width: 20
                }
              },
              axisLabel: {
                formatter: function (v) {
                  return v + "%"
                }
              },
              title: {
                show: false
              },
              detail: {
                show: false
              },
              itemStyle: {
                color: '#0f0'
              },
              data: [{value: 90, name: '数据1'}]
            },
            {
              name: '数据2',
              min: 0,
              max: 150,
              radius: '80%',
              type: 'gauge',
              axisLine: {
                lineStyle: {
                  width: 20
                }
              },
              axisLabel: {
                formatter: function (v) {
                  return v + "%"
                }
              },
              itemStyle: {
                color: '#00f'
              },
              title: {
                show: false
              },
              detail: {
                show: false
              },
              data: [{value: 140, name: '数据2'}]
            }
          ]
        }
      },
      // chartAxis: {
      //   type: Array,
      //   default: function () {
      //     return ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      //   }
      // },
      chartTitle: {
        type: String,
        default: "仪表盘"
      }
    },
    data() {
      return {
        myChart: null,
        option: {
          title: {
            text: '测试',
            x: 'center'
            // y: '80%'
          },
          tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
          },
          legend: {
            show: true,
            y:'80%'
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
      // this.option.xAxis.data = this.chartAxis;
      this.myChart.setOption(this.option);
      this.myChart.on('click', function (params) {//图表点击交互
        _this.chartTest(params)
      });
    },
    watch: {//监听数据  图表重绘
      chartData: {
        deep: true,
        handler: function (val, oldVal) {
          this.option.series = val;
          this.option.title.text = this.chartTitle;
          // this.option.xAxis.data = this.chartAxis;
          // this.myChart.clear();
          this.myChart.setOption(this.option,true,false);//重绘图表，option对象  是否不合并对象   是否不立即刷新
        }
      }
    }
  }
</script>

<style scoped>
  .line {
    width: 100vw;
    height: 80vw;
  }

  .chart {
    width: 100%;
    height: 100%;
  }
</style>
