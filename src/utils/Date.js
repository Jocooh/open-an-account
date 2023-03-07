// Date.now()의 string을 현재 시간으로 변환하는 함수
export const timeToLocaleString = (createdAt) =>
  new Date(createdAt).toLocaleString();
