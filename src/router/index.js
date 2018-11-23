import Vue from 'vue'
import Router from 'vue-router'
import chartsList from '@/components/chartsList'
import previewData from '@/components/PreviewData'
// //医保
// import medicalInsurance from "@/components/medicalInsurance/medicalInsurance"
// import WholeHospital from "@/components/medicalInsurance/WholeHospital"
// import Depart from "@/components/medicalInsurance/Depart"
// import DepartPaySettlement from "@/components/medicalInsurance/DepartPaySettlement"
// import DepartPayEntity from "@/components/medicalInsurance/DepartPayEntity"
// import DepartPayDoctor from "@/components/medicalInsurance/DepartPayDoctor"
//
//
// //医院基本运营
// import BasicOperation from "@/components/BasicOperation/BasicOperation"
// import QuasiRealTimeIndex from "@/components/BasicOperation/QuasiRealTimeIndex"
// import ComprehensiveAnalysis from "@/components/BasicOperation/ComprehensiveAnalysis"
//
// import OutpatientAnalysis from "@/components/BasicOperation/Outpatient/OutpatientAnalysis"
// import OutpatientComposition from "@/components/BasicOperation/Outpatient/OutpatientComposition"
// import OutpatientRelease from "@/components/BasicOperation/Outpatient/OutpatientRelease"
// import OutpatientReleaseByDepart from "@/components/BasicOperation/Outpatient/OutpatientReleaseByDepart"
// import OutpatientRevenueTrends from "@/components/BasicOperation/Outpatient/OutpatientRevenueTrends"
// import OutpatientIncomeStatement from "@/components/BasicOperation/Outpatient/OutpatientIncomeStatement"
// import OutpatientVisitComprehensiveAnalysis from "@/components/BasicOperation/Outpatient/OutpatientVisitComprehensiveAnalysis"
// import OutpatientMedicalTreatmentDetail from "@/components/BasicOperation/Outpatient/OutpatientMedicalTreatmentDetail"
// import OutpatientMedicalTreatmentAnalysis from "@/components/BasicOperation/Outpatient/OutpatientMedicalTreatmentAnalysis"
//
// //科室KPI分析
// import Departments from "@/components/Department/Departments"
// import Year from "@/components/Department/Year"
//
//
// //用药分析
// import Drugs from "@/components/Drugs/Drugs"
// import KPIAnalysis from "@/components/Drugs/KPIAnalysis"
// import KPIQuota from "@/components/Drugs/KPIQuota"
// import KPIQuotaTrend from "@/components/Drugs/KPIQuotaTrend"
// import KPIQuotaTrendByDepart from "@/components/Drugs/KPIQuotaTrendByDepart"
// import DrugIndexByDepart from "@/components/Drugs/DrugIndexByDepart"
// import DrugIndexByDepartTable from "@/components/Drugs/DrugIndexByDepartTable"
// import DrugIndexByDepartChart from "@/components/Drugs/DrugIndexByDepartChart"
// import DrugIndexByDoctor from "@/components/Drugs/DrugIndexByDoctor"
// import LargeSumPrescription from "@/components/Drugs/LargeSumPrescription"
// import OutpatientPrescriptionDrugAmountMonitoring from "@/components/Drugs/OutpatientPrescriptionDrugAmountMonitoring"
// import OutpatientPrescriptionDrugAmountMonitoringByDepart from "@/components/Drugs/OutpatientPrescriptionDrugAmountMonitoringByDepart"
// import OutpatientPrescriptionDrugAmountMonitoringByDoctor from "@/components/Drugs/OutpatientPrescriptionDrugAmountMonitoringByDoctor"
// import OutpatientPrescriptionDrugAmountMonitoringByEntity from "@/components/Drugs/OutpatientPrescriptionDrugAmountMonitoringByEntity"
// import OutpatientPrescriptionDrugSearch from "@/components/Drugs/OutpatientPrescriptionDrugSearch"
import store from "../store"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'chartsList',//列表主页
      component: chartsList
    },
    {
      path: "/previewData/:param",
      name: "previewData",
      component: previewData
    }
    //医保
    // {
    //   path: "/medicalInsurance",
    //   name: "medicalInsurance",
    //   component: medicalInsurance,
    //   children: [
    //     {//全院出院分析
    //       path: "WholeHospital",
    //       name: "WholeHospital",
    //       component: WholeHospital
    //     },
    //     { //  科室出院分析
    //       path: "Depart",
    //       name: "Depart",
    //       component: Depart
    //     },
    //     {   //费用构成（基于结算 ）
    //       path: "DepartPaySettlement",
    //       name: "DepartPaySettlement",
    //       component: DepartPaySettlement
    //     },
    //     {   //费用构成（基于病种）
    //       path: "DepartPayEntity",
    //       name: "DepartPayEntity",
    //       component: DepartPayEntity
    //     },
    //     {   //费用构成（基于医生）
    //       path: "DepartPayDoctor",
    //       name: "DepartPayDoctor",
    //       component: DepartPayDoctor
    //     }
    //   ]
    // },
    // //医院基本运营
    // {
    //   path: "/BasicOperation",
    //   name: "BasicOperation",
    //   component: BasicOperation,
    //   children: [
    //     {//门诊、住院准实时指标
    //       path: "QuasiRealTimeIndex",
    //       name: "QuasiRealTimeIndex",
    //       component: QuasiRealTimeIndex
    //     },
    //     {//医院运营综合分析
    //       path: "ComprehensiveAnalysis",
    //       name: "ComprehensiveAnalysis",
    //       component: ComprehensiveAnalysis
    //     },
    //     {//门诊分析
    //       path: "OutpatientAnalysis",
    //       name: "OutpatientAnalysis",
    //       component: OutpatientAnalysis
    //     },
    //     {//门诊病人构成
    //       path: "OutpatientComposition",
    //       name: "OutpatientComposition",
    //       component: OutpatientComposition
    //     },
    //     {//门诊脱单分析
    //       path: "OutpatientRelease",
    //       name: "OutpatientRelease",
    //       component: OutpatientRelease
    //     },
    //     {//门诊脱单分析科室
    //       path: "OutpatientReleaseByDepart",
    //       name: "OutpatientReleaseByDepart",
    //       component: OutpatientReleaseByDepart
    //     },
    //     {//门诊收入趋势
    //       path: "OutpatientRevenueTrends",
    //       name: "OutpatientRevenueTrends",
    //       component: OutpatientRevenueTrends
    //     },
    //     {//门诊收入报表,
    //       path: "OutpatientIncomeStatement",
    //       name: "OutpatientIncomeStatement",
    //       component: OutpatientIncomeStatement
    //     },
    //     {//门急诊就诊综合分析,(科室)
    //       path: "OutpatientVisitComprehensiveAnalysis",
    //       name: "OutpatientVisitComprehensiveAnalysis",
    //       component: OutpatientVisitComprehensiveAnalysis
    //     },
    //     {//门急诊就诊量分析
    //       path: "OutpatientMedicalTreatmentAnalysis",
    //       name: "OutpatientMedicalTreatmentAnalysis",
    //       component: OutpatientMedicalTreatmentAnalysis
    //     },
    //     {//门急诊就诊量分析详情,
    //       path: "OutpatientMedicalTreatmentDetail",
    //       name: "OutpatientMedicalTreatmentDetail",
    //       component: OutpatientMedicalTreatmentDetail
    //     }
    //   ]
    // },
    // //科室分析
    // {
    //   path: "/Departments",
    //   name: "Departments",
    //   component: Departments,
    //   children: [
    //     {
    //       path: "year",
    //       name: "year",
    //       component: Year
    //     },
    //     {
    //       path: "quarter",
    //       name: "quarter"
    //     },
    //     {
    //       path: "month",
    //       name: "month"
    //     }
    //   ]
    // },
    // //用药分析
    // {
    //   path: "/Drugs",
    //   name: "Drugs",
    //   component: Drugs,
    //   children: [
    //     {//阳光用药KPI分析 全院
    //       path: "KPIAnalysis",
    //       name: "KPIAnalysis",
    //       component: KPIAnalysis
    //     },
    //     {//阳光用药KPI 指标图表
    //       path: "KPIQuota",
    //       name: "KPIQuota",
    //       component: KPIQuota
    //     },
    //     {//阳光用药KPI 指标趋势  大科
    //       path: "KPIQuotaTrend",
    //       name: "KPIQuotaTrend",
    //       component: KPIQuotaTrend
    //     },
    //     {//阳光用药KPI 指标趋势 科室
    //       path: "KPIQuotaTrendByDepart",
    //       name: "KPIQuotaTrendByDepart",
    //       component: KPIQuotaTrendByDepart
    //     },
    //     {//药品指标分析 科室
    //       path: "DrugIndexByDepart",
    //       name: "DrugIndexByDepart",
    //       component: DrugIndexByDepart,
    //       redirect: "DrugIndexByDepart/Table",
    //       children: [
    //         {
    //           path: "Table",
    //           name: "DrugIndexByDepartTable",
    //           component: DrugIndexByDepartTable
    //         },
    //         {
    //           path: "Chart",
    //           name: "DrugIndexByDepartChart",
    //           component: DrugIndexByDepartChart
    //         }
    //       ]
    //     },
    //     {//药品指标分析 医生
    //       path: "DrugIndexByDoctor",
    //       name: "DrugIndexByDoctor",
    //       component: DrugIndexByDoctor
    //     },
    //     {//大金额处方排行
    //       path: "LargeSumPrescription",
    //       name: "LargeSumPrescription",
    //       component: LargeSumPrescription
    //     },
    //     {//门诊处方金额监控
    //       path: "OutpatientPrescriptionDrugAmountMonitoring",
    //       name: "OutpatientPrescriptionDrugAmountMonitoring",
    //       component: OutpatientPrescriptionDrugAmountMonitoring
    //     },
    //     {//门诊处方金额监控  科室
    //       path: "OutpatientPrescriptionDrugAmountMonitoringByDepart",
    //       name: "OutpatientPrescriptionDrugAmountMonitoringByDepart",
    //       component: OutpatientPrescriptionDrugAmountMonitoringByDepart
    //     },
    //     {//门诊处方金额监控  医生
    //       path: "OutpatientPrescriptionDrugAmountMonitoringByDoctor",
    //       name: "OutpatientPrescriptionDrugAmountMonitoringByDoctor",
    //       component: OutpatientPrescriptionDrugAmountMonitoringByDoctor
    //     },
    //     {//门诊处方金额监控  病种
    //       path: "OutpatientPrescriptionDrugAmountMonitoringByEntity",
    //       name: "OutpatientPrescriptionDrugAmountMonitoringByEntity",
    //       component: OutpatientPrescriptionDrugAmountMonitoringByEntity
    //     },
    //     {//门诊处方查询
    //       path: "OutpatientPrescriptionDrugSearch",
    //       name: "OutpatientPrescriptionDrugSearch",
    //       component: OutpatientPrescriptionDrugSearch
    //     },
    //   ]
    // },
    // //测试图表
    // {
    //   path: '/lineChart',
    //   name: 'lineChart',
    //   component: lineChart
    // },
    // {
    //   path: '/barChart',
    //   name: 'barChart',
    //   component: barChart
    // },
    // {
    //   path: '/pieChart',
    //   name: 'pieChart',
    //   component: pieChart
    // }
  ]
});
router.beforeEach((to, from, next) => {
  store.commit("setLoad",true);
  next();
});

export default router
