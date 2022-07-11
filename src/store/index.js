import { createStore } from 'vuex'
import carStore from './modules/toy-module.js'

// create a store instance
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    carStore,
  },
})

export default store
