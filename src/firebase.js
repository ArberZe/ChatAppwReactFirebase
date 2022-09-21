import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8XpygDXkozdeUNawdAhEbEr3eqtNGWPw",
  authDomain: "chatapp-d68eb.firebaseapp.com",
  projectId: "chatapp-d68eb",
  storageBucket: "chatapp-d68eb.appspot.com",
  messagingSenderId: "438384075724",
  appId: "1:438384075724:web:d319b456bf7df7e46f3369"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()