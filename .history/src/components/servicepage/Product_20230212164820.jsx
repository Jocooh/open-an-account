import React from "react";
import styled from "styled-components";

function Product() {
  return (
    <Wrapper>
      <TotalCost>3,030,250원</TotalCost>
      <ProductBox>
        <Prdt_nm>C적금</Prdt_nm>
        <Scrap>스크랩아이콘</Scrap>
        <BaseList>
          <div>우리은행</div>
          <div>이자율 3%</div>
          <div>최고 금리 4.6%</div>
          <div>저축 금액</div>
          <div>자율적립식</div>
          <Message>우대 조건 안내 메시지</Message>
        </BaseList>
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
  width: 172px;
  height: 32px;
  left: 444px;
  top: 417px;

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
  width: 399px;
  height: 640px;
  left: 909px;
  top: 113px;

  border: 1px solid #e7e7e7;
  border-radius: 17px;
`;
export const Prdt_nm = styled.div`
  text-align: center;
`;

export const Scrap = styled.button`
  /* position: absolute; */
  width: 41px;
  height: 40px;
  left: 722px;
  top: 490px;

  background: #d9d9d9;
  cursor: pointer;

  :hover {
    background-color: #ea770e;
  }
`;
export const BaseList = styled.div`
  align-items: center;
`;
export const Message = styled.div`
  /* position: absolute; */
  width: 224px;
  height: 67px;
  left: 464px;
  top: 719px;

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
