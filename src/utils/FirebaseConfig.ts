// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlNiiZBoJDJa40A3gs8qLiuQO76O4XQQY",
  authDomain: "eliteairsoft-797c8.firebaseapp.com",
  projectId: "eliteairsoft-797c8",
  storageBucket: "eliteairsoft-797c8.firebasestorage.app",
  messagingSenderId: "247672417583",
  appId: "1:247672417583:web:b82144a1da34dd1884c5da",
  measurementId: "G-GYZF8F0PS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);