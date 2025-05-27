// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBw-No20OfdBhz4pK9NhgqGKrff6Bzs-Z4',
  authDomain: 'esign-5984b.firebaseapp.com',
  projectId: 'esign-5984b',
  storageBucket: 'esign-5984b.firebasestorage.app',
  messagingSenderId: '666687816952',
  appId: '1:666687816952:web:d993b98088af53cc65e70d',
  measurementId: 'G-E922XXDZXB',
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// ✅ Named exports
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
