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
  const [inputValue, setInputValue] = useState("");
  const [inputColor, setInputColor] = useState("black");

  //* 입력한 숫자 콤마찍기, 입력칸 색 바꿔주기
  const changeInputColor = (e) => {
    const input = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/(^0+)/, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setInputValue(input);

    const inputNum = parseInt(input.replace(/,/g, ""));

    console.log("input<10000 :>> ", inputNum < 10000);
    console.log("input===1000000000 :>> ", inputNum === 1000000000);

    if (inputNum < 10000) {
      setInputColor("#FF0000");
    } else {
      setInputColor("#6A24FF");
    }
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
                maxLength={12}
                value={inputValue}
                onChange={changeInputColor}
                placeholder="금액을 입력해주세요"
                inputValue={inputValue}
                style={
                  inputNum < 10000
                    ? { border: "1px solid #6A24FF" }
                    : { border: "1px solid #FF0000" }
                }
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
