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
  ProducksTitle,
  StyledBankList,
} from "./style";
import React, { useState, useMemo, useRef } from "react";
import ComparingModal from "../../components/ComparingModal/ComparingModal";
import AllBankList from "../../components/AllBankList/AllBankList";
import SearchBankList from "../../components/SearchBankList/SearchBankList";
import SearchInput from "../../components/SearchBankList/SearchInput";
import axios from "axios";

const ServicePage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  //상품검색state
  const [searchBank, setSearchBank] = useState("");
  //예금적금 선택
  const [selectedCategory, setSelectedCategory] = useState(true);
  //예금상품 baseList , optionList
  const [depositbaseList, setdepositbaseList] = useState(null);
  const [depositOptionalList, setdepositOptionalList] = useState(null);
  //적금상품 baseList ,optionList
  const [savingbaseList, setSavingbaseList] = useState(null);
  const [savingoptionalList, setSavingoptionalList] = useState(null);

  const inputRef = useRef(null);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const handleClickSearch = (search) => {
    setShowSearch(!showSearch);
  };
  const handleClickResults = (results) => {
    setShowResults(!showResults);
  };

  const DepositBankListFetch = async () => {
    console.log("fetch실행");
    const { data } = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1"
    );
    setdepositbaseList(data?.result.baseList);
    setdepositOptionalList(data?.result.optionList);
  };

  // const SavingBankListFetch = async () => {
  //   console.log("saving Fetch");
  //   const { data } = await axios.get(
  //     `https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1`
  //   );
  //   setSavingbaseList(data?.result.baseList);
  //   setSavingoptionalList(data?.result.optionList);
  // };

  useMemo(() => {
    // SavingBankListFetch();
    DepositBankListFetch();
  }, []);

  //최고금리 순으로 가져오는 함수(정기예금)
  const depositDB = depositOptionalList?.sort(function (a, b) {
    return b.intr_rate2 - a.intr_rate2;
  });

  //여기 적금 최고금리순으로 가져오는 함수 필요
  const savingDB = depositOptionalList?.sort(function (a, b) {
    return b.intr_rate2 - a.intr_rate2;
  });

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
            <RefreshBtn>초기화 버튼</RefreshBtn>
            <div>비교해볼까요?🧐</div>
            <SelectedProducts>
              <div className="producks">+</div>
              <div className="producks">+</div>
              <div className="producks">+</div>
            </SelectedProducts>
            <ToCompare onClick={OpenComparingModal}>비교하기</ToCompare>
            {comparingModalOpen && (
              <ComparingModal setComparingModalOpen={setComparingModalOpen} />
            )}
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
                      <FinanciialProductsWrap>
                        <FinanciialProductsFullList>
                          <FinanciialProducts
                            style={{ boxShadow: " 0px 8px 6px -8px #3e3e3e" }}
                          >
                            <ProducksRank>
                              <Producks>
                                {/* 검색창_component */}
                                <SearchInput
                                  setSearchBank={setSearchBank}
                                  ref={inputRef}
                                />
                                <button
                                  style={{ marginRight: "10px" }}
                                  onClick={() => {
                                    setSelectedCategory(true);
                                  }}
                                >
                                  정기예금
                                </button>
                                <button
                                  onClick={() => {
                                    setSelectedCategory(false);
                                  }}
                                >
                                  정기적금
                                </button>
                                <ProducksTitle>
                                  {/* 은행전체리스트 컴포넌트로 뺐습니다. */}
                                  <StyledBankList>
                                    {searchBank.length > 0 ? (
                                      <SearchBankList
                                        searchBank={searchBank}
                                        depositbaseList={depositbaseList}
                                        depositOptionalList={
                                          depositOptionalList
                                        }
                                      />
                                    ) : (
                                      <AllBankList
                                        depositDB={depositDB}
                                        depositbaseList={depositbaseList}
                                      />
                                    )}
                                  </StyledBankList>
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
