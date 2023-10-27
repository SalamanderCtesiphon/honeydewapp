// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBgk_wrGlBEc6aYj2RRXz2LCGLsHBsHSG8',
  authDomain: 'project-manager-9cb45.firebaseapp.com',
  projectId: 'project-manager-9cb45',
  storageBucket: 'project-manager-9cb45.appspot.com',
  messagingSenderId: '688565818375',
  appId: '1:688565818375:web:5c82f85afb1df54eaf86a2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
