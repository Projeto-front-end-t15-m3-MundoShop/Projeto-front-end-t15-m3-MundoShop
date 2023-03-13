// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGL0fG0cr6uasR4i3KJujl3wJxgh5Ii-A",
  authDomain: "mundoshop---projeto-front-end.firebaseapp.com",
  projectId: "mundoshop---projeto-front-end",
  storageBucket: "mundoshop---projeto-front-end.appspot.com",
  messagingSenderId: "1078708067762",
  appId: "1:1078708067762:web:239812a73042705f87d8ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)