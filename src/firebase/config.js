import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCOQedE3Ctv7DBh9smFsyey_2AaKzVaNjU",
  authDomain: "live-chat-8b7c0.firebaseapp.com",
  projectId: "live-chat-8b7c0",
  storageBucket: "live-chat-8b7c0.appspot.com",
  messagingSenderId: "846900759912",
  appId: "1:846900759912:web:2a90df35b3b59982ab9add"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, timestamp };