import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//For auth
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBKayAlMLGl1ZGSDeQS5ctYu4WZLTp4xoo",
  authDomain: "leoxi-c5242.firebaseapp.com",
  projectId: "leoxi-c5242",
  storageBucket: "leoxi-c5242.appspot.com",
  messagingSenderId: "898565041070",
  appId: "1:898565041070:web:4f65a22bd92cb48177363f",
  measurementId: "G-J4KFEPQF1N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Auth
const auth = getAuth();
const database = getDatabase();

// Initialize Google Auth Provider
let provider = new GoogleAuthProvider();

export {
  auth,
  database,
  provider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
};
