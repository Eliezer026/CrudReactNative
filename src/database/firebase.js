import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCOiq8odkCxt-bp7Mda7Hxg6D7y01hRlHM",
  authDomain: "crud-react-native-1bf65.firebaseapp.com",
  projectId: "crud-react-native-1bf65",
  storageBucket: "crud-react-native-1bf65.appspot.com",
  messagingSenderId: "982188279579",
  appId: "1:982188279579:web:9b357cec03afab4247f5be",
  measurementId: "G-HVPE830ES0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
