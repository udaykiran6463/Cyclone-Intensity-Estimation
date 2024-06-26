import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'cmpe-295b-master-project-ii.firebaseapp.com',
  projectId: 'cmpe-295b-master-project-ii',
  storageBucket: 'cmpe-295b-master-project-ii.appspot.com',
  messagingSenderId: '739252105280',
  appId: '1:739252105280:web:a2b7445814e41c310f6fa5',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
