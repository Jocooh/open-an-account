import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Body,
  CloseButton,
  ModalBackground,
  ModalContainer,
  Product,
  Button,
  Scrap,
  Title,
} from "./style";

function ComparingModal({ setPostingModalOpen }) {
  const navigate = useNavigate();

  const CloseComparingModal = () => {
    setComparingModalOpen(false);
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={CloseComparingModal}>닫기</CloseButton>
        <div>각 상품을 비교했어요!</div>
        <Body>
          <Product>
            <Title>A적금</Title>
            <Scrap>스크랩아이콘</Scrap>
            <div>우리은행</div>
            <div>이자율 3%</div>
            <div>최고 금리 4.6%</div>
            <div>저축 금액</div>
            <div>자율적립식</div>
            <div>우대 조건 안내메시지</div>
            <Button>자세히 확인하기</Button>
          </Product>
          <Product>
            <Title>B적금</Title>
            <Scrap>스크랩아이콘</Scrap>
            <div>우리은행</div>
            <div>이자율 3%</div>
            <div>최고 금리 4.6%</div>
            <div>저축 금액</div>
            <div>자율적립식</div>
            <div>우대 조건 안내메시지</div>
            <Button>자세히 확인하기</Button>
          </Product>
          <Product>
            <Title>C적금</Title>
            <Scrap>스크랩아이콘</Scrap>
            <div>우리은행</div>
            <div>이자율 3%</div>
            <div>최고 금리 4.6%</div>
            <div>저축 금액</div>
            <div>자율적립식</div>
            <div>우대 조건 안내메시지</div>
            <Button>자세히 확인하기</Button>
          </Product>
        </Body>
      </ModalContainer>
    </ModalBackground>
  );
}

export default ComparingModal;
