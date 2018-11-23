<template>
  <div class="line">
    <!--<v-head :is-list="false" :head-tit="'折线图'"></v-head>-->
    <div :id="id" class="chart"></div>
  </div>
</template>

<script>

  export default {
    name: "line-chart",
    props: {
      id: {
        type: String,
        default: "line-chart"
      },
      chartData: {
        type: Array,
        default: function () {
          return [
            {
              name: '邮件营销',
              type: 'line',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        }
      },
      chartAxis: {
        type: Array,
        default: function () {
          return ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      },
      chartTitle: {
        type: String,
        default: "折线图"
      }
    },
    data() {
      return {
        myChart: null,
        option: {
          title: {
            text: '全院人均基本医疗费趋势',
            x: 'center',
            top:'10px'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
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
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
          },
          yAxis: [
            {
              type: 'value'
            }
          ],
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
          this.option.xAxis.data = this.chartAxis;
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
