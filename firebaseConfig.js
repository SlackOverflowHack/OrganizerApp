// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, Auth, getAuth } from 'firebase/auth';
import { Buffer } from "buffer";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_authDomain,
    projectId: process.env.NEXT_PUBLIC_projectId,
    storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_appId,
    measurementId: process.env.NEXT_PUBLIC_measurementId,
};

// Initialize Firebase
export const firebaseApp = getApps()[0] || initializeApp(firebaseConfig);
export const firebaseDb = getFirestore(firebaseApp);
let a = undefined;
try {
    a = initializeAuth(firebaseApp, {
        persistence: getReactNativePersistence({
            getItem: (key) => SecureStorage.getItemAsync(keyEncode(key)),
            removeItem: (key) => SecureStorage.deleteItemAsync(keyEncode(key)),
            setItem: (key, value) => SecureStorage.setItemAsync(keyEncode(key), value)

        }),
        popupRedirectResolver: undefined
    });
} catch
{
    a = getAuth(firebaseApp);
}
export const auth = a;

const keyEncode = (s) => {
    return Buffer.from(s, 'utf-8').toString('base64').replace(/=/g, '_');
};