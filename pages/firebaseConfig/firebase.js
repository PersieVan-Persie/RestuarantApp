// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg-UhGdoM4Bv2F7ykLe-1TxLSfwaHuK9I",
  authDomain: "resapp-d6a34.firebaseapp.com",
  projectId: "resapp-d6a34",
  storageBucket: "resapp-d6a34.appspot.com",
  messagingSenderId: "688677740509",
  appId: "1:688677740509:web:3c5aa60f9124e4cc2ea034",
  measurementId: "G-S4E6JYCDMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, firestore, analytics};

