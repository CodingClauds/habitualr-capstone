import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apikey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "habit-database.firebaseapp.com",
  projectId: "habit-database",
  storageBucket: "habit-database.appspot.com",
  messagingSenderId: "611936149522",
  appId: "1:611936149522:web:de1b81be59b1d4caebf8cb",
  measurementId: "G-478J9TXK77",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
