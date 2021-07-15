import Vue from 'vue'
import Vuex from 'vuex'
import Services from '../services/index'

Vue.use(Vuex)

const service = new Services();

const store = new Vuex.Store({
    state: {
      users: []
    },
    getters: {

    },
    mutations: {
      SET_USER_LIST(state, users) {
        state.users = users
      }
    },
    actions: {
      getUsers({ commit }) {    
        service.getUsers('2').then((response) => {
          const users = response.data.data
          commit('SET_USER_LIST', users)
        })
      }
    }
})

export default store;