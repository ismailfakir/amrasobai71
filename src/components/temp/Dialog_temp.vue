<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent="persistent" max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark="dark" v-on="on">{{activatorname}}</v-btn>
            </template>
            <v-card >
                <v-card-title class="headline grey lighten-2" primary-title="primary-title">
                    {{title}}
                </v-card-title>

                <v-card-text>
                    <template>
                        <v-form ref="form" v-model="valid" lazy-validation="lazy-validation">

                            <!-- <v-text-field v-for="item in formItems" v-bind:key="item.label"
                            v-model="name" :counter="10" :rules="nameRules" label="item"
                            required="required"></v-text-field> -->

                            <component :is="item.type" :label="item.text" v-for="(item, i) in fields" :key="i" v-model="values[item.meta_id]" :rules="nameRules" :items="items">
                                
                            </component>

                            <v-text-field
                                v-model="name"
                                :counter="10"
                                :rules="nameRules"
                                label="Name"
                                required="required"></v-text-field>

                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required="required"></v-text-field>

                            <v-select
                                v-model="select"
                                :items="items"
                                :rules="[v => !!v || 'Item is required']"
                                label="Item"
                                required="required"></v-select>

                            <v-checkbox
                                v-model="checkbox"
                                :rules="[v => !!v || 'You must agree to continue!']"
                                label="Do you agree?"
                                required="required"></v-checkbox>

                            

                            <!-- <v-btn color="warning" @click="resetValidation"> Close </v-btn> -->

                        </v-form>
                    </template>

                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="!valid" color="success" text="text" class="mr-4" @click="validate">
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
    export default {
        name: 'Dialog',
        props: {
            activatorname: {
                type: String,
                default: 'buton name'
            },
            title: {
                type: String,
                default: 'Dialog Title'
            }
        },
        data: () => ({
            dialog: false,
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            select: null,
            items: [
                'Item 1', 'Item 2', 'Item 3', 'Item 4'
            ],
            checkbox: false,
            values: {
                    csp_address: 'default value',
                    csp_name: 'default value',
                    csp_gender: 'male',
                    csp_aggree: true
            },

            fields: [
                    {
                        type: 'v-text-field',
                        text: 'CSP Address',
                        meta_id: 'csp_address'
                    },
                    {
                        type: 'v-select',
                        text: 'CSP Name',
                        meta_id: 'csp_name'
                    },
                    {
                        type: 'v-radio-group',
                        text: 'CSP Gender',
                        children: [
                            {
                                type: 'v-radio',
                                value: 'male',
                                text: 'Male',
                            },
                            {
                                type: 'v-radio',
                                value: 'female',
                                text: 'Female',
                            }
                        ],
                        meta_id: 'csp_gender'
                    },
                    {
                        type: 'v-checkbox',
                        text: 'CSP Agree',
                        meta_id: 'csp_aggree'
                    }

            ],

            /* formModel: {
                name: '',
                email: '',
                gender: null,
                active: false
            }, */
            /*
            formItems: [
                {
                    type: 'text',
                    lavel: 'Name',
                    value: 'your name',
                    model: this.formModel.name,
                    rules: "[v => !!v || 'Item is required']",
                    required: true
                }, {
                    type: 'text',
                    lavel: 'Email',
                    value: 'your email',
                    model: this.formModel.email,
                    rules: "[v => !!v || 'Item is required']",
                    required: true
                }, {
                    type: 'select',
                    lavel: 'Gender',
                    value: [
                        'male', 'female'
                    ],
                    model: this.formModel.gender,
                    rules: "[v => !!v || 'Item is required']",
                    required: true
                }, {
                    type: 'checkbox',
                    lavel: 'Active',
                    value: false,
                    model: this.formModel.active,
                    rules: "[v => !!v || 'Item is required']",
                    required: true
                }
            ] */
        }),

        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            },
            reset() {
                this
                    .$refs
                    .form
                    .reset()
            },
            resetValidation() {
                this
                    .$refs
                    .form
                    .resetValidation()
            }
        }
    }
</script>