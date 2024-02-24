// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA-xpYM-OHNFG00b1S1TMvxe47ti6tDio",
  authDomain: "test-9baaa.firebaseapp.com",
  projectId: "test-9baaa",
  storageBucket: "test-9baaa.appspot.com",
  messagingSenderId: "836589791028",
  appId: "1:836589791028:web:14e759c6aa7cca3a9b6761",
  measurementId: "G-4QLBHK1FHC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
