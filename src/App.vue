<template>
  <v-app id="app" standalone>
    <!-- <v-toolbar fixed>
      <v-toolbar-title>Bestie</v-toolbar-title>
    </v-toolbar> -->
    <main>
      <v-container>
        <router-view></router-view>
        <!--v-router-->
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  font-family: 'Gudea', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Quicksand', sans-serif;
}

.bestie {
  font-family: 'Pacifico', cursive;
}
</style>
