// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import analytics if you want to use it
import { getAnalytics } from "firebase/analytics";

const config = {
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  authDomain: "random-spell-generator.firebaseapp.com",
  projectId: "random-spell-generator",
  storageBucket: "random-spell-generator.firebasestorage.app",
  messagingSenderId: "780598549142",
  appId: "1:780598549142:web:1778113ed637d3360f20b7",
  measurementId: "G-KHEHWGK15C"
};

// Initialize Firebase
const app = initializeApp(config);
// Initialize Firestore
export const db = getFirestore(app);
// Initialize Analytics if you want to use it
export const analytics = getAnalytics(app);
