// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2rpSS7rNpcv1Hho8L9G8rL7jyuvj43G4",
    authDomain: "e-commerce-3ea79.firebaseapp.com",
    projectId: "e-commerce-3ea79",
    storageBucket: "e-commerce-3ea79.appspot.com",
    messagingSenderId: "573824004300",
    appId: "1:573824004300:web:9976c66c6a0a3f50955269",
    databaseURL: "https://e-commerce-3ea79-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export
export const auth = getAuth(app);
export default app;
