import React, { useState } from "react";
import { authService, db } from "../../config/firebase";
import {
  CloseButton,
  FirstGuide,
  Input,
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

const ComparingModal = ({
  setComparingModalOpen,
  selectedProduct,
  selectedProductRate,
  selectedProductRate2,
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton
          onClick={() => {
            setComparingModalOpen(false);
          }}
        />
        {/* <CloseButton
          src={require("../../assets/close.png")}
          alt="닫기"
          onClick={() => {
            setComparingModalOpen(false);
          }}
        /> */}
        <ModalContents>
          <TitleWrapper>
            <Title>상품 비교</Title>
            <SubTitle>
              만기 수령액은 비교 상품들 모두 가입이 가능한 기간으로
              산정되었습니다.
            </SubTitle>
          </TitleWrapper>
          <MessageWrapper>
            {selectedProduct[0].category === "예금 기본 정보" ? (
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
                원을 예치하면
                <FirstGuide>
                  *금액은 최대 10억원까지 입력할 수 있습니다.
                </FirstGuide>
              </Message>
            ) : (
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
            )}
          </MessageWrapper>
          <Products>
            <Product
              inputValue={inputValue}
              selectedProduct={selectedProduct[0]}
              selectedProductRate={selectedProductRate}
              selectedProductRate2={selectedProductRate2}
            />
            <Product
              inputValue={inputValue}
              selectedProduct={selectedProduct[1]}
              selectedProductRate={selectedProductRate}
              selectedProductRate2={selectedProductRate2}
            />
            {selectedProduct[2] ? (
              <Product
                inputValue={inputValue}
                selectedProduct={selectedProduct[2]}
                selectedProductRate={selectedProductRate}
                selectedProductRate2={selectedProductRate2}
              />
            ) : (
              <Product />
            )}
          </Products>
          <SecondGuide>
            *만기수령액은 이자소득세를 제외한 (일반과세 기준 이자금액의
            15.4%)금액 입니다. 계산 결과는 최고금리가 적용되었습니다.
          </SecondGuide>
        </ModalContents>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ComparingModal;
