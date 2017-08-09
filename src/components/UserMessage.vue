<template lang="html">
  <!-- *** USER TEXTS HERE FAM *** -->
  <v-layout>
    <v-flex xs6 offset-xs2 class="text-xs-left">
      <v-chip class="teal lighten-4 chips">{{message}}</v-chip>
    </v-flex>
    <v-flex xs1>
      <v-list-tile-avatar>
      <img src="http://modexenergy.com/wp-content/themes/modex_wp/img/avatar.png"/>
      </v-list-tile-avatar>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'UserMessage',
  props: ['message']
};
</script>

<style lang="css">
</style>
