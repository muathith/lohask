// firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyA0ckMgmIcXPyS-3FrYdE8977rQZjusc_I",
  authDomain: "saxca-69420.firebaseapp.com",
  projectId: "saxca-69420",
  storageBucket: "saxca-69420.firebasestorage.app",
  messagingSenderId: "495900201576",
  appId: "1:495900201576:web:72db45025c682d4ed0a1dd",
  measurementId: "G-KTY9ZS5SC6"
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
