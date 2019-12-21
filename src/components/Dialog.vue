<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent="persistent" max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark="dark" v-on="on">{{activatorname}}</v-btn>
            </template>
            <v-card>
                <v-card-title class="headline lighten-2 dialog-title" primary-title="primary-title">
                    {{title}}
                </v-card-title>

                <v-card-text class="dialog-body">
                    <template>
                        <v-form ref="form" v-model="valid" lazy-validation="lazy-validation">

                            <component
                                v-for="(item, i) in fields"
                                :is="item.type"
                                :label="item.text"
                                :key="i"
                                v-model="models[item.model_id]"
                                :rules="item.rules"
                                :items="item.items"
                                :required="item.required"
                                :disabled="item.disabled">
                            </component>

                        </v-form>
                    </template>
                </v-card-text>
                
                <v-divider></v-divider>
                <v-card-actions class="dialog-action">
                    <v-spacer></v-spacer>
                    <v-btn
                        :disabled="!valid"
                        color="success"
                        text="text"
                        class="mr-4"
                        @click="validate">
                        Save
                    </v-btn>

                    <v-btn color="error" class="mr-4" text="text" @click="reset">
                        Clear
                    </v-btn>
                    <v-btn color="primary" text="text" @click="dialog = false">
                        close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import {VTextField, VSelect, VCheckbox} from 'vuetify/lib';
    export default {
        name: 'Dialog',
        components: {
            VTextField,
            VSelect,
            VCheckbox
        },
        props: {
            activatorname: {
                type: String,
                default: 'buton name'
            },
            title: {
                type: String,
                default: 'Dialog Title'
            },
            fields: {
                type: Array,
                default: null
            },
            models: {
                type: Object,
                default: null
            }
        },
        mounted(){
            //console.log(JSON.stringify(this.fields));
            //console.log(JSON.stringify(this.models));
            //myrandom();
        },
        data: () => ({
            dialog: false, valid: true,
            /* models: {
                name: '',
                email: '',
                gender: '',
                aggree: false
            },
            fields: [
                {
                    type: 'v-text-field',
                    text: 'Name',
                    model_id: 'name',
                    rules: [v => !!v || 'Name is required',v => (v && v.length <= 5) || 'Name must be less than 4 characters'],
                    required: true
                }, 
                {
                    type: 'v-text-field',
                    text: 'Email',
                    model_id: 'email',
                    rules: [v => !!v || 'E-mail is required',v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
                    required: true
                },
                {
                    type: 'v-select',
                    text: 'Gender',
                    items: ['male', 'female'],
                    model_id: 'gender',
                    rules: [v => !!v || 'You must select a Gender'],
                    required: true
                },  
                {
                    type: 'v-checkbox',
                    text: 'Agree',
                    model_id: 'aggree',
                    rules: [v => !!v || 'You must agree'],
                    required: true
                }
            ] */
        }),

        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    //this.snackbar = true
                    //alert('valid form data'+JSON.stringify(this.models));
                    this.$emit('save',this.models)
                    this.dialog=false
                }
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            }
        }
    }
</script>
<style lang="scss">
    @import '../assets/styles/_variables.scss'; // Using this should get you the variables
    
    .dialog-title {
        color: $dialog-header-text-color;
        background-color: $dialog-header-background-color;
    }
    .dialog-action{
        background: $dialog-action-background-color;
    }
    .dialog-body{
        background: $dialog-body-background-color;
    }
</style>