// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBRSj1_xAu-7dDU7flEN9qQ9l2s2d1mQ9w",
  authDomain: "test-dbf2d.firebaseapp.com",
  projectId: "test-dbf2d",
  storageBucket: "test-dbf2d.firebasestorage.app",
  messagingSenderId: "38052779800",
  appId: "1:38052779800:web:1d43053d1621f49762306d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()