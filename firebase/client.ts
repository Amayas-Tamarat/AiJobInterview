import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGZF-civd3KtHB5mSuQvJvllOAydvBm6g",
    authDomain: "prepai-b79df.firebaseapp.com",
    projectId: "prepai-b79df",
    storageBucket: "prepai-b79df.firebasestorage.app",
    messagingSenderId: "232442514583",
    appId: "1:232442514583:web:8e88355bdce2a3d602edd2",
    measurementId: "G-RCXZPM1WN5"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)

