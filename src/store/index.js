import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"

Vue.use(Vuex)

const store = new Vuex.Store({//store对象
  state: state,
  getters: getters,
  mutations: mutations,
  actions: {}
});
export default store

