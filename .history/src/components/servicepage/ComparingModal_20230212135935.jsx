import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseButton,
  ModalBackground,
  ModalContainer,
  Product,
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
        <Title>각 상품을 비교했어요!</Title>
        <Wrapper>
          <Product />
        </Wrapper>
      </ModalContainer>
    </ModalBackground>
  );
}

export default ComparingModal;
