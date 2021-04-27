import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9AdRDPbKGUtWVQZhs7hK1Ojdz06Yg4H8",
  authDomain: "react-prueba-f5a9d.firebaseapp.com",
  projectId: "react-prueba-f5a9d",
  storageBucket: "react-prueba-f5a9d.appspot.com",
  messagingSenderId: "318726860860",
  appId: "1:318726860860:web:5235cb26e60e2bdca6d339",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
