import React from "react";

function Product() {
  return (
    <>
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
    </>
  );
}

export default Product;

export const Product = styled.div`
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
  position: absolute;
  width: 47px;
  height: 58px;
  left: 1244px;
  top: 139px;
  cursor: pointer;

  :hover {
    background-color: rgba(188, 188, 188, 0.4);
  }
`;
export const BaseList = styled.div`
  align-items: center;
`;
export const Message = styled.div`
  color: #3075ff;
`;
export const Button = styled.button`
  box-sizing: border-box;

  position: absolute;
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
