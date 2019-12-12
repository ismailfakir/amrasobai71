<template>

<v-card width="600" class="mx-auto mt-5" raised color="#FAFAFA" light>
  <v-card-title class="grey lighten-2 pb-0"  style="height: 100px;">
        <h3>Register</h3>
  </v-card-title>
  <v-spacer></v-spacer>
  <v-divider></v-divider>
<v-card-text>
  <div v-if="error" class="alert alert-danger">{{error}}</div>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :counter="10"
      :rules="passwordRules"
      label="Password"
      :type="password"
      required
    ></v-text-field>
  </v-form>
  </v-card-text>
  <v-divider></v-divider>
  <v-card-actions>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Signup
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Clear
    </v-btn>
  </v-card-actions>
</v-card>
</template>
<script>
//import firebase from 'firebase';

  export default {
    name: 'Register',
    data: () => ({
      error: null,
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be atleast 6 characters',
        v => (v && v.length <= 10) || 'Password must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.signup();
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      signup(){
        /* firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          alert(JSON.stringify(data.user));
          //go to login page
          this.$router.push({ path: '/login' });
        })
        .catch(err => {
          this.error = err.message;
        }); */
        this.$store.dispatch('userJoin', {email: this.email,password: this.password});
      }
    },
  }
</script>