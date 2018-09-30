<template>
 <div>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
      id="navbar"
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="textColor">programnyelvek</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="textColor">IT hírek</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left id="header">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="textColor">be-blog</v-toolbar-title>
    </v-toolbar>
    <v-footer app id="footer">
      <span class="textColor">&copy; 2018</span>
    </v-footer>
 </div>
</template>

<script>
export default {
  name: 'homePage',
      data: () => ({
      drawer: true
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#navbar {
  background-color: #950740;
  margin-bottom: 0;
  padding-bottom: 0;
}

#header {
    background-color: #4E4E50;
}

.textColor {
  color: white;
}

#footer {
  background-color: #4E4E50;
}

</style>
