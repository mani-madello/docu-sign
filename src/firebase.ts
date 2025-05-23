// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDG2Y73r_4P5oc-2pBtRKei5GWRYe1-pR8',
  authDomain: 'signeasy-t8srw.firebaseapp.com',
  projectId: 'signeasy-t8srw',
  storageBucket: 'signeasy-t8srw.firebasestorage.app',
  messagingSenderId: '561677388792',
  appId: '1:561677388792:web:134cdee84397274e03a40d',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
