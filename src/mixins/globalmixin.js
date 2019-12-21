import Vue from 'vue';
import VueLodash from 'vue-lodash'

const options = { name: 'lodash' } // customize the way you want to call it

Vue.use(VueLodash, options); // options is optional

export const GlobalMixin = {
  methods: {
    getRandomNumber(start,end){
      return Vue.lodash.random(start,end);
    },
    log(mesage){
      console.log(mesage);
    }
  },
};