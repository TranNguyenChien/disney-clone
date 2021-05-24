/** @format */
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1T1JEOC1eD0Q3GpXbMh0XskZ6M-Xl7SQ",
  authDomain: "disney-plus-clone-9b384.firebaseapp.com",
  projectId: "disney-plus-clone-9b384",
  storageBucket: "disney-plus-clone-9b384.appspot.com",
  messagingSenderId: "885403185092",
  appId: "1:885403185092:web:36af8b795e9a1990d3fe91",
  measurementId: "G-QSM5JVLCZ0",
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
