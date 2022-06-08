import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyBv93eU1dnlE1Kt7zSmIdoHu9W9-hHbeE4",
  authDomain: "sistema-3312a.firebaseapp.com",
  projectId: "sistema-3312a",
  storageBucket: "sistema-3312a.appspot.com",
  messagingSenderId: "222407560987",
  appId: "1:222407560987:web:5af6cbc7dc155ecbd58dbe",
  measurementId: "G-3TBE2GCC8F"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

