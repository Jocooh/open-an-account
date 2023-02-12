import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseButton,
  ModalBackground,
  ModalContainer,
  Product,
  Button,
  Scrap,
  Title,
  Info,
  Wrapper,
  Prdt_nm,
  BaseList,
  Message,
} from "./style";

function ComparingModal({ setComparingModalOpen }) {
  const navigate = useNavigate();

  // const CloseComparingModal = () => {
  //   setComparingModalOpen(false);
  // };

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton
          onClick={() => {
            setComparingModalOpen(false);
          }}
        >
          닫기
        </CloseButton>
        <Title>각 상품을 비교했어요!</Title>
        <Wrapper>
          <Product>
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
          </Product>
        </Wrapper>
      </ModalContainer>
    </ModalBackground>
  );
}

export default ComparingModal;
