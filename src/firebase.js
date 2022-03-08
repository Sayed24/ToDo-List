// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAft7zhK0wysxQ4vfujpRt1Otzm5vXFm4",
    authDomain: "todo-app-sayed.firebaseapp.com",
    projectId: "todo-app-sayed",
    storageBucket: "todo-app-sayed.appspot.com",
    messagingSenderId: "22420845159",
    appId: "1:22420845159:web:b7de778257356ac5381ac2",
    measurementId: "G-ZKCW2Q3GB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore()

export { db }