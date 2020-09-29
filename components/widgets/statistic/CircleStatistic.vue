<template>
    <v-card>
      <v-card-title class="titlebg">
        <div class="layout row ma-0 justify-space-between pb-1">
            <div class="video__icon">
                <div class="circle--inner"></div>
              </div>
          <div class="subheading"><h4><b>{{title}}</b></h4></div>
          <div class="icon">
            <v-icon :color="color">{{icon}}</v-icon>
          </div>
        </div>
      </v-card-title>
      <v-card-text>
        <div class="justify-center row layout ma-0">
          <v-progress-circular
            :size="150"
            :width="15"
            :rotate="-90"
            :value="percent"
            :color="color"
          >
            {{ value }}/300
          </v-progress-circular>
        </div>
      </v-card-text>
      <v-divider></v-divider>

    </v-card>     
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    subTitle: String,
    caption: String,
    value: Number,
    percent: Number,
    color: String
  },

};
</script>

<style scoped>
h4 {
  margin-left: 45px;
}

.titlebg{
  background-color:  #8db5f1d7;
  height:53px;

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
