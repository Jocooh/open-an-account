import React from "react";
import {
  BestProductWrap,
  CurrentState,
  KrBank,
  KrBankRateWrap,
  KrBankRate,
  KrBankRateVar,
  BtProducts,
  BtProduct,
  BtProductTitle,
  BtProductList,
  BtProductRank,
  BtProductContent,
  BtProductName,
  RateWrapper,
  MaxRate,
} from "../../pages/MainPage/style";

const BestProducts = () => {
  return (
    <BestProductWrap>
      <CurrentState>
        <KrBank>한국은행 기준 금리</KrBank>
        <div>2023.02.22</div>
        <KrBankRateWrap>
          <KrBankRate>3.50%</KrBankRate>
          <KrBankRateVar>
            {/* <img src={require("../../assets/mainpage/variation.png")} /> */}
            <div>🔺0.50</div>
          </KrBankRateVar>
        </KrBankRateWrap>
      </CurrentState>
      <BtProducts>
        <BtProduct>
          <BtProductTitle>인기 적금</BtProductTitle>
          <BtProductList>
            <BtProductRank>1</BtProductRank>
            <img src={require("../../assets/logo/oori_logo.png")} />
            <BtProductContent>
              <div>
                <BtProductName>DNFLDMSGID적금</BtProductName>
                <div>우리은행</div>
              </div>
              <RateWrapper>
                <MaxRate>최고금리 5.8%</MaxRate>
                <div>기본 3.0%</div>
              </RateWrapper>
            </BtProductContent>
          </BtProductList>
          <BtProductList>
            <BtProductRank>2</BtProductRank>
            <img src={require("../../assets/logo/oori_logo.png")} />
            <BtProductContent>
              <div>
                <BtProductName>DNFLDMSGID적금</BtProductName>
                <div>우리은행</div>
              </div>
              <RateWrapper>
                <MaxRate>최고금리 5.8%</MaxRate>
                <div>기본 3.0%</div>
              </RateWrapper>
            </BtProductContent>
          </BtProductList>
          <BtProductList>
            <BtProductRank>3</BtProductRank>
            <img src={require("../../assets/logo/oori_logo.png")} />
            <BtProductContent>
              <div>
                <BtProductName>DNFLDMSGID적금</BtProductName>
                <div>우리은행</div>
              </div>
              <RateWrapper>
                <MaxRate>최고금리 5.8%</MaxRate>
                <div>기본 3.0%</div>
              </RateWrapper>
            </BtProductContent>
          </BtProductList>
        </BtProduct>
        <BtProduct>
          <BtProductTitle>인기 예금</BtProductTitle>
          <BtProductList>
            <BtProductRank>1</BtProductRank>
            <img src={require("../../assets/logo/oori_logo.png")} />
            <BtProductContent>
              <div>
                <BtProductName>DNFLDMSGID적금</BtProductName>
                <div>우리은행</div>
              </div>
              <RateWrapper>
                <MaxRate>최고금리 5.8%</MaxRate>
                <div>기본 3.0%</div>
              </RateWrapper>
            </BtProductContent>
          </BtProductList>
          <BtProductList>
            <BtProductRank>2</BtProductRank>
            <img src={require("../../assets/logo/oori_logo.png")} />
            <BtProductContent>
              <div>
                <BtProductName>DNFLDMSGID적금</BtProductName>
                <div>우리은행</div>
              </div>
              <RateWrapper>
                <MaxRate>최고금리 5.8%</MaxRate>
                <div>기본 3.0%</div>
              </RateWrapper>
            </BtProductContent>
          </BtProductList>
          <BtProductList>
            <BtProductRank>3</BtProductRank>
            <img src={require("../../assets/logo/oori_logo.png")} />
            <BtProductContent>
              <div>
                <BtProductName>DNFLDMSGID적금</BtProductName>
                <div>우리은행</div>
              </div>
              <RateWrapper>
                <MaxRate>최고금리 5.8%</MaxRate>
                <div>기본 3.0%</div>
              </RateWrapper>
            </BtProductContent>
          </BtProductList>
        </BtProduct>
      </BtProducts>
    </BestProductWrap>
  );
};

export default BestProducts;
