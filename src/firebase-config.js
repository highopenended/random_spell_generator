// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import analytics if you want to use it
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXd9Qk5MyYmH4wq_W8L0-N1QyAPNT_0P0",
  authDomain: "random-spell-generator.firebaseapp.com",
  projectId: "random-spell-generator",
  storageBucket: "random-spell-generator.firebasestorage.app",
  messagingSenderId: "780598549142",
  appId: "1:780598549142:web:1778113ed637d3360f20b7",
  measurementId: "G-KHEHWGK15C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
// Initialize Analytics if you want to use it
export const analytics = getAnalytics(app);
