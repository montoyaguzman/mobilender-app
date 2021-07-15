import Vue from 'vue'
import Vuex from 'vuex'
import Services from '../services/index'

Vue.use(Vuex)

const service = new Services();

const store = new Vuex.Store({
    state: {
      username: null,
      auth: true,
      users: []
    },
    getters: {

    },
    mutations: {
      DO_LOGIN(state, username) {
        state.auth = false;
        state.username = username;
      },
      DO_LOGOUT(state) {
        state.auth = false;
        state.username = null;
      },
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
      },
      doLogin({ commit }, username) {
        commit("DO_LOGIN", username);
      },
      doLogout({ commit }) {
        commit("DO_LOGOUT");
      }
    }
})

export default store;