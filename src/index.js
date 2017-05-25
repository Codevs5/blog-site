import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCjR0rBbIEAh3NQXyCgqOCoKZ1DYOoNVMQ",
    authDomain: "codevs-test.firebaseapp.com",
    databaseURL: "https://codevs-test.firebaseio.com",
    projectId: "codevs-test",
    storageBucket: "codevs-test.appspot.com",
    messagingSenderId: "464619208597"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
