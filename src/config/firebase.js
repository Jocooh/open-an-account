import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const db = getFirestore(app);

export function useAuth() {
  const [currentUser2, setCurrentUser2] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(authService, (user) =>
      setCurrentUser2(user)
    );
    return unsub;
  }, []);

  return currentUser2;
}
