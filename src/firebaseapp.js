import Firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDFl8uA10OfFxDh7N8ijmVcqYywgIWIZtU",
    authDomain: "err404-b4787.firebaseapp.com",
    databaseURL: "https://err404-b4787.firebaseio.com",
    projectId: "err404-b4787",
    storageBucket: "err404-b4787.appspot.com",
    messagingSenderId: "635215370258",
    appId: "1:635215370258:web:0228646b80360be64b60cb",
    measurementId: "G-0MRESDT274"
  };
  // Initialize Firebase
 const firebaseApp =  Firebase.initializeApp(firebaseConfig);
 export const db = firebaseApp.database();
 export const storage = firebaseApp.storage();
