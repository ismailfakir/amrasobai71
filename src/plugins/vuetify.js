import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

const APP_ICONS = {
  //https://fontawesome.com/icons?d=gallery&q=Home&m=free
  /**menues icons */
    home: 'fas fa-home',
    users: 'fas fa-users',
    foods: 'fas fa-pizza-slice',
    events: 'fas fa-calendar-week',
    perticipants: 'fas fa-th-list',
    news: 'fas fa-bullhorn',
    venue: 'fas fa-map-marked-alt',
    contacts: 'fas fa-tty',
    uparrow:'fas fa-chevron-up',
    downarrow:'fas fa-chevron-down',
    item:'fas fa-bullseye',
    /**headers icons */
    signout:'fas fa-sign-out-alt',
    tools:'fas fa-tools',
    user:'fas fa-user'
};

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa',
        values: APP_ICONS,
    }
});
