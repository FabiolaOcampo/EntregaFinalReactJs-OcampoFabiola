import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";

import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseConfig = {
  apiKey: "AIzaSyA5BCuskppU0dGrUiM85wbIfWXLq9GLcWU",
  authDomain: "ecommerce-fe-e019e.firebaseapp.com",
  projectId: "ecommerce-fe-e019e",
  storageBucket: "ecommerce-fe-e019e.appspot.com",
  messagingSenderId: "206434625521",
  appId: "1:206434625521:web:79258d4f36eb4a568a8650"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
