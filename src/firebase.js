// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMo9tEdBOElNZ4yuluLlkFNtnuVrCUH9o",
  authDomain: "anabits-d4665.firebaseapp.com",
  projectId: "anabits-d4665",
  storageBucket: "anabits-d4665.appspot.com",
  messagingSenderId: "151597581483",
  appId: "1:151597581483:web:0ad140519cb41ac2f9e3ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;