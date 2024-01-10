// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhshQeRVWPiQMzrsKPGzL8ww6bdhbxShE",
  authDomain: "react-typescript-chat-todo-app.firebaseapp.com",
  projectId: "react-typescript-chat-todo-app",
  storageBucket: "react-typescript-chat-todo-app.appspot.com",
  messagingSenderId: "527875174886",
  appId: "1:527875174886:web:2785c5d2c26d4b9686e627",
  measurementId: "G-PXFRJ50E88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);