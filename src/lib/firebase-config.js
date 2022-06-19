// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiHKGFtCEBLTK8nUtUXedXE_unHL6vwkk",
  authDomain: "placea-a1487.firebaseapp.com",
  projectId: "placea-a1487",
  storageBucket: "placea-a1487.appspot.com",
  messagingSenderId: "550842418859",
  appId: "1:550842418859:web:ce96de73b457d9966459ee",
  measurementId: "G-D9TF6LHZWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);