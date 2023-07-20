import {getfirestore} from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7LHdOaZZ43UBG4fxpsHC2tJmSHH44XJo",
  authDomain: "tortasartesanales-c676d.firebaseapp.com",
  projectId: "tortasartesanales-c676d",
  storageBucket: "tortasartesanales-c676d.appspot.com",
  messagingSenderId: "492340963000",
  appId: "1:492340963000:web:fb6187e2caf16c1f97b64d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getfirestore(app);