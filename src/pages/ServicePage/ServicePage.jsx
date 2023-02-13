import {
  Wraper,
  Cantinar,
  TopSection,
  SelectedProducts,
  BottomSection,
  TopSectionWraper,
  TapTitleName,
  TapContainer,
  TapContainerBox,
  ProducksCalculatorBoxTitle,
  ProducksCalculatorBoxContent,
  ProducksCalculatorBoxContentTilte,
  MonthRangeSlider,
  MonthRangeSliderTitle,
  BottomSectionWraper,
  RefreshBtn,
  ToCompare,
  ResultsSection,
  ProductType,
  FilterSubmit,
  FinanciialProductsFullList,
  FinanciialProducts,
  FinanciialProductsWrap,
  ProducksRank,
  Producks,
  ProducksDiscription,
  ProducksTitle,
  Tapwraper,
  TopSectionTitle,
  TopSectionSubTitle,
  TapButtonWraper,
  ProductWraper,
  MonthRangeSliderWraper,
  FilterSubmitWarper,
  Products,
  TapButton,
  ProductsWraper,
  SelectedProductsContainer,
} from "./style";
import React, { useState } from "react";
import ComparingModal from "../../components/ComparingModal/ComparingModal";
import AllBankList from "../../components/AllBankList/AllBankList";

