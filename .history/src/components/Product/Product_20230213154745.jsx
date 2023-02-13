import React, { useState, axios } from "react";
import styled from "styled-components";

function Product() {
  const [baseLists, setBaseLists] = useState([]);
  const [optionLists, setOptionLists] = useState([]);
  const bankListFetch = async () => {
    const { data } = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1"
    );
    setBaseLists(data?.result.baseList);
    setOptionLists(data?.result.optionList);
  };

  console.log("--------------------------");
  console.log("상품명", baseLists[0]?.fin_prdt_nm);
  console.log("은행명", baseLists[0]?.kor_co_nm);
  console.log(
    "12개월의 이자율",
    optionLists[0]?.save_trm === "12" ? optionLists[0]?.intr_rate : null
  );
  console.log("최고금리", optionLists[0]?.intr_rate2);
  console.log("기타 정보", baseLists[0]?.etc_note);
  return (
    <Wrapper>
      <Guide>만기 수령액</Guide>
      <TotalCost>3,030,250원</TotalCost>
      <ProductBox>
        <Prdt_nm>우리적금</Prdt_nm>
        {/* <Scrap onClick={updateScrap} style={{ color: changeColor }} /> */}
        <Info>
          <div>우리은행</div>
          <div>이자율3%</div>
          <div>최고 금리 4.6%</div>
          <div>최소 상품 가입기간 6개월</div>
        </Info>
        <Message>
          <li>중도 해지가 불가능해요</li>
          <li>최소 10 최대 30</li>
        </Message>
        <Button>상품 보러가기</Button>
      </ProductBox>
    </Wrapper>
  );
}

export default Product;

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
export const Scrap = styled.button`
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

  background: #d9d9d9;
  border: 1px solid #dedede;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: rgba(188, 188, 188, 0.4);
  }
`;
