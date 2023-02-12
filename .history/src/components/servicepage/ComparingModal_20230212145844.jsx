import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseButton,
  ModalBackground,
  ModalContainer,
  ModalContents,
  Title,
} from "./style";
import Product from "./Product";

function ComparingModal({ setComparingModalOpen }) {
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
          <Products>
            <Product />
            <Product />
            <Product />
          </Products>
        </ModalContents>
      </ModalContainer>
    </ModalBackground>
  );
}

export default ComparingModal;
