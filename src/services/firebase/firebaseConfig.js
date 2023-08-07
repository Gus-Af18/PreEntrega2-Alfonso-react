import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD2zumUTS82pf6GHat3mSGI72Q_FOYUbg",
  authDomain: "tortas-artesanales-react.firebaseapp.com",
  projectId: "tortas-artesanales-react",
  storageBucket: "tortas-artesanales-react.appspot.com",
  messagingSenderId: "733041677565",
  appId: "1:733041677565:web:3c85ed51d7eff447195a94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);