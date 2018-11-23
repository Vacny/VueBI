// import state from "./state";
// import getters from "./getters";

const mutations={
  setUserInfo(state, user) {
    state.userInfo = { ...state.userInfo, user }
  },
  setDepartPaySettlement(state, settlement){
    state.departPay.settlement = settlement
  },
  setDepartPayEntity(state, entity){
    state.departPay.entity = entity
  },
  setDepartPayDoctor(state, doctor){
    state.departPay.doctor = doctor
  },
  setLoad(state, bool){
    state.load = bool
  }
};
export default mutations
