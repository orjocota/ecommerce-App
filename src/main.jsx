import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5UmyvtH5m0ae6ZHkQMAwORpC8GN9yA5g",
  authDomain: "ecommerce-saboralma.firebaseapp.com",
  projectId: "ecommerce-saboralma",
  storageBucket: "ecommerce-saboralma.appspot.com",
  messagingSenderId: "220151094663",
  appId: "1:220151094663:web:813d5dd21635575e2a8722"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
