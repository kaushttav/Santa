import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDEDe9jxpoNrjt-ldJeh7XKTqH6l5Asq8s",
    authDomain: "book-santa-c3ac9.firebaseapp.com",
    projectId: "book-santa-c3ac9",
    storageBucket: "book-santa-c3ac9.appspot.com",
    messagingSenderId: "563325372937",
    appId: "1:563325372937:web:fd5c793f152e85efc146d8"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
