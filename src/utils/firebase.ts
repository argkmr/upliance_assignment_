import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: "upliance-assignment.firebaseapp.com",
    projectId: "upliance-assignment",
    storageBucket: "upliance-assignment.appspot.com",
    messagingSenderId: "597916144217",
    appId: "1:597916144217:web:e76ee747bfbfb1337c1748"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;