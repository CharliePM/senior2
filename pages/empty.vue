<template>
  <div id="app" class="container">
  test
  {{ToDos}}




  </div>
</template>
<script>
import Firebase from "firebase";
import toastr from "toastr";
import {db} from '../firebase/db'

export default {
  layout: "dashboard",
  name: "app",
  data() {
    return {
      ToDos: [],
    }
  },
  // firestore: {
  //   ToDos: db.collection("ToDos")
  // }
  
  
};
</script>


<style scoped>
</style>
