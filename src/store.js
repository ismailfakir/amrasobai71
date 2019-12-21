import Vuex from 'vuex';
import Vue from 'vue';
import firebase from 'firebase';
import router from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isAuthenticated: false,
    isLoading: false,
  },

  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    },
    isLoading(state){
      return state.isLoading;
    }
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setLoading(state,payload){
      state.isLoading=payload;
    }
  },

  actions: {
    //user login
    userLogin({ commit }, { email, password }) {
      firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
        commit('setUser', user);
        commit('setIsAuthenticated', true);
        commit('setLoading',false);
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