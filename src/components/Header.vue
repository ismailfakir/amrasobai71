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
        <v-tooltip color="green" bottom="bottom" v-for="item in items" :key="item">
            <template v-slot:activator="{ on }">
                <v-btn icon="icon" v-on="on">
            <v-icon>{{item.icon}}</v-icon>
        </v-btn>
            </template>
            <span>{{item.text}}</span>
        </v-tooltip>
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
            }
        },
        data() {
            return {
                items: [
                    {
                        icon: '$tools',
                        text: 'Tools'
                    }, {
                        icon: '$user',
                        text: 'User Profile'
                    }, {
                        icon: '$signout',
                        text: 'Signout'
                    }
                ]
            }
        }
    }
</script>