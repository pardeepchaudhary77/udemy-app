// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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
export const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase);
export const auth = getAuth(firebase);
//export const auth = getAuth(app)