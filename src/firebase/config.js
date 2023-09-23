
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-VgqCxGpxTQKpOAmUZH3tZ_qHfd92hL4",
  authDomain: "coder-raad.firebaseapp.com",
  projectId: "coder-raad",
  storageBucket: "coder-raad.appspot.com",
  messagingSenderId: "971441342298",
  appId: "1:971441342298:web:52165666d395beb2835563"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
