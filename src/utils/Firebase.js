// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYzOm3mBbLr-roy_zQ1oOOdCG5i4ZUAdY",
  authDomain: "crop-sale-5ee07.firebaseapp.com",
  projectId: "crop-sale-5ee07",
  storageBucket: "crop-sale-5ee07.appspot.com",
  messagingSenderId: "135917614311",
  appId: "1:135917614311:web:1e50ecd31303f12cd59e42",
  measurementId: "G-9CVH9T6BMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
