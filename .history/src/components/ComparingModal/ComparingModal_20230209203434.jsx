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
} from "./style";

function ComparingModal({ setPostingModalOpen }) {
  const navigate = useNavigate();
  const [comparingModalOpen, setComparingModalOpen] = useState(false);

  const CloseComparingModal = () => {
    setComparingModalOpen(false);
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={CloseComparingModal}>닫기</CloseButton>
        <Title>각 상품을 비교했어요!</Title>
        <Wrapper>
          <Product>
            <Prdt_nm>A적금</Prdt_nm>
            <Scrap>스크랩아이콘</Scrap>
            <BaseList>
              <div>우리은행</div>
              <div>이자율 3%</div>
              <div>최고 금리 4.6%</div>
              <div>저축 금액</div>
              <div>자율적립식</div>
              <div>우대 조건 안내메시지</div>
            </BaseList>
            <Button>자세히 확인하기</Button>
          </Product>
          <Product>
            <Title>B적금</Title>
            <Scrap>스크랩아이콘</Scrap>
            <Info>
              <div>우리은행</div>
              <div>이자율 3%</div>
              <div>최고 금리 4.6%</div>
              <div>저축 금액</div>
              <div>자율적립식</div>
              <div>우대 조건 안내메시지</div>
            </Info>
            <Button>자세히 확인하기</Button>
          </Product>
          <Product>
            <Title>C적금</Title>
            <Scrap>스크랩아이콘</Scrap>
            <Info>
              <div>우리은행</div>
              <div>이자율 3%</div>
              <div>최고 금리 4.6%</div>
              <div>저축 금액</div>
              <div>자율적립식</div>
              <div>우대 조건 안내메시지</div>
            </Info>
            <Button>자세히 확인하기</Button>
          </Product>
        </Wrapper>
      </ModalContainer>
    </ModalBackground>
  );
}

export default ComparingModal;
