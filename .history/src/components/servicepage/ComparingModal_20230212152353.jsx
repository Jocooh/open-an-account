import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseButton,
  Message,
  ModalBackground,
  ModalContainer,
  ModalContents,
  Products,
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
          <div>
            <Message>6개월 간 50만원씩 저축한다면</Message>
            <div>총 얼마를 모을 수 있을지 계산했어요</div>
          </div>
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
