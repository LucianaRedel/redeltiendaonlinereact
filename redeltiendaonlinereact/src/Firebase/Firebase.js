
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-4Q-k3kKiLEheH9RGqUY2NL_L_0sEGV0",
  authDomain: "lrtiendaonline-ea57b.firebaseapp.com",
  projectId: "lrtiendaonline-ea57b",
  storageBucket: "lrtiendaonline-ea57b.appspot.com",
  messagingSenderId: "1075182326663",
  appId: "1:1075182326663:web:64602ec5c5ac302e613922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
