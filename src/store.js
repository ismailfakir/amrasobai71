import Vuex from 'vuex';
import Vue from 'vue';
import firebase from 'firebase';
import router from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isAuthenticated: false
  },

  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },

  actions: {
    //user login
    userLogin({ commit }, { email, password }) {
      firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
        commit('setUser', user);
        commit('setIsAuthenticated', true);
        router.push('/home');
      }).catch(() => {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        router.push('/login');
      });
    },

    //user join
    userJoin({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push('/home');
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/login');
        });
    },

    //user logout
    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/login');
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/login');
        });
    },
  }
});