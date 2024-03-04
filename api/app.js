// Import the functions you need from the SDKs you need
import { getDatabase } from "@firebase/database";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGQeAy84UeQZ0nDqMv978PJ5HQsx1pgwc",
  authDomain: "react-native-tp.firebaseapp.com",
  projectId: "react-native-tp",
  storageBucket: "react-native-tp.appspot.com",
  messagingSenderId: "464501116118",
  appId: "1:464501116118:web:34d653e97410415dddcd77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, database, firestore, storage };
