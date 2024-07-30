import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB5U11hPTVUzx5E-cXTFPW4-hfazslBCUA",
  authDomain: "comision-57790.firebaseapp.com",
  projectId: "comision-57790",
  storageBucket: "comision-57790.appspot.com",
  messagingSenderId: "277895239348",
  appId: "1:277895239348:web:62d33d6c5729c018c169e1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
