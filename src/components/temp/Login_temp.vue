<template>
    <v-card width="600" class="mx-auto mt-5" color="#FAFAFA" light>
 <v-card-title class="grey lighten-2 pb-0"  style="height: 100px;">
        <h3>Login</h3>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email" 
            label="Username" 
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            v-model="pass" 
            :type="showPassword ? 'text' : 'password'" 
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <p v-if="error" class="error">Bad login information</p>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success" to="/register">Register</v-btn>
        <v-btn color="info" @click="login()">Login</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
import auth from '../auth'
export default {
    name: 'Login',
    data () {
    return {
      email: 'joe@example.com',
      pass: '',
      error: false,
      showPassword: false
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      })
    }
  }
}
</script>
<style>
.error {
  color: red;
  background-color: whitesmoke;
}
</style>