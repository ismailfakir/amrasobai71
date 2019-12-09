import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Login from './components/Login';
import Register from './components/Register';
import Food from './components/Food';
import Notfound from './components/Notfound';
import Users from './components/Users';
import Perticipants from './components/Perticipants';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/login', component: Login },
    { path: '/perticipants', component: Perticipants },
    { path: '/users', component: Users },
    { path: '/Register', component: Register},
    { path: '/Food', component: Food },
    { path: '*', component: Notfound },
  ]
});


Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
