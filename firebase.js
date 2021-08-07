import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyCdWInTY7kFRrAEeaBAeQ2_SzWiiAtZ7Y4",
  authDomain: "expensestracker-51c02.firebaseapp.com",
  projectId: "expensestracker-51c02",
  storageBucket: "expensestracker-51c02.appspot.com",
  messagingSenderId: "442715327646",
  appId: "1:442715327646:web:948a956d2db7fe1f6cff8f",
  measurementId: "G-QMZ20KGXLV",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
