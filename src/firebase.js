import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqizL4_7VW_kZdTxKcvTrpf1ewsK66NSE",
  authDomain: "clone-6ae68.firebaseapp.com",
  databaseURL: "https://clone-6ae68-default-rtdb.firebaseio.com",
  projectId: "clone-6ae68",
  storageBucket: "clone-6ae68.appspot.com",
  messagingSenderId: "529739391088",
  appId: "1:529739391088:web:425c30efa43d75821c54b5",
  measurementId: "G-C9N3BC8E6G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};