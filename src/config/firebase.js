import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAFLJBTRtZGaUrpmL39oxxnlOwJvZs8tE0",
//   authDomain: "open-an-account-31857.firebaseapp.com",
//   projectId: "open-an-account-31857",
//   storageBucket: "open-an-account-31857.appspot.com",
//   messagingSenderId: "62978638072",
//   appId: "1:62978638072:web:e3c54540cd4c2b11447b0d",
//   measurementId: "G-ENB9S2CV1E",
// };


const firebaseConfig = {
  //메인 프로젝트
  // apiKey: "AIzaSyAFLJBTRtZGaUrpmL39oxxnlOwJvZs8tE0",
  // authDomain: "open-an-account-31857.firebaseapp.com",
  // projectId: "open-an-account-31857",
  // storageBucket: "open-an-account-31857.appspot.com",
  // messagingSenderId: "62978638072",
  // appId: "1:62978638072:web:e3c54540cd4c2b11447b0d",
  // measurementId: "G-ENB9S2CV1E",

  //*박상우 전용 키
  //apiKey: "AIzaSyCL_AQsnjPdjq-vp8BvukPqza4XYNwMoZw",
  //authDomain: "mytest-b5942.firebaseapp.com",
  //projectId: "mytest-b5942",
  //storageBucket: "mytest-b5942.appspot.com",
  //messagingSenderId: "937704967647",
  //appId: "1:937704967647:web:343f5fabf02e582f82086a",

  // 남마리나
  //apiKey: "AIzaSyCGqsi9EffHd7mdThrQf9z8bUzBKCDPSYQ",
  //authDomain: "open-an-account-e4376.firebaseapp.com",
  //projectId: "open-an-account-e4376",
  //storageBucket: "open-an-account-e4376.appspot.com",
  //messagingSenderId: "474163415216",
  //appId: "1:474163415216:web:1d89e31248fdf725499375",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const db = getFirestore(app);

// // 김원준 파이어베이스 sdk
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBFdGzEbZaCS8ERHkepA1adVEvF-71V9Zw",
//   authDomain: "test-open-an-account.firebaseapp.com",
//   projectId: "test-open-an-account",
//   storageBucket: "test-open-an-account.appspot.com",
//   messagingSenderId: "1068156105304",
//   appId: "1:1068156105304:web:8df7adc3d7240c5f5d902d",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const authService = getAuth(app);
// export const db = getFirestore(app);
