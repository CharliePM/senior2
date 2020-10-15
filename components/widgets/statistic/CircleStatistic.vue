<template>
  <v-card class="livecard">
    <!-- CARD TITLE -->
    <v-card-title>
      <div class="layout row ma-0 justify-space-between pb-1">
        <div class="video__icon">
          <div class="circle--inner"></div>
        </div>
        <div class="subheading">
          <h4>
            {{ title }}
          </h4>
        </div>
      </div>
    </v-card-title>
    <v-divider class="notop"></v-divider>

    <!-- CARD BODY -->
    <v-card-text>
      <div class="justify-center row layout ma-0">
        <v-progress-circular
          :size="185"
          :width="25"
          :rotate="-90"
          :value="percent"
          :color="color"
        >
          <h2>
            <b>{{ value }}/3</b>
          </h2>
        </v-progress-circular>
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <!-- FOOTER -->
    <v-layout row wrap>
      <!-- CARS -->
      <v-flex lg6 sm6 xs6>
        <v-card
          class="layout ml-0 justify-center mycolor1"
          style="height: 7.5rem"
        >
          <v-card-text class="pa-0">
            <div class="layout row ma-0">
              <div class="layout column ma-0 py-0 justify-center align-center">
                <div class="headline mt-4">
                  <h1>
                    <b style="color: white">{{livecar.B1X}}</b>
                  </h1>
                </div>
                <span class="caption mt-3" style="color: white"
                  ><h5>Parking Cars</h5></span
                >
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <!-- CARS END-->
      <!-- SPOT -->
      <v-flex lg6 sm6 xs6>
        <v-card
          class="layout mr-0 justify-center mycolor2"
          style="height: 7.5rem"
        >
          <v-card-text class="pa-0">
            <div class="layout row ma-0">
              <div class="layout column ma-0 py-0 justify-center align-center">
                <div class="headline mt-4">
                  <h1>
                    <b style="color: white">{{3-livecar.B1X}}</b>
                  </h1>
                </div>
                <span class="caption mt-3" style="color: white"
                  ><h5>Available Spots</h5></span
                >
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <!-- SPOT END-->
    </v-layout>
  </v-card>
</template>

<script>

export default {
  props: {
    title: String,
    subTitle: String,
    caption: String,
    value: Number,
    percent: Number,
    color: String,
    livecar: 0,
  },

  data() {
    return {
 
    };
  },

  // firebase: {
  //   ToDos: db.ref("ParkingLot/LotID"),
  // },

};
</script>

<style scoped>
.mycolor1 {
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
}

.mycolor2 {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}
p {
  text-size-adjust: 20px;
}

.notop {
  margin-top: -12px;
}

.livecard {
  background-color: rgb(255, 255, 255);
}

h4 {
  margin-left: 45px;
}

.titlebg {
  background-color: #8db5f1d7;
  height: 53px;
}

/* LIVE ICON */
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.video__icon {
  position: absolute;
  width: 50px;
  left: 20px;
  top: 20px;
}
.video__icon .circle--outer {
  border: 1px solid #e50040;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 auto 5px;
  position: relative;
  opacity: 0.8;
  -webkit-animation: circle 2s ease-in-out infinite;
  animation: circle 2s ease-in-out infinite;
}
.video__icon .circle--inner {
  background: #e50040;
  left: 15px;
  top: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  opacity: 0.8;
}
.video__icon .circle--inner:after {
  content: "";
  display: block;
  border: 2px solid #e50040;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  top: -4px;
  left: -4px;
  position: absolute;
  opacity: 0.8;
  -webkit-animation: circle 2s ease-in-out 0.2s infinite;
  animation: circle 2s ease-in-out 0.2s infinite;
}
.video__icon p {
  color: #000;
  text-align: center;
}

@-webkit-keyframes circle {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  to {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes circle {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  to {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 0;
  }
}
/* LIVE ICON END */
</style>
