// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC96Oq6bUUkJwkpC8W5C8muPm-qDOFAlqM",
  authDomain: "netflixgpt-9ace2.firebaseapp.com",
  projectId: "netflixgpt-9ace2",
  storageBucket: "netflixgpt-9ace2.appspot.com",
  messagingSenderId: "425483935773",
  appId: "1:425483935773:web:c61f95bc52fafb691e26f4",
  measurementId: "G-Z29EC3H1SF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
