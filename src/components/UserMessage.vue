<template lang="html">
  <!-- *** USER TEXTS HERE FAM *** -->
  <v-layout>
    <v-flex xs6 offset-xs2 class="text-xs-left">
      <v-chip class="teal lighten-4 chips">{{message}}</v-chip>
    </v-flex>
    <v-flex xs1>
      <v-list-tile-avatar>
      <img :src="options.user_image || 'https://i.imgur.com/EVNRBG9.png'"/>
      </v-list-tile-avatar>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'UserMessage',
  props: ['message', 'options']
};
</script>

<style lang="css">
</style>
