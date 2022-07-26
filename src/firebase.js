import { initializeApp } from 'firebase/app';
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "FB_KEY",
    authDomain: "linkedin-clone-21d3a.firebaseapp.com",
    projectId: "linkedin-clone-21d3a",
    storageBucket: "linkedin-clone-21d3a.appspot.com",
    messagingSenderId: "217949001428",
    appId: "APPID",
    measurementId: "G-0WSMETHWSC"
  };

  // No need to change anything below this line
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db; 