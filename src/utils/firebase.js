// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMznIzKnww3NEKBVK8JpkxBHBeDx1nIws",
  authDomain: "netflix-gpt-e5a13.firebaseapp.com",
  projectId: "netflix-gpt-e5a13",
  storageBucket: "netflix-gpt-e5a13.appspot.com",
  messagingSenderId: "584640425858",
  appId: "1:584640425858:web:6f4a3c21a509e3644a699b",
  measurementId: "G-Z9L73S8V24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
