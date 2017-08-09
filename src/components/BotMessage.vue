<template lang="html">
  <v-layout>
    <v-flex xs1 offset-xs2>
      <v-list-tile-avatar>
        <img :src="options.bot_name ? 'https://api.adorable.io/avatars/285/' + options.bot_name + '.png' : 'http://fuuse.net/wp-content/uploads/2016/02/avatar-placeholder.png'" />
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
