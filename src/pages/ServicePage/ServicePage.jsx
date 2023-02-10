import {
  Wraper,
  Cantinar,
  TopSection,
  SelectedProducts,
  BottomSection,
  TopSectionWraper,
  ProducksCalculatorTitle,
  ProducksCalculator,
  ProducksCalculatorBox,
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
} from "./ServicePageCss";
import React, { useState } from "react";
import AllBankList from "../../components/AllBankList/AllBankList";

const ServicePage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [showSearch, setShowSearch] = useState(true);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const handleClickSearch = (search) => {
    setShowSearch(!showSearch);
  };
  const handleClickResults = (results) => {
    setShowResults(!showResults);
  };

  return (
    <Wraper>
      <Cantinar>
        <TopSectionWraper>
          <TopSection>
            <RefreshBtn>초기화 버튼</RefreshBtn>
            <div>비교해볼까요?🧐</div>
            <SelectedProducts>
              <div className="producks">+</div>
              <div className="producks">+</div>
              <div className="producks">+</div>
            </SelectedProducts>
            <ToCompare>비교하기</ToCompare>
          </TopSection>
        </TopSectionWraper>

        <BottomSectionWraper>
          <BottomSection>
            <button
              className={`tab ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              금융상품 계산기
            </button>
            <button
              className={`tab ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              전체목록
            </button>
            <button
              className={`tab ${activeTab === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              찜 목록
            </button>
            <div className="tab-content">
              {activeTab === 1 && (
                <div>
                  <ProducksCalculator>
                    <ProducksCalculatorBox>
                      <ProducksCalculatorTitle>
                        목표로 상품찾기
                      </ProducksCalculatorTitle>
                      <ProducksCalculatorBoxTitle>
                        종류를 선택해주세요.
                      </ProducksCalculatorBoxTitle>
                      <ProductType>예금</ProductType>
                      <ProductType>적금</ProductType>
                      <ProductType>모두</ProductType>
                      <ProducksCalculatorBoxContent>
                        <ProducksCalculatorBoxContentTilte>
                          최종 목표 금액
                        </ProducksCalculatorBoxContentTilte>
                        <input placeholder="금액을 입력해주세요."></input>
                      </ProducksCalculatorBoxContent>
                      <MonthRangeSlider>
                        <MonthRangeSliderTitle>
                          <span>기간 설정</span>
                          <span>6개월</span>
                          <span>12개월</span>
                          <span>24개월</span>
                        </MonthRangeSliderTitle>
                        <input
                          type="range"
                          min="1"
                          max="24"
                          className="slider"
                        />
                      </MonthRangeSlider>
                      <>
                        {showSearch ? (
                          <FilterSubmit
                            onClick={() => {
                              handleClickResults();
                              handleClickSearch();
                            }}
                          >
                            검색하기
                          </FilterSubmit>
                        ) : (
                          <FilterSubmit
                            onClick={() => {
                              handleClickResults();
                              handleClickSearch();
                            }}
                          >
                            검색 창 닫기
                          </FilterSubmit>
                        )}
                      </>
                    </ProducksCalculatorBox>
                  </ProducksCalculator>
                </div>
              )}
              {activeTab === 2 && (
                <ProducksCalculator>
                  <ProducksCalculator>
                    <ProducksCalculatorBox>
                      <ProducksCalculatorTitle>
                        전체 목록
                        <input
                          type="text"
                          placeholder="은행명을 입력해주세요"
                          style={{ marginLeft: "20px" }}
                        ></input>
                      </ProducksCalculatorTitle>

                      <FinanciialProductsWrap>
                        <FinanciialProductsFullList>
                          <FinanciialProducts
                            style={{ boxShadow: " 0px 8px 6px -8px #3e3e3e" }}
                          >
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
                    </ProducksCalculatorBox>
                  </ProducksCalculator>
                </ProducksCalculator>
              )}
              {activeTab === 3 && (
                <ProducksCalculator>
                  <ProducksCalculator>
                    <ProducksCalculatorBox>
                      <ProducksCalculatorTitle>찜 목록</ProducksCalculatorTitle>
                    </ProducksCalculatorBox>
                  </ProducksCalculator>
                </ProducksCalculator>
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
