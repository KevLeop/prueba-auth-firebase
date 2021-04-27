import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
