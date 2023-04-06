import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmeyOuagFWY0SQSEH_aZF-uLaLDlUWYlQ",
    authDomain: "lift-log-0.firebaseapp.com",
    projectId: "lift-log-0",
    storageBucket: "lift-log-0.appspot.com",
    messagingSenderId: "432625225379",
    appId: "1:432625225379:web:67247aa8a706b31a883916",
    measurementId: "G-CC153Q8PVL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestoreDatabase = getFirestore(app)

