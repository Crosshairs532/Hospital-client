
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDyUHNC8Fk4M-htlbq4REmJfynzVn_Nlhc",
    authDomain: "hospital-c94c7.firebaseapp.com",
    projectId: "hospital-c94c7",
    storageBucket: "hospital-c94c7.appspot.com",
    messagingSenderId: "1032528598081",
    appId: "1:1032528598081:web:87f9d0cc7b4d685e37e2c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
