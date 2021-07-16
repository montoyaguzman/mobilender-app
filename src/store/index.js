import Vue from 'vue'
import Vuex from 'vuex'
import Services from '../services/index'

Vue.use(Vuex)

const service = new Services();

const store = new Vuex.Store({
    state: {
      username: null,
      auth: false,
      users: [],
      planets: [],
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
      },
      SET_PLANETS_LIST(state, planets) {
        state.planets = planets;
      }
    },
    actions: {
      getUsers({ commit }, page) {    
        service.getUsers(page).then((response) => {
          const users = response.data.data
          commit('SET_USER_LIST', users)
        })
      },
      getPlanets({ commit }, entity) {    
        service.getPlanets(entity).then((response) => {
          let planets = []
          response.data.results.map(element => {
            delete element.created
            delete element.edited
            delete element.films
            delete element.gravity
            delete element.orbital_period
            delete element.url
            delete element.residents
            delete element.rotation_period
            delete element.surface_water
            delete element.terrain
            planets.push(element)
          })
          commit('SET_PLANETS_LIST', planets)
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