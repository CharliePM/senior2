<template>
  <v-card style="height: 21.3rem">
    <v-card-text class="pa-0">
      <v-container class="pa-0">

        <div class="layout row ma-0">
          <!-- <div class="sm6 xs6 flex"> -->
            <div class="darkbg layout column ma-0 justify-center align-center" >
              <br>
              <v-icon size="42px" style="color:red">trending_up</v-icon>
                   <div class="headline ma-0" style="color:white"><h4>Peak Traffic Flow</h4></div>
                   <div class="headline ma-0" style="color:white">{{peaktime}}</div>
                   <br>
            </div>
          <!-- </div> -->
        </div>
        <hr />
        
        <div class="layout row ma-0">
          <!-- <div class="sm6 xs6 flex"> -->
            <div class="darkbg layout column ma-0 justify-center align-center" >
             <br>
              <v-icon size="42px" style="color:Green">trending_down</v-icon>
                   <div class="headline ma-0" style="color:white"><h4>Least Traffic Flow</h4></div>
                   <div class="headline ma-0" style="color:white">{{besttime}}</div>
                   <br>
            </div>
          <!-- </div> -->
        </div>
 
      </v-container>
    </v-card-text>
  </v-card>    
</template>

<script>
export default { 
  props: {
    peaktime: String,
    besttime: String,
 
  }
};
</script>

<style scoped>
.darkbg{
 background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
}
 
h4{
  size: 50px;
}

</style>
