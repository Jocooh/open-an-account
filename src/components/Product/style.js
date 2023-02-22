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
  margin-left: 0;
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
  margin-left: 0;

  color: #6a24ff;
`;

export const ProductBox = styled.div`
  box-sizing: border-box;
  width: 336px;
  min-height: 450px;
  aspect-ratio: 3/2;
  object-fit: contain;
  border: 1px solid #e7e7e7;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding: 20px 20px 15px 20px;
  margin-bottom: 10px;
`;

//* 상품 이름
export const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
export const Logo = styled.img`
  aspect-ratio: 4/3;
  width: 40px;
  padding-right: 8px;
  object-fit: contain;
`;

//* 상품설명
export const Info = styled.div`
  margin-top: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  word-break: keep-all;
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

export const Scrap = styled.div`
  display: flex;
  /* position: fixed; */
  /* justify-content: end; */
  margin: auto 0 0 0;
`;
