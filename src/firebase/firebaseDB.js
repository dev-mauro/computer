import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA1v-7umXVUEKrerG5DdkOVuXiEZitp_iM",
  authDomain: "computerscientist-f1ec8.firebaseapp.com",
  projectId: "computerscientist-f1ec8",
  storageBucket: "computerscientist-f1ec8.appspot.com",
  messagingSenderId: "386067658417",
  appId: "1:386067658417:web:2ff1e06d5971b10eaad490"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore( app );

export { db };