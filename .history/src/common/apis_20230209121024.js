import axios from "axios";

const API_KEY = "9d9578ef0eefe3d950751d545a5044c8";

export const DEPOSIT_BASE_URL = `https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=${API_KEY}&topFinGrpNo=020000&pageNo=1`;

export const SAVING_BASE_URL = `http://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth=${API_KEY}&topFinGrpNo=020000&pageNo=1`;

// 예금상품 전체 리스트 가져오기
export const allDepositList = () =>
  axios.get(`${DEPOSIT_BASE_URL}`).then((res) => {
    console.log("res :>> ", res);
    return res.data;
  });

// 적금상품 전체 리스트 가져오기
export const allSavingList = () => {
  return axios.get(`${SAVING_BASE_URL}`).then((res) => res.data);
};
