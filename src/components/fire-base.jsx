import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCF1UoZtvOL_rCW1VlU4lizwyFHQssjH3Y",
  authDomain: "tesla-clone-bee25.firebaseapp.com",
  projectId: "tesla-clone-bee25",
  storageBucket: "tesla-clone-bee25.appspot.com",
  messagingSenderId: "822571291411",
  appId: "1:822571291411:web:596de8b4dec6ac0e0a00e6"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const auth = firebase.auth();

export { auth};