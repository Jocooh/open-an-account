import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseButton,
  FirstGuide,
  Guide,
  Highlight,
  InputMoney,
  Message,
  MessageWrapper,
  ModalBackground,
  ModalContainer,
  ModalContents,
  Products,
  SecondGuide,
  SubTitle,
  Title,
  TitleWrapper,
} from "./style";
import Product from "../Product/Product";

const ComparingModal = ({ setComparingModalOpen }) => {
  //*입력한 숫자 콤마 찍어주기
  const inputMoneyRgx = (e) => {
    const input = e.target.value;
    console.log(typeof input);
    return input.to().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

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
              만기 수령액은 비교 상품들 모두 가입이 가능한 기간으로
              산정되었습니다.
            </SubTitle>
          </TitleWrapper>
          <MessageWrapper>
            <Message>
              <div>
                <Highlight>12개월 동안</Highlight>
              </div>
              <div>
                <InputMoney maxLength={13} onChange={inputMoneyRgx} />씩
                저축한다면,
              </div>
              <FirstGuide>
                *금액은 최대 10억원까지 입력할 수 있습니다.
              </FirstGuide>
            </Message>
          </MessageWrapper>
          <Products>
            <Product />
            <Product />
            <Product />
          </Products>
          <SecondGuide>
            *최소, 최대 금액은 선택하신 상품에 따라 달라질 수 있습니다.
          </SecondGuide>
        </ModalContents>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ComparingModal;
