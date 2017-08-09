<template>
  <v-layout class="mt-6" row wrap>
    <v-flex class="flex-par" xs4 offset-xs1>
      <img class="chat-image" src="static/chat.png" />
    </v-flex>
    <v-flex xs6>
      <h2 class="text-xs-center bestie">Bestie</h2>
      <h3 class="text-xs-center">Your new best friend.</h3>
      <center>
        <img src="https://avatars0.githubusercontent.com/u/30674113?v=4&s=200" />
      </center>
      <p class="text-xs-center">Bestie will start a conversation with you via text message when you most need it.
      </p>
      <p class="text-xs-center">Bestie knows your interests and remembers past conversations. </p>
      <p class="text-xs-center">Bestie asks interesting and topical questions to keep the conversation going.</p>
      <div class="text-xs-center">
        <v-btn error dark large :to="{ name: 'signup' }">Sign Up</v-btn>
        <v-btn class="cyan darken-2 white--text" large :to="{ name: 'login' }">Log In</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
.chat-image {
  width: 85%;
  height: auto;
}

.flex-par {
  display: flex;
  justify-content: center;
}
</style>
