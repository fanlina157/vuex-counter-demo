import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    showNum: (state) => {
      return '这是getters 里的count:' + state.count
    }
  },
  mutations: {
    add (state) {
      state.count++
    },
    // 传递参数
    addN (state, step) {
      state.count += step
    },
    desc (state) {
      state.count--
    },
    descN (state, step) {
      state.count -= step
    }
  },
  actions: {
    addAsync (context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    addAsyncN (context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },
    descAsync (context) {
      setTimeout(() => {
        context.commit('desc')
      }, 1000)
    },
    descAsyncN (context, step) {
      setTimeout(() => {
        context.commit('descN', step)
      }, 1000)
    }
  },
  modules: {
  }
})
