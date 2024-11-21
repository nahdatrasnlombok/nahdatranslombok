// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-CgMjTmHtSc6aNSf0WLFje7Cy000HqtU",
  authDomain: "dara-trans-lombok.firebaseapp.com",
  projectId: "dara-trans-lombok",
  storageBucket: "dara-trans-lombok.appspot.com",
  messagingSenderId: "601243349304",
  appId: "1:601243349304:web:af7c24a3b67ffb3e51d1cd",
  measurementId: "G-QWCZ7SN5FH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
