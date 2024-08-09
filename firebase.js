// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9CP399oJxwLOY9X5afmJ0u8sbAvje_70",
  authDomain: "headstarter-project2.firebaseapp.com",
  projectId: "headstarter-project2",
  storageBucket: "headstarter-project2.appspot.com",
  messagingSenderId: "386604171636",
  appId: "1:386604171636:web:c50e2e3fcc46d00ab0ac21",
  measurementId: "G-M4GWX52YFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}