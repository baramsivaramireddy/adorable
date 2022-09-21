// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzEBAkwS8fEEY99gD50KXhvaBX_0SoHEE",
  authDomain: "first-1247e.firebaseapp.com",
  projectId: "first-1247e",
  storageBucket: "first-1247e.appspot.com",
  messagingSenderId: "204749516463",
  appId: "1:204749516463:web:f999acf01a94762e14ee5a",
  measurementId: "G-Q9Y7XSHC9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);