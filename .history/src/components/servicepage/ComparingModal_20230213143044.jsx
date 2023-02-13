import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseButton,
  Highlight,
  Message,
  ModalBackground,
  ModalContainer,
  ModalContents,
  Products,
  SubTitle,
  Title,
} from "./style";
import Product from "./Product";

const ComparingModal = ({ setComparingModalOpen }) => {
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
          <Title>상품 비교 결과</Title>
          <SubTitle>상품 가입기간을 꼭 확인해주세요!</SubTitle>

          <Message>
            <div>
              <Highlight>12개월간</Highlight>
            </div>
            <div>
              <input />씩 저축한다면,
            </div>
          </Message>
          <Products>
            <Product />
            <Product />
            <Product />
          </Products>
        </ModalContents>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ComparingModal;
