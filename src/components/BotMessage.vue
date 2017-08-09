<template lang="html">
  <v-layout>
    <v-flex xs1 offset-xs2>
      <v-list-tile-avatar>
        <img src="http://fuuse.net/wp-content/uploads/2016/02/avatar-placeholder.png"/>
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
  props: ['message']
};
</script>

<style lang="css">
</style>
