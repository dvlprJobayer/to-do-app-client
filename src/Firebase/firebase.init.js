// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0TlN9JH2iiErr1Fkl5qlnB2lKj45jnXI",
    authDomain: "to-do-app-a926e.firebaseapp.com",
    projectId: "to-do-app-a926e",
    storageBucket: "to-do-app-a926e.appspot.com",
    messagingSenderId: "843163807353",
    appId: "1:843163807353:web:c5abe8e2d11009d4e0aea8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;