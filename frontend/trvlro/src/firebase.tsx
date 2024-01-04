import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, NextOrObserver, User, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirebaseConfig } from './firebase-config';

const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signUpUser = async (
    email: string,
    password: string
) => {
    if (!email && !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUser = async (
    email: string,
    password: string
) => {
    if (!email && !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signInUserWithGoogle = async () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
};

export const userStateListener = (callback: NextOrObserver<User>) => {
    return onAuthStateChanged(auth, callback)
}

export const SignOutUser = async () => await signOut(auth);