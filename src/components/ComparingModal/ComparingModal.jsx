import React, { useState } from "react";

import {
  CloseButton,
  FirstGuide,
  Highlight,
  Input,
  InputWrapper,
  Message,
  MessageWrapper,
  ModalBackground,
  ModalContainer,
  ModalContents,
  Products,
  SecondGuide,
  Title,
} from "./style";
import Product from "../Product/Product";
import SavingProduct from "../Product/SavingProduct";
import { useRecoilState } from "recoil";
import { productType, comparingModal, productIds } from "../../atom/index";

const ComparingModal = ({
  selectedProduct,
  selectedProductId,
  selectedProductRate,
  selectedProductRate2,
  selectedProductRateType,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [comparingModalOpen, setComparingModalOpen] =
    useRecoilState(comparingModal);

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton
          src={require("../../assets/cpmodalclose.png")}
          alt="닫기"
          onClick={() => {
            setComparingModalOpen(false);
          }}
        />
        <ModalContents>
          <Title>상품 비교</Title>
          <MessageWrapper>
            {selectedProduct[0].category === "예금 기본 정보" ? (
              <>
                <Message>
                  <div style={{ color: "#6A24FF" }}>12개월 </div> 동안
                  <InputWrapper>
                    <Input
                      maxlength={11}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      thousandSeparator=","
                      placeholder="금액을 입력해주세요"
                      inputLength={inputValue.length}
                    />
                  </InputWrapper>
                  원을 예치하면
                </Message>
                <FirstGuide>
                  금액은 10억 미만으로 입력할 수 있습니다.
                </FirstGuide>
                <Products>
                  <Product
                    inputValue={inputValue}
                    selectedProduct={selectedProduct[0]}
                    selectedProductId={selectedProductId[0]}
                    selectedProductRate={selectedProductRate[0]}
                    selectedProductRate2={selectedProductRate2[0]}
                    selectedProductRateType={selectedProductRateType[0]}
                  />
                  <Product
                    inputValue={inputValue}
                    selectedProduct={selectedProduct[1]}
                    selectedProductId={selectedProductId[1]}
                    selectedProductRate={selectedProductRate[1]}
                    selectedProductRate2={selectedProductRate2[1]}
                    selectedProductRateType={selectedProductRateType[1]}
                  />
                  {selectedProduct[2] ? (
                    <Product
                      inputValue={inputValue}
                      selectedProduct={selectedProduct[2]}
                      selectedProductId={selectedProductId[2]}
                      selectedProductRate={selectedProductRate[2]}
                      selectedProductRate2={selectedProductRate2[2]}
                      selectedProductRateType={selectedProductRateType[2]}
                    />
                  ) : (
                    <img
                      src={require("../../assets/thirdProduct.png")}
                      alt="세번째 상품 미선택"
                      style={{ maxHeight: "45vh" }}
                    />
                  )}
                </Products>
              </>
            ) : (
              <>
                <Message>
                  <Highlight>12개월</Highlight> 동안
                  <InputWrapper>
                    <Input
                      maxlength={11}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      thousandSeparator=","
                      placeholder="금액을 입력해주세요"
                      inputLength={inputValue.length}
                    />

                    <FirstGuide>
                      금액은 10억 미만으로 입력할 수 있습니다.
                    </FirstGuide>
                  </InputWrapper>
                  원 씩 적립하면
                </Message>
                <Products>
                  <SavingProduct
                    inputValue={inputValue}
                    selectedProduct={selectedProduct[0]}
                    selectedProductId={selectedProductId[0]}
                    selectedProductRate={selectedProductRate[0]}
                    selectedProductRate2={selectedProductRate2[0]}
                    selectedProductRateType={selectedProductRateType[0]}
                  />
                  <SavingProduct
                    inputValue={inputValue}
                    selectedProduct={selectedProduct[1]}
                    selectedProductId={selectedProductId[1]}
                    selectedProductRate={selectedProductRate[1]}
                    selectedProductRate2={selectedProductRate2[1]}
                    selectedProductRateType={selectedProductRateType[1]}
                  />
                  {selectedProduct[2] ? (
                    <SavingProduct
                      inputValue={inputValue}
                      selectedProduct={selectedProduct[2]}
                      selectedProductId={selectedProductId[2]}
                      selectedProductRate={selectedProductRate[2]}
                      selectedProductRate2={selectedProductRate2[2]}
                      selectedProductRateType={selectedProductRateType[2]}
                    />
                  ) : (
                    <img
                      src={require("../../assets/thirdProduct.png")}
                      alt="세번째 상품 미선택"
                      style={{ maxHeight: "45vh" }}
                    />
                  )}
                </Products>
              </>
            )}
          </MessageWrapper>

          <SecondGuide>
            <li>
              만기수령액은 이자소득세를 제외한 (일반과세 기준 이자금액의
              15.4%)금액 입니다. 계산 결과는 최고금리가 적용되었습니다.
            </li>
            <li>
              만기 수령액은 비교 상품들 모두 가입이 가능한 12개월로
              산정되었습니다.
            </li>
          </SecondGuide>
        </ModalContents>
      </ModalContainer>
    </ModalBackground>
  );
};

export default React.memo(ComparingModal);
