import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

//* 만기 수령액
export const Guide = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 34px;
  display: flex;
  align-items: center;
  color: #a3a3a3;
`;
//* 금액
export const TotalCost = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
  display: flex;
  align-items: center;

  /* main */

  color: #6a24ff;
`;

export const ProductBox = styled.div`
  box-sizing: border-box;

  border: 1px solid #e7e7e7;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

//* 상품 이름
export const Prdt_nm = styled.div`
  text-align: center;
`;
//* 스크랩 아이콘
export const Scrap = styled.img`
  width: 41px;
  height: 32px;

  background: #d9d9d9;
  cursor: pointer;

  :hover {
    background-color: #0eea66;
  }
`;
//* 상품설명
export const Info = styled.div`
  align-items: center;
`;
//* 추가 정보
export const Message = styled.div`
  padding: 5px 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;

  color: #a3a3a3;
`;
//* 상품 보러가기
export const Button = styled.button`
  box-sizing: border-box;
  width: 295px;
  height: 33px;
  margin: 5px 10px;

  background: #d9d9d9;
  border: 1px solid #dedede;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: rgba(188, 188, 188, 0.4);
  }
`;
