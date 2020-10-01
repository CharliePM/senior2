<template>
<v-container grid-list-xl fluid>
<v-layout row wrap>

 
   
      <v-flex lg6 sm6 xs6>
        <v-card
          color="rgb(38, 137, 189)"
          dark
          class="justify-center row layout"
        >
          <v-card-title class="headline"> 274 </v-card-title>
          <br />
          <v-card-text> <b>Parking Cars</b> </v-card-text>
        </v-card>
      </v-flex>

      <v-flex lg6 sm6 xs6>
        <v-card
          color="rgb(38, 137, 189)"
          dark
          class="justify-center row layout"
        >
          <v-card-title class="headline"> 274 </v-card-title>
          <br />
          <v-card-text> <b>Parking Cars</b> </v-card-text>
        </v-card>
      </v-flex>
   
  
</v-layout>
</v-container>
</template>
<script>
import Firebase from "firebase";
import toastr from "toastr";
import { db } from "../firebase/db";
import axios from "axios";

export default {
  layout: "dashboard",
  name: "app",
  data() {
    return {
      ToDos: [],
      mytest: [],
      carcount: [],
    };
  },
  firestore: {
    ToDos: db.collection("ToDos"),
  },

  beforeCreate() {
    axios
      .get("http://www.mustavi.com/TotalVehicles/?param1=2020-09-04")
      .then((res) => {
        this.mytest = res.data.data;
        this.carcount = res.data.data.carCount;
      });
  },
};
</script>


<style scoped>
</style>
