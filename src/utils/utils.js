import { firebaseConfig } from "../config/firebase";

// Date.now()의 string을 현재 시간으로 변환하는 함수
export const timeToLocaleString = (createdAt) =>
  new Date(createdAt).toLocaleString();

// isLoggedIn 유틸화
export const isLoggedIn = sessionStorage.getItem(
  `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
);
