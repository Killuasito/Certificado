import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Substitua estas informações pelas suas credenciais do Firebase
  apiKey: "AIzaSyC7f37Dk_sVvEuswXSuHxnBh4bW-uuEvGk",
  authDomain: "certificado-bd2bc.firebaseapp.com",
  projectId: "certificado-bd2bc",
  storageBucket: "certificado-bd2bc.firebasestorage.app",
  messagingSenderId: "604135374199",
  appId: "1:604135374199:web:6cec94122a363502e87572",
  measurementId: "G-3D41DC12SP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
