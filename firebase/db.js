import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBxxhNe5YCc4tMjKuklaDIi09GPkVsu4lw",
    authDomain: "aupark-770b3.firebaseapp.com",
    databaseURL: "https://aupark-770b3.firebaseio.com",
    projectId: "aupark-770b3",
    storageBucket: "aupark-770b3.appspot.com",
    messagingSenderId: "736242181002",
    appId: "1:736242181002:web:ad87f27e3d4f97ffaa1e73",
    measurementId: "G-W9SBD43T52"
};
// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).database();
