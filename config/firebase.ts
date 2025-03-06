// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqhh1cjziW3t9ql9t3yBFrBm642wxpUjU",
  authDomain: "expense-tracker-e77d2.firebaseapp.com",
  projectId: "expense-tracker-e77d2",
  storageBucket: "expense-tracker-e77d2.firebasestorage.app",
  messagingSenderId: "940255390187",
  appId: "1:940255390187:web:aaf78e5f3cf83b575391ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// db
export const firestore = getFirestore(app);
