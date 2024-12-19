import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyC2rpSS7rNpcv1Hho8L9G8rL7jyuvj43G4",
    authDomain: "e-commerce-3ea79.firebaseapp.com",
    projectId: "e-commerce-3ea79",
    storageBucket: "e-commerce-3ea79.firebasestorage.app",
    messagingSenderId: "573824004300",
    appId: "1:573824004300:web:9976c66c6a0a3f50955269",
    datebaseURL: "https://e-commerce-3ea79-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig)