import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5UmyvtH5m0ae6ZHkQMAwORpC8GN9yA5g",
  authDomain: "ecommer-saboralma.firebaseapp.com",
  projectId: "ecommer-saboralma",
  storageBucket: "ecommer-saboralma.appspot.com",
  messagingSenderId: "220151094663",
  appId: "1:220151094663:web:2fdb4116d3f2673c2a8722"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
