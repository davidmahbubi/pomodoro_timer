import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    time: 20,
    session: 1,
    timeLimit: 20,
    sessionLimit: 10,
    interval: 10
  },

  mutations: {

    changeData(state, {timeLimit, session, interval}) {
      state.timeLimit = timeLimit,
      state.time = timeLimit,
      state.sessionLimit = session,
      state.interval = interval
    },

    decreaseTime(state) {
      state.time--;
    },

    increaseSession(state) {
      state.session++;
    }

  },
  actions: {
  },
  modules: {
  }
})
