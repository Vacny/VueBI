<template>
  <div>
    <div class="contentBox">
      <v-head
        :is-list="false"
        :head-tit="'门诊、住院准实时指标'"
      ></v-head>

      <div>
        <bar-chart
          :id="'one'"
          :chart-title="'门诊准实时指标'"
          :chart-data="chartData"
          :chart-axis="chartAxis"
        ></bar-chart>

        <bar-chart
          :id="'two'"
          :chart-title="'住院准实时指标'"
          :chart-data="chartData"
          :chart-axis="chartAxis"
        ></bar-chart>
      </div>

    </div>
  </div>
</template>

<script>
  import vHead from "../common/vHead"
  import barChart from "../common/charts/BarChart"

  export default {
    name: "quasi-real-time-index",
    components: {
      vHead,
      barChart
    },
    data() {
      return {
        chartAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        chartData: [
          {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
