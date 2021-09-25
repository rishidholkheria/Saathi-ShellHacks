import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-ia8H9mlmwlI9n0DQt16Spoh96_IITZE",
  authDomain: "saathi-5494a.firebaseapp.com",
  projectId: "saathi-5494a",
  storageBucket: "saathi-5494a.appspot.com",
  messagingSenderId: "327153676349",
  appId: "1:327153676349:web:2c7091d1ce3c7abc807a54",
  measurementId: "G-2T898TWXG1",
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var database = firebase.database();
var provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, database };
