import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-bvIT7U15UFIzLUXglZBbLk3sdZjTa6E",
  authDomain: "facebook-clone-001-1fb0a.firebaseapp.com",
  projectId: "facebook-clone-001-1fb0a",
  storageBucket: "facebook-clone-001-1fb0a.appspot.com",
  messagingSenderId: "1028740065247",
  appId: "1:1028740065247:web:fd84d4b5b386c3d550866a",
  measurementId: "G-WEGEFEM8ME"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;