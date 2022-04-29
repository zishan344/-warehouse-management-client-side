// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9c2L8mACAfVbys4jzhCApCC_Aa3TPwW0",
  authDomain: "furniture-warehouse.firebaseapp.com",
  projectId: "furniture-warehouse",
  storageBucket: "furniture-warehouse.appspot.com",
  messagingSenderId: "553984885922",
  appId: "1:553984885922:web:2b5c44cb75a55cb65503fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
