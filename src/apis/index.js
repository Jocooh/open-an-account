import axios from "axios";

//여기 키 환경변수로 작업예정
// const MY_ADDRESS = "6f3a6ea55869e0bdccf38e3e5dcc145e" - 성아님 금감원 API KEY
// cc8ea7a35d5a580209ff422991e8be95 - 원준 금감원 API KEY

export const fetchUrl = async () => {
  const { data } = await axios.get(
    `https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1`
  );
  return data.json();
};
export const DEPOSIT_URL =
  "/finlifeapi/depositProductsSearch.json?auth=bfb2f61f47f5d5cd497ffefc94274829&topFinGrpNo=020000&pageNo=1";

//적금정보 불러오는 함수
export const FetchSavingLists = async () => {
  const { data } = await axios.get(
    ` https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1`
  );
  return data;
};

//예금정보 불러오는 함수
export const FetchLists = async () => {
  const { data } = await axios.get(
    ` https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1`
  );
  return data;
};
