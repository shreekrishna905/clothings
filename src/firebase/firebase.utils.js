import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBH6-GSzc8L_BPNRtXf9DmmrPAPP2mENes",
  authDomain: "clothing-db-72c3f.firebaseapp.com",
  projectId: "clothing-db-72c3f",
  storageBucket: "clothing-db-72c3f.appspot.com",
  messagingSenderId: "920466644743",
  appId: "1:920466644743:web:14868450029572c680efa2",
  measurementId: "G-N9EVRWTL7P",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
