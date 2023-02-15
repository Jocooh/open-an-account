import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseButton,
  FirstGuide,
  Guide,
  Highlight,
  Input,
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
  const [inputValue, setInputValue] = useState("");

  //* 입력한 숫자 콤마찍기
  // const changeInputRgx = (e) => {
  //   const input = e.target.value
  //     .replace(/[^0-9]/g, "")
  //     .replace(/(^0+)/, "")
  //     .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   setInputValue(input);
  // };

  console.log("~~~~~");
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
              <Input
                maxLength={12}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                thousandSeparator=","
                placeholder="금액을 입력해주세요"
                inputLength={inputValue.length}
              />
              원 씩 적립하면
              <FirstGuide>
                *금액은 최대 10억원까지 입력할 수 있습니다.
              </FirstGuide>
            </Message>
          </MessageWrapper>
          <Products>
            <Product inputValue={inputValue} />
            <Product inputValue={inputValue} />
            <Product inputValue={inputValue} />
          </Products>
          <SecondGuide>
            *만기 수령액은 이자소득세를 제외한 (일반과세 기준 이자금액의 15.4%)
            금액입니다.
          </SecondGuide>
        </ModalContents>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ComparingModal;
