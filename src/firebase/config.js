// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtuux4-0G3N4Y0Fxy32WeKeAOsdGA5kvM",
  authDomain: "react-cursos-2-5871c.firebaseapp.com",
  projectId: "react-cursos-2-5871c",
  storageBucket: "react-cursos-2-5871c.appspot.com",
  messagingSenderId: "585329405126",
  appId: "1:585329405126:web:dcead6dd849df27bbc7bc7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );