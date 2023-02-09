import axios from "axios";

const API_KEY = "fa7447ee8286e17303f08f66d1f527c4";

export const DEPOSIT_BASE_URL = `http://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=${API_KEY}&topFinGrpNo=020000&pageNo=1`;

export const SAVING_BASE_URL = `http://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth=${API_KEY}&topFinGrpNo=020000&pageNo=1`;

// 예금상품 전체 리스트 가져오기
export const allDepositList = (nextPageToken) => {
  return axios.get(`${DEPOSIT_BASE_URL}`).then((res) => res.data);
};

// wjrrma상품 전체 리스트 가져오기
export const allSavingList = (nextPageToken) => {
  return axios.get(`${SAVING_BASE_URL}`).then((res) => res.data);
};
