<template lang="html">
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <v-card>
          <v-toolbar class="cyan darken-2" dark>
            <v-toolbar-title>Bestie Login</v-toolbar-title>
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
              v-model="user.password"
              type="password"
              required
            ></v-text-field>
            <v-btn error dark large @click.native="login()">Login</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import auth from '../lib/auth';

export default {
  name: 'login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
    };
  },
  methods: {
    login() {
      auth.login(this.user).then(() => {
        this.$router.push({ name: 'profile' });
      });
    }
  }
};
</script>

<style lang="css">
</style>
