import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCk1NvramyaI0it2szEWn8CpsKs9q9PrGA",
  authDomain: "ecart-e64d9.firebaseapp.com",
  projectId: "ecart-e64d9",
  storageBucket: "ecart-e64d9.appspot.com",
  messagingSenderId: "313776284046",
  appId: "1:313776284046:web:147ea2f48556b2903484df",
  measurementId: "G-BP3BR1RNDH"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };