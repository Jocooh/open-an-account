import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseButton,
  Guide,
  Highlight,
  Message,
  MessageWrapper,
  ModalBackground,
  ModalContainer,
  ModalContents,
  Products,
  SubTitle,
  Title,
  TitleWrapper,
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
          <TitleWrapper>
            <Title>상품 비교 결과</Title>
            <SubTitle>
              만기 수령액은 비교 상품들의 공통 가입 가능 기간으로
              산정되었습니다.
            </SubTitle>
          </TitleWrapper>
          <MessageWrapper>
            <Message>
              <div>
                <Highlight>12개월 동안</Highlight>
              </div>
              <div>
                <input />씩 저축한다면,
              </div>
              <Guide>*금액은 최대 10억원까지 입력할 수 있습니다.</Guide>
            </Message>
          </MessageWrapper>
          <Products>
            <Product />
            <Product />
            <Product />
          </Products>
          <Guide>
            *최소, 최대 금액은 선택하신 상품에 따라 달라질 수 있습니다.
          </Guide>
        </ModalContents>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ComparingModal;
