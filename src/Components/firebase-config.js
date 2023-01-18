// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKWnjVkO1VgE3B8UXHbcPpXrpaz2xXI4s",
  authDomain: "ecommerce-16222.firebaseapp.com",
  projectId: "ecommerce-16222",
  storageBucket: "ecommerce-16222.appspot.com",
  messagingSenderId: "917611573278",
  appId: "1:917611573278:web:075b868686db1468adbe0f",
  measurementId: "G-5V783HDY0E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
