// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJlITqCchllMrjeGseHW4rVcelGjFipHg",
  authDomain: "shopping-karts.firebaseapp.com",
  projectId: "shopping-karts",
  storageBucket: "shopping-karts.appspot.com",
  messagingSenderId: "480437758559",
  appId: "1:480437758559:web:8373c9b853540d2edc89ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;