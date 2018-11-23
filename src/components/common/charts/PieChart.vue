<template>
  <div class="pie">
    <div :id="id" class="chart"></div>
  </div>
</template>

<script>

  export default {
    name: "pie-chart",
    props: {
      id: {
        type: String,
        default: "pie-chart"
      },
      chartData: {
        type: Array,
        default: function () {
          return [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
      },
      chartAxis: {
        type: Array,
        default: function () {
          return []
        }
      },
      chartTitle: {
        type: String,
        default: "饼状图"
      }
    },
    data() {
      return {
        myChart: "",
        option: {
          title: {
            text: '某站点用户访问来源',
            // subtext: '纯属虚构',
            x: 'center',
            top:'10px'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            top:"10px"
            // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
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
  .pie {
    width: 100%;
    height: 300px;
  }

  .chart {
    width: 100%;
    height: 100%;
  }
</style>
