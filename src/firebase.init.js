// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUzUSm2OKbCZUpoFd8aH-zHZyR3rzOoyE",
  authDomain: "roommate-2a55b.firebaseapp.com",
  projectId: "roommate-2a55b",
  storageBucket: "roommate-2a55b.firebasestorage.app",
  messagingSenderId: "731815899187",
  appId: "1:731815899187:web:0c6c783797c28681947346"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);