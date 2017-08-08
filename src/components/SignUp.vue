<template lang="html">
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <v-card>
          <v-toolbar class="indigo" dark>
            <v-toolbar-title>Bestie Signup</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              label="Email"
              class="mt-5"
              v-model="user.email"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="user.firstPassword"
              :rules="[rules.password]"
              type="password"
              required
            ></v-text-field>
            <v-text-field
              label="Password Again"
              v-model="user.secondPassword"
              :rules="[rules.password]"
              type="password"
              required
            ></v-text-field>
            <v-btn error dark large @click.native="signup()">Sign Up</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import auth from '../lib/auth';

export default {
  name: 'signup',
  data() {
    return {
      rules: {
        password: () => this.user.firstPassword === this.user.secondPassword || 'Passwords must match.'
      },
      user: {
        email: '',
        firstPassword: '',
        secondPassword: '',
      },
    };
  },
  methods: {
    signup() {
      if (this.rules.password() === true) {
        auth.signup({
          email: this.user.email,
          password: this.user.firstPassword
        }).then(() => {
          this.$router.push({ name: 'profile' });
        });
      }
    }
  }
};
</script>

<style lang="css">
</style>
