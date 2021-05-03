import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNT2Q2CRQHzV2dOp6vJfHsmtytM5MCF_A",
  authDomain: "next-ts-todo.firebaseapp.com",
  projectId: "next-ts-todo",
  storageBucket: "next-ts-todo.appspot.com",
  messagingSenderId: "350296092688",
  appId: "1:350296092688:web:419d9366748d638424da95",
  measurementId: "G-WZLYTQJBX4",
});

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
