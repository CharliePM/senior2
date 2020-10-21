<template>
<v-container grid-list-xl fluid>
<v-layout row wrap>

 <!-- <ul>
   <li v-for="personName of ToDos" v-bind:key ="personName['.key']"> {{personName}} </li>
 </ul> -->
 <!-- {{ToDos.B1X}}
 {{3-ToDos.B1X}}
 {{parkingcar}}   -->

 {{mytest}}
  
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


      ToDos: 0,

      mytest: null,
      carcount: null,

      
    };
  },

  // watch: {
  //   id: {
  //     // call it upon creation too
  //     immediate: true,
  //     handler(id) {
  //       this.$rtdbBind('user', users.child(id))
  //     },
  //   },
  // },

  //  firebase: {
  //   ToDos: db.ref("ParkingLot/LotID"),
  // },

  beforeCreate() {
    axios
      .get("https://www.mustavi.com/DailyTraffic/")
      .then((res) => {
        this.mytest = res.data.data[0];

        this.carcount = res.data.data.carCount;
      });
  },
};
</script>


<style scoped>
</style>
