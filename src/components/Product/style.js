import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 342px;
  max-height: 403px;

  @media (max-width: 480px) {
  }
`;

//* 만기 수령액
export const Guide = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 34px;
  display: flex;
  align-items: center;
  margin-left: 0;
  color: #a3a3a3;
  @media (max-width: 480px) {
    display: none;
  }
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

  color: #a3a3a3;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ProductBox = styled.div`
  box-sizing: border-box;
  min-width: 25vw;
  min-height: 37vh;
  border: 1px solid #e7e7e7;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 15px 20px;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    min-width: 315px;
    min-height: 150px;
  }
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
  font-size: 16px;
  line-height: 22px;
  color: #000000;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const Logo = styled.img`
  aspect-ratio: 4/3;
  width: 5vw;
  max-width: 39px;
  padding-right: 8px;
  object-fit: contain;
`;

//* 상품설명
export const FullInfo = styled.div`
  /* height: 270px; */
  overflow: auto;
  white-space: pre-wrap;

  /* 스크롤바 설정*/
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* 스크롤바 막대 설정*/
  ::-webkit-scrollbar-thumb {
    background: #a3a3a3;
    border-radius: 25px;
  }

  /* 스크롤바 뒷 배경 설정*/
  ::-webkit-scrollbar-track {
    background-color: #ffffff;
  }
`;
export const Info = styled.div`
  margin-top: 20px;
  word-break: keep-all;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 20px;
  }
`;
//* 추가 정보
export const Message = styled.div`
  padding: 5px 30px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;

  color: #a3a3a3;

  @media (max-width: 480px) {
    line-height: 20px;
  }
`;

export const Scrap = styled.div`
  display: flex;
  padding: 2%;
  margin: auto 0 0 auto;

  /* @media (max-width: 480px) {
    width: 14px;
    height: 19px;
  } */
`;
