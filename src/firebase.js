import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAZ7XNNFa9srasJjNBTWLthcjl5V4N_3hU",
    authDomain: "facebook-messanger-clone-e3402.firebaseapp.com",
    databaseURL: "https://facebook-messanger-clone-e3402.firebaseio.com",
    projectId: "facebook-messanger-clone-e3402",
    storageBucket: "facebook-messanger-clone-e3402.appspot.com",
    messagingSenderId: "796641266106",
    appId: "1:796641266106:web:aeb84b14ce4b76b75bb583"
 
});

const db=firebaseApp.firestore();

export default db;