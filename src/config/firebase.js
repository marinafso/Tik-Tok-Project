// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB2jrAf3bob0oC3EhVNo5LGXr175KYaPA8",
  authDomain: "jornada-dev-tiktok---marina.firebaseapp.com",
  projectId: "jornada-dev-tiktok---marina",
  storageBucket: "jornada-dev-tiktok---marina.appspot.com",
  messagingSenderId: "102131362694",
  appId: "1:102131362694:web:6b465907449fa125889a07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;