// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAvRnsS_FHmaFrefJEGipXYVfzKF6cY5cQ",
  authDomain: "testproject-f6c00.firebaseapp.com",
  projectId: "testproject-f6c00",
  storageBucket: "testproject-f6c00.firebasestorage.app",
  messagingSenderId: "309094742599",
  appId: "1:309094742599:web:31cd56f488c35d50f18f62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
