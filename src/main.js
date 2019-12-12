import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import firebase from 'firebase';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWsL2VOB0uqhTCnleP9pZc3tQkUvLuWes",
  authDomain: "amrasobai71.firebaseapp.com",
  databaseURL: "https://amrasobai71.firebaseio.com",
  projectId: "amrasobai71",
  storageBucket: "amrasobai71.appspot.com",
  messagingSenderId: "253632726900",
  appId: "1:253632726900:web:cd70fa184d672d35078e21",
  measurementId: "G-NZH7KTGMY8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
