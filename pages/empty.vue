<template>
<v-container grid-list-xl fluid>
<v-layout row wrap>

 
   
{{ToDos}}
   
  
</v-layout>
</v-container>
</template>
<script>
import Firebase from "firebase";
import toastr from "toastr";
import { db } from "../firebase/db";
import axios from "axios";

const slot = db.ref('ParkingLot')

export default {
  layout: "dashboard",
  name: "app",
  data() {
    return {
      ToDos: [],
      mytest: [],
      carcount: [],
      slot: null,
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

   firebase: {
    ToDos: db.ref("ParkingLot"),
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
