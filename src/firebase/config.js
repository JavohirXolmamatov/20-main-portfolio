// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore uchun import
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDGUX_roJdWMjsLdbBqLpo90x4htJ0gtE",
  authDomain: "login-e5ed0.firebaseapp.com",
  projectId: "login-e5ed0",
  storageBucket: "login-e5ed0.firebasestorage.app",
  messagingSenderId: "307503392293",
  appId: "1:307503392293:web:9454742e114313921741cc",
  measurementId: "G-4H3H0DDYNP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
