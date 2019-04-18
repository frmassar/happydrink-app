import firebase from 'firebase';
import Rebase from 're-base';
// Initialize Firebase
const conf ={
    apiKey: "AIzaSyBAMfFd0yQa9u8uarntngURCsg25qSVfcE",
    authDomain: "barproject-c0ed8.firebaseapp.com",
    databaseURL: "https://barproject-c0ed8.firebaseio.com",
    projectId: "barproject-c0ed8",
    storageBucket: "barproject-c0ed8.appspot.com",
    messagingSenderId: "833808119437"
  };
  const app = firebase.initializeApp(conf)
  const base = Rebase.createClass(app.database())
 export {base}