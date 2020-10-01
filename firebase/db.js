import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBSp13pWSAfACl6RhPs9PLUEsIAfQSfIpA",
    authDomain: "pmpm-2c3d5.firebaseapp.com",
    databaseURL: "https://pmpm-2c3d5.firebaseio.com",
    projectId: "pmpm-2c3d5",
    storageBucket: "pmpm-2c3d5.appspot.com",
    messagingSenderId: "463892050334",
    appId: "1:463892050334:web:66b504bdd9c4c8994ce68f",
    measurementId: "G-0R663H81HY"
};
// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();
