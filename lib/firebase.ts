// firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyCgrKT_JgwuTcaFzHZ_33PWCpvu_9x5Flo",
  authDomain: "asasdas-be9f4.firebaseapp.com",
  projectId: "asasdas-be9f4",
  storageBucket: "asasdas-be9f4.firebasestorage.app",
  messagingSenderId: "118361900862",
  appId: "1:118361900862:web:76a7b0c1d9e44c77b54e6f",
  measurementId: "G-VJP8CQSZ0E"
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
