
import firebase from 'firebase/app'
require('firebase/auth')

const firebaseConfig = {
    apiKey: "APi_firebase goes here",
    authDomain: "authDomain-goes here",
    databaseURL: "databaseURL -goes here",
    storageBucket: "storageBucket - goes here"
  };

  firebase.initializeApp(firebaseConfig)



  export default firebase;