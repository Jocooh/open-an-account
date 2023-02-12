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

  return (
    <Wrapper>
      <TotalCost>3,030,250원</TotalCost>
      <ProductBox>
        <Prdt_nm>{baseLists[0]?.fin_prdt_nm}</Prdt_nm>
        <Scrap>스크랩아이콘</Scrap>
        <Info>
          <div>{baseLists[0]?.kor_co_nm}</div>
          <div>
            이자율
            {optionLists[0]?.save_trm === "12" && optionLists[0]?.intr_rate}
          </div>
          <div>최고 금리 {optionLists[0]?.intr_rate2}</div>
          <div>{optionLists[0]?.intr_rate_type_nm}</div>
          <div>자율적립식</div>
        </Info>
        <Message>{baseLists[0].etc_note}</Message>
        <Button>자세히 확인하기</Button>
      </ProductBox>
    </Wrapper>
  );
}

export default Product;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
`;
export const Prdt_nm = styled.div`
  text-align: center;
`;

export const Scrap = styled.button`
  width: 41px;
  height: 40px;

  background: #d9d9d9;
  cursor: pointer;

  :hover {
    background-color: #ea770e;
  }
`;
export const Info = styled.div`
  align-items: center;
`;
export const Message = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */

  /* black-30 */
  color: #a3a3a3;
`;
export const Button = styled.button`
  box-sizing: border-box;
  width: 342px;
  height: 62px;
  left: 949px;
  top: 664px;

  background: #d9d9d9;
  border: 1px solid #dedede;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: rgba(188, 188, 188, 0.4);
  }
`;
