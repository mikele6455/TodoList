import { initializeApp, intializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwql8x4vFAjYSdZmXS2SAAsJR2Xo86oKA",
    authDomain: "todolist-10c4a.firebaseapp.com",
    projectId: "todolist-10c4a",
    storageBucket: "todolist-10c4a.appspot.com",
    messagingSenderId: "71630440386",
    appId: "1:71630440386:web:ff7202fc790e9e38daf85b",
    measurementId: "G-M4JN31NFED"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };