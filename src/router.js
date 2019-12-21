import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/Login';
import Register from './components/Register';
import Food from './components/Food';
import Notfound from './components/Notfound';
import Users from './components/Users';
import Home from './components/Home';
import Perticipants from './components/Perticipants';
import News from './components/News';
import Test from './components/Test';
//import auth from './auth';
import store from './store.js';


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/login', component: Login },
      { path: '/Register', component: Register},
      { path: '/logout',
        beforeEnter (to, from, next) {
          //auth.logout()
          this.$store.dispatch('userSignOut');
          next('/login')
        }
      },
      { path: '*', component: Notfound },
      { path: '/perticipants', component: Perticipants,meta: {authRequired: true} },
      { path: '/users', component: Users,meta: {authRequired: true} }, 
      { path: '/Food', component: Food,meta: {authRequired: true} },
      { path: '/home', component: Home,meta: {authRequired: true} },
      { path: '/news', component: News,meta: {authRequired: true} },
      { path: '/test', component: Test,meta: {authRequired: false} }
      /* 
      { path: '/perticipants', component: Perticipants,beforeEnter: requireAuth },
      { path: '/users', component: Users,beforeEnter: requireAuth }, 
      { path: '/Food', component: Food,beforeEnter: requireAuth },
      { path: '/home', component: Home,beforeEnter: requireAuth }
      */
    ]
  });

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.isAuthenticated) {
            next({
                path: '/login'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});


/*   function requireAuth (to, from, next) {
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } */

  export default router;