import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0gzmvHhRTMZ4fXi95Pszlri7HEKM3etM",
  authDomain: "olxauth-2873a.firebaseapp.com",
  projectId: "olxauth-2873a",
  storageBucket: "olxauth-2873a.appspot.com",
  messagingSenderId: "494373571678",
  appId: "1:494373571678:web:1a3ea20f8694bd03eff8cf",
  measurementId: "G-2BKD1N0LFZ"
};


export default firebase.initializeApp(firebaseConfig)
