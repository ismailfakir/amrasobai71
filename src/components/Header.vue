<template>
    <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app="app"
        color="red darken-3"
        dark="dark">
        <v-app-bar-nav-icon @click.stop="hideMenues"/>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
            <span class="hidden-sm-and-down">AMRA SOBAI</span>
        </v-toolbar-title>
        <v-spacer/>
        
        <v-toolbar-items v-if="!isAuthenticated">

        <v-tooltip color="green" bottom="bottom">
            <template v-slot:activator="{ on }">
                <v-btn icon="icon" v-on="on" link to="/register">
            <v-icon>$register</v-icon>
        </v-btn>
            </template>
            <span>Register</span>
        </v-tooltip>

        <v-tooltip color="green" bottom="bottom">
            <template v-slot:activator="{ on }">
                <v-btn icon="icon" v-on="on" link to="/login">
            <v-icon>$signin</v-icon>
        </v-btn>
            </template>
            <span>Login</span>
        </v-tooltip>

      </v-toolbar-items>

       <v-toolbar-items v-else >

        <v-tooltip color="green" bottom="bottom">
            <template v-slot:activator="{ on }">
                <v-btn icon="icon" v-on="on" link to="/user">
            <v-icon>$user</v-icon>
        </v-btn>
            </template>
            <span>User</span>
        </v-tooltip>

        <v-tooltip color="green" bottom="bottom">
            <template v-slot:activator="{ on }">
                <v-btn icon="icon" v-on="on" link @click="logout">
            <v-icon>$signout</v-icon>
        </v-btn>
            </template>
            <span>Logout</span>
        </v-tooltip>

        

      </v-toolbar-items>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>$tools</v-icon>
        </v-btn>
      </template>
      
    </v-app-bar>
</template>
<script>
    export default {
        name: 'Header',
        methods: {
            hideMenues: function () {
                this
                    .$root
                    .$emit('hideMenues')
            },
                    logout() {
            this.$store.dispatch('userSignOut');
        }
        },
        data() {
            return {
                items: [
                    {
                        icon: '$tools',
                        text: 'Tools',
                        link:'/'
                    }, {
                        icon: '$user',
                        text: 'User Profile',
                        link:'/'
                    }, {
                        icon: '$signout',
                        text: 'Signout',
                        link:'/logout'
                    }
                ]
            }
        },
        computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    }
</script>