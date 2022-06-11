import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpYbKhnv6uqMVsUf71TqFKyVKvZbQn-js",
  authDomain: "crwn-clothing-db-f1ecd.firebaseapp.com",
  projectId: "crwn-clothing-db-f1ecd",
  storageBucket: "crwn-clothing-db-f1ecd.appspot.com",
  messagingSenderId: "329067405147",
  appId: "1:329067405147:web:5eac6a27d5ffb110d5047e"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