const ServicePage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [productType, setProductType] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [showSearch, setShowSearch] = useState(true);

  const handleProductTypeClick = (buttonType) => {
    setProductType(buttonType);
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleClickSearch = (search) => {
    setShowSearch(!showSearch);
  };

  const handleClickResults = (results) => {
    setShowResults(!showResults);
  };

  // 비교하기 버튼 모달창
  const [comparingModalOpen, setComparingModalOpen] = useState(false);
  const OpenComparingModal = () => {
    setComparingModalOpen(true);
  };

  return (
    <Wraper>
      <Cantinar>
        <TopSectionWraper>
          <TopSection>
            <TopSectionTitle>금융상품 비교하기</TopSectionTitle>
            <TopSectionSubTitle>
              예금/적금은 동일한 종류만 비교할 수 있습니다.
            </TopSectionSubTitle>
            <ProductsWraper>
              <SelectedProductsContainer>
                <SelectedProducts>
                  비교할 상품을 선택해주세요.
                  <div>
                    <img
                      style={{ alignItems: "center", marginTop: "50px" }}
                      src="url"
                      alt="이미지"
                    />
                  </div>
                </SelectedProducts>
              </SelectedProductsContainer>
              <SelectedProductsContainer>
                <SelectedProducts>
                  비교할 상품을 선택해주세요.
                  <div>
                    <img
                      style={{ alignItems: "center", marginTop: "50px" }}
                      src="url"
                      alt="이미지"
                    />
                  </div>
                </SelectedProducts>
              </SelectedProductsContainer>
              <SelectedProductsContainer>
                <SelectedProducts>
                  비교할 상품을 선택해주세요.
                  <div>
                    <img
                      style={{ alignItems: "center", marginTop: "50px" }}
                      src="url"
                      alt="이미지"
                    />
                  </div>
                </SelectedProducts>
              </SelectedProductsContainer>
            </ProductsWraper>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <ToCompare onClick={OpenComparingModal}>비교하기</ToCompare>
              {comparingModalOpen && (
                <ComparingModal setComparingModalOpen={setComparingModalOpen} />
              )}
            </div>
          </TopSection>
        </TopSectionWraper>

        <BottomSectionWraper>
          <BottomSection>
            <TapButtonWraper>
              <TapButton
                onClick={() => handleTabClick(1)}
                style={
                  activeTab === 1
                    ? {
                        fontWeight: "bold",
                        color: "#6A24FF",
                        borderBottom: "3px solid #6A24FF",
                      }
                    : {}
                }
              >
                조건 계산
              </TapButton>
              <TapButton
                onClick={() => handleTabClick(2)}
                style={
                  activeTab === 2
                    ? {
                        fontWeight: "bold",
                        color: "#6A24FF",
                        borderBottom: "3px solid #6A24FF",
                      }
                    : {}
                }
              >
                상품명 검색
              </TapButton>
              <TapButton
                onClick={() => handleTabClick(3)}
                style={
                  activeTab === 3
                    ? {
                        fontWeight: "bold",
                        color: "#6A24FF",
                        borderBottom: "3px solid #6A24FF",
                      }
                    : {}
                }
              >
                찜 목록
              </TapButton>
            </TapButtonWraper>
            <div className="tab-content">
              {activeTab === 1 && (
                <Tapwraper>
                  <TapContainer>
                    <TapContainerBox>
                      <TapTitleName>상품 종류를 선택해주세요.</TapTitleName>
                      <ProductWraper>
                        <ProductType
                          onClick={() => {
                            handleProductTypeClick(1);
                          }}
                          style={
                            productType === 1
                              ? {
                                  color: "#6A24FF",
                                  border: "1px solid #6A24FF",
                                }
                              : {}
                          }
                        >
                          정기예금
                        </ProductType>
                        <ProductType
                          onClick={() => {
                            handleProductTypeClick(2);
                          }}
                          style={
                            productType === 2
                              ? {
                                  color: "#6A24FF",
                                  border: "1px solid #6A24FF",
                                }
                              : {}
                          }
                        >
                          정기적금
                        </ProductType>
                      </ProductWraper>
                      <ProducksCalculatorBoxContent>
                        <ProducksCalculatorBoxContentTilte>
                          <span style={{ fontWeight: "bold" }}>
                            만기 목표금액
                          </span>
                          을 입력해주세요
                        </ProducksCalculatorBoxContentTilte>
                        <div>
                          <input
                            type="number"
                            placeholder="금액을 입력해주세요."
                          ></input>
                        </div>
                      </ProducksCalculatorBoxContent>
                      <MonthRangeSliderWraper>
                        <MonthRangeSliderTitle>
                          몇개월 모으실건가요?
                        </MonthRangeSliderTitle>
                        <input
                          type="range"
                          min="0"
                          max="4"
                          className="slider"
                        />
                        <MonthRangeSlider>
                          <span>선택안함</span>
                          <span>6개월</span>
                          <span>12개월</span>
                          <span>24개월</span>
                          <span>36개월</span>
                        </MonthRangeSlider>
                      </MonthRangeSliderWraper>
                      <FilterSubmitWarper>
                        {showSearch ? (
                          <FilterSubmit
                            onClick={() => {
                              handleClickResults();
                              handleClickSearch();
                            }}
                          >
                            찾기
                          </FilterSubmit>
                        ) : (
                          <FilterSubmit
                            onClick={() => {
                              handleClickResults();
                              handleClickSearch();
                            }}
                          >
                            닫기
                          </FilterSubmit>
                        )}
                      </FilterSubmitWarper>
                    </TapContainerBox>
                  </TapContainer>
                </Tapwraper>
              )}
              {activeTab === 2 && (
                <TapContainer>
                  <TapContainerBox>
                    <TapTitleName>전체 목록</TapTitleName>
                    <FinanciialProductsWrap>
                      <FinanciialProductsFullList>
                        <FinanciialProducts>
                          <ProducksRank>
                            <Producks>
                              <ProducksTitle>
                                {/* 은행전체리스트 컴포넌트로 뺐습니다. */}
                                <AllBankList />
                              </ProducksTitle>
                              {/* <ProducksDiscription>
                                  상품에 대한 설명이 들어갈 공간입니다.
                                </ProducksDiscription> */}
                            </Producks>
                          </ProducksRank>
                        </FinanciialProducts>
                      </FinanciialProductsFullList>
                    </FinanciialProductsWrap>
                  </TapContainerBox>
                </TapContainer>
              )}
              {activeTab === 3 && (
                <TapContainer>
                  <TapContainerBox>
                    <TapTitleName>찜 목록</TapTitleName>
                  </TapContainerBox>
                </TapContainer>
              )}
            </div>
            {/*.결과 영역 */}
            <div>
              {showResults && (
                <ResultsSection className="section">
                  계산결과가 나타날 공간.
                </ResultsSection>
              )}
            </div>
          </BottomSection>
        </BottomSectionWraper>
      </Cantinar>
    </Wraper>
  );
};

export default ServicePage;
