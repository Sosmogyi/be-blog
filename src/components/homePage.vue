<template>
  <v-app id="inspire">
<v-container fluid grid-list-md id="gridSystem">
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card color="purple" dark hover>
          <v-card-title primary class="title">kecske</v-card-title>
          <v-card-text>{{ lorem }}</v-card-text>
            <v-btn bottom color="info">Info</v-btn>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="indigo" dark hover>
              <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                <v-btn bottom color="info">Info</v-btn>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex
                v-for="n in 1"
                :key="n"
                d-flex
                xs12
              >
                <v-card
                  color="red lighten-2"
                  dark
                  hover
                >
                  <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                    <v-btn bottom color="info">Info</v-btn>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md2 child-flex>
        <v-card color="green lighten-2" dark hover>
          <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
            <v-btn bottom color="info">Info</v-btn>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-card color="blue lighten-2" dark hover>
          <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
            <v-btn bottom color="info">Info</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'homePage',
      data: () => ({
      drawer: true,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#inspire {
  background-color: #1A1A1D;
}

#navbar {
  background-color: #950740;
}

#header {
    background-color: #4E4E50;
}

.textColor {
  color: white;
}

#gridSystem {
  margin-top: 15%;
}
.color2 {
  background-color: #6F2232;
}

.color4 {
  background-color: #C3073F;
}
</style>
