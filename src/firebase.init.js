// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC4k7Di4Hz0mI_JcYFUNA5DqoWVoKOuJ4",
    authDomain: "red-onion-resturant-f6369.firebaseapp.com",
    projectId: "red-onion-resturant-f6369",
    storageBucket: "red-onion-resturant-f6369.appspot.com",
    messagingSenderId: "808798380434",
    appId: "1:808798380434:web:a51067a8e5dabb560a614b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;