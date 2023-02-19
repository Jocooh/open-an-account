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
  width: 336px;
  aspect-ratio: 3/2;
  object-fit: contain;
  mix-blend-mode: color-burn;
  border: 1px solid #e7e7e7;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px 15px 20px;
`;

//* 상품 이름, 스크랩 아이콘
export const Name = styled.div`
  display: flex;
  justify-content: space-between;
`;
//* 상품 이름
export const Prdt_nm = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 27px;
  color: #000000;
`;

//* 상품설명
export const Info = styled.div`
  margin-top: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */

  color: #000000;
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
