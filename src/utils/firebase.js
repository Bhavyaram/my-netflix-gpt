// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEC8okhr5d7mu9toCjkimS0GeExEU9-es",
  authDomain: "netflixgpt-85f2c.firebaseapp.com",
  projectId: "netflixgpt-85f2c",
  storageBucket: "netflixgpt-85f2c.appspot.com",
  messagingSenderId: "850555264772",
  appId: "1:850555264772:web:a86682cdf416355a41fa51",
  measurementId: "G-LS8Q4R5W1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();