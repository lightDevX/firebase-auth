import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyATxoA2Ux1-lIAWFhEQdzvBqJQ2V6Zga2I",
    authDomain: "fir-auth-mi.firebaseapp.com",
    projectId: "fir-auth-mi",
    storageBucket: "fir-auth-mi.firebasestorage.app",
    messagingSenderId: "880017928921",
    appId: "1:880017928921:web:ece000c3e0feec884184c8"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;