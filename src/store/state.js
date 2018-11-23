import chartType from "../static/js/config"

// import newData from "../static/js/echarts_dynamic_data"

const state = {
  load: false,
  isLock: false,
  token: "asdasdsad",
  userInfo: {
    id: "ttt"
  },
  departSelect: {
    depart: {},
    startDate: {},
    endDate: {}
  },
  departPay: {
    settlement: "",
    entity: "",
    doctor: ""
  },
  testData: [0, 1, 2, 3, 4]
};
for (let key in chartType) {
  state[key] = chartType[key]
}
export default state
