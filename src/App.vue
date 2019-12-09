<template>
  <v-app>
    <Header/>
    <Menues v-bind:isOpen="isOpen"/>
    <v-content>
      <v-container fluid class="fill-height">
         <v-row
          align="center"
          justify="center"
        >
          <!-- <v-col class="shrink"> -->
          <v-col>
     <!--  <login/> -->
      <!-- <Register/> -->
      <!-- <Food/> -->
       <router-view></router-view>
          </v-col>
         </v-row>
      </v-container>
    </v-content>
     <Footer/>
  </v-app>
</template>

<script>
//import Login from './components/Login';
//import Register from './components/Register';
import Footer from './components/Footer';
import Header from './components/Header';
import Menues from './components/Menues';
//import Food from './components/Food';


export default {
  name: 'App',

  components: {
    //Login,
    //Register,
    Footer,
    Header,
    Menues,
    //Food
  },

  methods: {
    go(){
      this.$router.push({ path: 'foo' })
    }
  },

  data: () => ({
    //
    isOpen:true,
  }),
};
</script>
