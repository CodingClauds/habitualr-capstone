import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// apikey: "AIzaSyBd-m83HAF1_3HxCFi8J4tI_ALSvOIzajg",
// authDomain: "habit-database.firebaseapp.com",
// projectId: "habit-database",
// storageBucket: "habit-database.appspot.com",
// messagingSenderId: "611936149522",
// appId: "1:611936149522:web:de1b81be59b1d4caebf8cb",
// measurementId: "G-478J9TXK77",

const firebaseConfig = {
  apikey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: "habit-database",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID,
};

// firebase.initializeApp(firebaseConfig);
// export default firebase;

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
