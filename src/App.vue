<template>
 <div id="app">
  <v-app>
    <navBar app/>
    <v-content>
      <v-container>
       <router-view/>
      </v-container>
    </v-content>
  </v-app>
 </div>
</template>

<script>
import navBar from './components/navBar.vue'

export default {
  name: 'app',
  components: {
    navBar
  }
}
</script>

<style>
#app {
  background-color: #1A1A1D;
}
#body {
  padding: 0;
  margin: 0;
}

</style>
