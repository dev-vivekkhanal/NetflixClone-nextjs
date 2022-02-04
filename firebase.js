import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_I-kjTi3kAmD-O7I947q8ooVC3FRzQBY",
  authDomain: "netflix-clone-v2-ddda9.firebaseapp.com",
  projectId: "netflix-clone-v2-ddda9",
  storageBucket: "netflix-clone-v2-ddda9.appspot.com",
  messagingSenderId: "802662283848",
  appId: "1:802662283848:web:84316605f131bb5f17367d",
  measurementId: "G-QN4ZYHYM25",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
