// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClAjxGwB7oRkgKsqtSt1xfHXytRhY9HR4",
  authDomain: "bitsons.firebaseapp.com",
  projectId: "bitsons",
  storageBucket: "bitsons.appspot.com",
  messagingSenderId: "349569612439",
  appId: "1:349569612439:web:21e3b0e6b83f6e6a2247d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, app , provider};