import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1111,
  token: '',
  userId: '',
  userAvatar: ''
}


const mutations = {
  saveUserId(state, n) {
    state.userId = n
  },
  saveUserAvatar(state, n) {
    state.userAvatar = n
  },
  saveUserToken(state, n) {
    state.token = n
  }
}

export default new Vuex.Store({
  state,
  mutations
})

//  页面中引用方法  {{$store.state.count}}}

// 页面中修改state方法  this.$store.commit('saveUserId',n);
