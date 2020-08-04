import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDIe3c4dktYyAit-Hp4mYzHpCvMwkNMIrA',
  authDomain: 'todo-a0900.firebaseapp.com',
  databaseURL: 'https://todo-a0900.firebaseio.com',
  projectId: 'todo-a0900',
  storageBucket: 'todo-a0900.appspot.com',
  messagingSenderId: '742012190052',
  appId: '1:742012190052:web:d3972e46d54965ac71ce71',
  measurementId: 'G-DVPG91YSP9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
