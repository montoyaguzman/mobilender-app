import Vue from 'vue'
import Vuex from 'vuex'
import Services from '../services/index'

Vue.use(Vuex)

const service = new Services();

const store = new Vuex.Store({
    state: {
      username: null,
      auth: false,
      users: []
    },
    getters: {

    },
    mutations: {
      DO_LOGIN(state, username) {
        state.username = username;
        username ? state.auth = true : state.auth = false;
        localStorage.setItem('isLogged', 'true')
      },
      DO_LOGOUT(state) {
        state.username = null;
        state.auth = false;
        localStorage.setItem('isLogged', 'false')
      },
      SET_USER_LIST(state, users) {
        state.users = users;
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