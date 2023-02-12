import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseButton,
  ModalBackground,
  ModalContainer,
  Title,
  Wrapper,
} from "./style";
import Product from "./Product";

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
        <ModalContents>
          <Title>
            <div>상품 비교 결과</div>
            <div>상품 가입기간을 꼭 확인해주세요!</div>
          </Title>
          <Wrapper>
            <Product />
            <Product />
            <Product />
          </Wrapper>
        </ModalContents>
      </ModalContainer>
    </ModalBackground>
  );
}

export default ComparingModal;
