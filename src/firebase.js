import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD_9iQhW3bb3jiq2A7DNsCZJ3zEHO_As5w",
  authDomain: "phast-cfbbe.firebaseapp.com",
  projectId: "phast-cfbbe",
  storageBucket: "phast-cfbbe.appspot.com",
  messagingSenderId: "198016239649",
  appId: "1:198016239649:web:81d2ee50c5fb29fbddbb60",
  measurementId: "G-P3M05KZHCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };