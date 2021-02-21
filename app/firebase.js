import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCjTXO9dTgYTtF8ft_r4wQ6XXQa3NnziCg",
  authDomain: "communityfridge-305404.firebaseapp.com",
  databaseURL: "https://communityfridge-305404-default-rtdb.firebaseio.com",
  projectId: "communityfridge-305404",
  storageBucket: "communityfridge-305404.appspot.com",
  messagingSenderId: "996853049348",
  appId: "1:996853049348:web:c7a555b72e9bea26deed51",
  measurementId: "G-EJ3PHE6BS7"
}

export function doFirebaseConnect() {
  console.log('Attempting connection to Google Cloud firebase...')
  firebase.initializeApp(firebaseConfig);
}