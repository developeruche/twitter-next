// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOchF3PvIeodN-GW-qrPS0mAbGoi4ETjs",
  authDomain: "twitter-clone-9cef8.firebaseapp.com",
  projectId: "twitter-clone-9cef8",
  storageBucket: "twitter-clone-9cef8.appspot.com",
  messagingSenderId: "850758849888",
  appId: "1:850758849888:web:07c4900e3a6ec1812a7a05",
  measurementId: "G-T1KLLCWLT3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
