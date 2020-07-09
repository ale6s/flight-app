
import firebase from 'firebase/app'
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyDON581xVOP9Wjae4rWAT1Emk2H5j0suHQ",
    authDomain: "flight-app-57479.firebaseapp.com",
    databaseURL: "https://flight-app-57479.firebaseio.com",
    storageBucket: "flight-app-57479.appspot.com"
  };

  firebase.initializeApp(firebaseConfig)



  export default firebase;