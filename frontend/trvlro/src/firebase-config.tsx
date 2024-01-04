import {initializeApp} from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

export function getFirebaseConfig() {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.ts');
    } else {
      return firebaseConfig;
    }
  }    

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const provider = new GoogleAuthProvider();