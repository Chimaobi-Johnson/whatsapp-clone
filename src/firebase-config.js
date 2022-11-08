// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSTx760mIMdKV3RkodHbPb92FxJISySg8",
  authDomain: "whatsapp-clone-bb2fb.firebaseapp.com",
  projectId: "whatsapp-clone-bb2fb",
  storageBucket: "whatsapp-clone-bb2fb.appspot.com",
  messagingSenderId: "777956269943",
  appId: "1:777956269943:web:48cda78ceada26d0b8cb72",
  measurementId: "G-29QV1YQ5SE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);