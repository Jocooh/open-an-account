import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseButton,
  Guide,
  Highlight,
  InputMoney,
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
import Product from "../Product/Product";

const ComparingModal = ({ setComparingModalOpen }) => {
  const [value, setValue] = useState(0);
  const inputMoneyHandler = (e) => {
    const value = e.target.value; // 입력값을 value 라고 선언
    const numCheck = /^[0-9,]/.test(value); // 입력값이 숫자와 콤마(,)인지 확인 (불린값이 나옴)

    if (!numCheck && value) return; // 숫자가 아닌 문자로 이루어져 있으면 pass! (입력이 x)

    if (numCheck) {
      // 숫자이면
      const numValue = value.replaceAll(",", ""); // 잠시 콤마를 때주고
      value = numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 받은 값에 3자리수마다 콤마를 추가
    }
    setValue(value); // 바깥에서 사용할 수 있도록 state 값에 세팅해주자
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
                <InputMoney maxLength={9} onChange={inputMoneyHandler} />씩
                저축한다면,
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
