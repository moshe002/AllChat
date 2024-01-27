// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FIREBASE_API_KEY:string = import.meta.env.VITE_FIREBASE_API_KEY; 

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "chat-app-translator-9036d.firebaseapp.com",
  projectId: "chat-app-translator-9036d",
  storageBucket: "chat-app-translator-9036d.appspot.com",
  messagingSenderId: "949388059162",
  appId: "1:949388059162:web:0ae05c33bac18b8b0de7a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);