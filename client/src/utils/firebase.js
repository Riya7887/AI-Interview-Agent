

import { initializeApp } from "firebase/app";
import{browserLocalPersistence, getAuth, GoogleAuthProvider, setPersistence} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-94c5f.firebaseapp.com",
  projectId: "interviewiq-94c5f",
  storageBucket: "interviewiq-94c5f.firebasestorage.app",
  messagingSenderId: "785444187678",
  appId: "1:785444187678:web:c998f13bf1fca133cac80f"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch((error)=> {
    console.error("Persistence error:", error);
});

const provider = new GoogleAuthProvider()

export {auth , provider}