<template>
  <div id="app">
    <homePage />
  </div>
</template>

<script>
import homePage from './components/homePage.vue'

export default {
  name: 'app',
  components: {
    homePage
  }
}
</script>

<style>

#body {
  padding: 0;
  margin: 0;
}

</style>
