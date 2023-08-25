// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCefJL8CId2yRJFSsqg34K0_zUEs0IMifA",
  authDomain: "udemy-app-22748.firebaseapp.com",
  projectId: "udemy-app-22748",
  storageBucket: "udemy-app-22748.appspot.com",
  messagingSenderId: "664393138111",
  appId: "1:664393138111:web:4a7b2358d82665dc9f2b0a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;
//export const auth = getAuth(app)