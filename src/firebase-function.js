import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { auth } from "./firebase";

function firebaselogIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function firebasesignUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function firebaselogOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  
export {firebaselogIn,firebaselogOut,firebasesignUp,googleSignIn}
