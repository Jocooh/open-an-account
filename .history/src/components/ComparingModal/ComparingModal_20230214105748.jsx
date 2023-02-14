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
  const [input, setInput] = useState("");

  //*입력한 숫자 콤마 찍어주기
  const inputMoneyRgx = (e) => {
    const input = Number(e.target.value);
    const result = input.toLocaleString("ko-KR");
    setInput(result);
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton
          src={require("../../assets/close.png")}
          alt="닫기"
          onClick={() => {
            setComparingModalOpen(false);
          }}
        />
        <ModalContents>
          <TitleWrapper>
            <Title>상품 비교</Title>
            <SubTitle>
              만기 수령액은 비교 상품들 모두 가입이 가능한 기간으로
              산정되었습니다.
            </SubTitle>
          </TitleWrapper>
          <MessageWrapper>
            <Message>
              12개월 동안
              <InputMoney
                maxLength={13}
                type="number"
                value={input}
                onChange={inputMoneyRgx}
                placeholder="금액을 입력해주세요"
              />
              원 씩 적립하면
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
