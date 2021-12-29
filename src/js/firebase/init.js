import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  deleteField,
} from "firebase/firestore";

import firebase from "firebase/app";
import "firebase/database";
//For auth
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getDatabase,
  orderByChild,
  ref,
  equalTo,
  Database,
  set,
  child,
  update,
  push,
  remove,
  get,
} from "firebase/database";

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

// Initialize Database
const db = getFirestore();
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
  db,
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
  deleteField,
  ref,
  set,
  child,
  update,
  push,
  remove,
  get,
  getDoc
};

const a = async () => {
  const querySnapshot2 = await getDocs(collection(db, "notifications"));

  querySnapshot2.forEach((doc) => {
    console.log(doc.data());
  });
};
