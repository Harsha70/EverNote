import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { firebase } from '@firebase/app'
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCxXJZz3VDznWX5nqYWMtTegmiL6cXoq6o",
  authDomain: "evernote-d9251.firebaseapp.com",
  projectId: "evernote-d9251",
  storageBucket: "evernote-d9251.appspot.com",
  messagingSenderId: "525634523482",
  appId: "1:525634523482:web:ed1ccbc93081dbbe0ba363"
};

firebase.initializeApp(firebaseConfig)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
