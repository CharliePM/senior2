<template>
  <v-card :class="color" style="height: 21.3rem">
    <v-card-text class="pa-0">
      <v-container class="pa-0">
        <br />

        <div class="layout row ma-0">
          <div class="layout column ma-0 py-3 justify-center align-center">
            <v-icon size="450%" :color="iconcolor">{{ icon }}</v-icon>
            <div
              class="headline ma-3 justify-center align-left"
              style="color: white"
            >
              <h3 class="mytitle">{{ title }}</h3>
            </div>
            <div class="headline ma-1">
              <h2>
                <b style="color: white">{{ number }}</b>
              </h2>
            </div>
            <span class="caption py-2" style="color: white"
              ><h5>{{ subTitle }}</h5></span
            >
          </div>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    subTitle: String,
    color: String,
    iconcolor: String,
    number: null,
  },
};
</script>

<style scoped>
.mytitle {
  display: table-cell;
  text-align: center;
}

.color1 {
  background-image: linear-gradient(to top, #007adf 0%, #00ecbc 100%);
}
.color3 {
background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
}
.color4 {
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
}
</style>
