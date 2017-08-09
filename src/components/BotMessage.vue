<template lang="html">
  <v-layout>
    <v-flex xs1 offset-xs2>
      <v-list-tile-avatar>
        <img :src="options.bot_name == 'Bestie' ? 'https://avatars0.githubusercontent.com/u/30674113?v=4&s=200' : options.bot_name ? 'https://api.adorable.io/avatars/285/' + options.bot_name + '.png' : 'https://i.imgur.com/XV5dMmb.png'" />
      </v-list-tile-avatar>
    </v-flex>
    <v-flex xs6>
      <v-chip class="chips">{{message}}</v-chip>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'BotMessage',
  props: ['message', 'options']
};
</script>

<style lang="css">
</style>
