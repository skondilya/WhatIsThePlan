  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC0RBmOFklE-fcf0RGI6KmL0TZl_zizbHo",
    authDomain: "partyplan-79554.firebaseapp.com",
    databaseURL: "https://partyplan-79554.firebaseio.com",
    projectId: "partyplan-79554",
    storageBucket: "partyplan-79554.appspot.com",
    messagingSenderId: "252238606565",
    appId: "1:252238606565:web:6c04415428e8548ad4640c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase 