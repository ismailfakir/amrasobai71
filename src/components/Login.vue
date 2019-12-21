<template>
    <v-container fill-height="fill-height">
        <v-layout align-center="align-center" justify-center="justify-center">
            <Loader></Loader>
            <v-flex xs12="xs12" sm8="sm8" md4="md4">
                <v-card class="elevation-12">
                    <v-toolbar dark="dark" color="primary">
                        <v-toolbar-title>Login Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid">
                            <v-text-field
                                prepend-icon="person"
                                name="email"
                                label="Email"
                                type="email"
                                v-model="email"
                                :rules="emailRules"
                                required="required"
                                data-cy="signinEmailField"></v-text-field>
                            <v-text-field
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                type="password"
                                data-cy="signinPasswordField"
                                v-model="password"
                                :rules="passwordRules"
                                required="required"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            :disabled="!valid"
                            @click="submit"
                            data-cy="signinSubmitBtn">Login</v-btn >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Loader from './Loader';
    export default {
        name: 'Login',
        components: {
            Loader
        },
        data() {
            return {
                valid: false,
                email: 'ismail7043@yahoo.com',
                password: '123456',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => v.length >= 6 || 'Password must be greater than 6 characters'
                ]
            };
        },
        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    this.$store.commit('setLoading',true);
                    this.$store.dispatch('userLogin', {
                        email: this.email,
                        password: this.password
                    });
                }
            }
        }
    };
</script>

<style scoped="scoped"></style>