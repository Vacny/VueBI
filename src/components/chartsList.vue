<template>
  <div class="charts">
    <div class="contentBox">
      <v-head></v-head>

      <divider>动态图表demo</divider>
      <grid :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item label="单个图表-" link="/previewData/name=演示--图表定义&id=948&isDataSet=1&isDrillLevel=0">
          <img slot="icon" src="../assets/logo.png">
        </grid-item>
        <grid-item label="多个图表-" link="/previewData/name=text111&id=287&isDataSet=0&isDrillLevel=0">
          <img slot="icon" src="../assets/logo.png">
        </grid-item>
        <grid-item label="卡片报表-" link="/previewData/name=演示--卡片报表&id=986&isDataSet=1&isDrillLevel=0">
          <img slot="icon" src="../assets/logo.png">
        </grid-item>
        <grid-item label="单项报表-" link="/previewData/name=演示--单项报表&id=987&isDataSet=1&isDrillLevel=0">
          <img slot="icon" src="../assets/logo.png">
        </grid-item>
        <grid-item label="带参数-" link="/previewData/name=演示--带参数图表&id=949&isDataSet=1&isDrillLevel=0">
          <img slot="icon" src="../assets/logo.png">
        </grid-item>
        <grid-item label="门诊收费病人-" link="/previewData/name=门诊收费病人明细&id=257&isDataSet=0&isDrillLevel=0">
          <img slot="icon" src="../assets/logo.png">
        </grid-item>

      </grid>


      <!--医保-->
      <!--<divider>医保费用分析</divider>-->
      <!--<grid :cols="2" :show-lr-borders="false" :show-vertical-dividers="false">-->
      <!--<grid-item label="全院出院分析" link="/medicalInsurance/WholeHospital">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="科室出院分析" link="/medicalInsurance/Depart">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="费用构成基于结算"  link="/medicalInsurance/DepartPaySettlement">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="费用构成基于病种"  link="/medicalInsurance/DepartPayEntity">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="费用构成基于医生"  link="/medicalInsurance/DepartPayDoctor">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="大额病人费用">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="在院病人费用">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--</grid>-->

      <!--&lt;!&ndash;医院基本运营&ndash;&gt;-->
      <!--<divider>医院基本运营</divider>-->
      <!--<grid :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">-->
      <!--<grid-item label="准实时指标" link="/BasicOperation/QuasiRealTimeIndex">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="医院运营分析" link="/BasicOperation/ComprehensiveAnalysis">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="门诊分析" link="/BasicOperation/OutpatientAnalysis">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="住院分析">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="医技检查分析">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="医技检验分析">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="门诊工作量分析">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="医技收入分析">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="住院综合情况">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="科室手术人数">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--</grid>-->

      <!--&lt;!&ndash;科室&ndash;&gt;-->
      <!--<divider>科室分析</divider>-->
      <!--<grid :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">-->
      <!--<grid-item label="科室年KPI" link="/Departments/year">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="科室季KPI">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="科室月KPI">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--</grid>-->

      <!--&lt;!&ndash;用药&ndash;&gt;-->
      <!--<divider>阳光用药分析</divider>-->
      <!--<grid :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">-->
      <!--<grid-item label="阳光用药KPI" link="/Drugs/KPIAnalysis">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="科室药品指标" link="/Drugs/DrugIndexByDepart">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="医生药品指标" link="/Drugs/DrugIndexByDoctor">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="大额处方">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="门诊处方金额监控" link="/Drugs/OutpatientPrescriptionDrugAmountMonitoring">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="门诊处方查询">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="门诊抗菌药监控">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="门诊单品种用药">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="住院药品分析">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--<grid-item label="临床用药监控">-->
      <!--<img slot="icon" src="../assets/logo.png">-->
      <!--</grid-item>-->
      <!--</grid>-->
    </div>

  </div>
</template>

<script>
  import vHead from "./common/vHead"
  import {Grid, GridItem, Divider} from 'vux'
  import xDate from "./common/vDate"
  import {mapMutations} from "vuex"

  export default {
    name: "charts-list",
    data() {
      return {}
    },
    components: {
      vHead,
      Grid,
      GridItem,
      Divider,
      xDate
    },
    methods: {
      ...mapMutations([
        "setLoad"
      ]),
    },
    mounted: function () {
      let _this = this;
      this.$nextTick(function () {
        _this.setLoad(false);
      })
    },
    computed: {}
  }
</script>

<style scoped>
  .weui-grids:before {
    border: none
  }

  .weui-grid:after {
    border: none
  }


</style>
