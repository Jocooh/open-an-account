import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //*메인 프로젝트 1
  // apiKey: "AIzaSyAFLJBTRtZGaUrpmL39oxxnlOwJvZs8tE0",
  // authDomain: "open-an-account-31857.firebaseapp.com",
  // projectId: "open-an-account-31857",
  // storageBucket: "open-an-account-31857.appspot.com",
  // messagingSenderId: "62978638072",
  // appId: "1:62978638072:web:e3c54540cd4c2b11447b0d",
  // measurementId: "G-ENB9S2CV1E",

  //*박상우 전용 키
  // apiKey: "AIzaSyCL_AQsnjPdjq-vp8BvukPqza4XYNwMoZw",
  // authDomain: "mytest-b5942.firebaseapp.com",
  // projectId: "mytest-b5942",
  // storageBucket: "mytest-b5942.appspot.com",
  // messagingSenderId: "937704967647",
  // appId: "1:937704967647:web:343f5fabf02e582f82086a",

  //*남마리나
  // apiKey: "AIzaSyBb6cDXvw42bGqPj5ORUgjTSmGzpGaeAkA",
  // authDomain: "jojoa-c3a5b.firebaseapp.com",
  // projectId: "jojoa-c3a5b",
  // storageBucket: "jojoa-c3a5b.appspot.com",
  // messagingSenderId: "848779014558",
  // appId: "1:848779014558:web:e7b9a18a852095e4abe68f",

  //*남마리나2
  apiKey: "AIzaSyBslbzRlInpFhHV2NnOwbjH2K6KOs8hHqU",
  authDomain: "sajojoa-aea1c.firebaseapp.com",
  projectId: "sajojoa-aea1c",
  storageBucket: "sajojoa-aea1c.appspot.com",
  messagingSenderId: "648301726670",
  appId: "1:648301726670:web:20818e17661a9c050fb99f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const db = getFirestore(app);
