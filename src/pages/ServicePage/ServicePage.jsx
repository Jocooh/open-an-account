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
  ProducksCalculatorBoxContent,
  ProducksCalculatorBoxContentTilte,
  MonthRangeSlider,
  MonthRangeSliderTitle,
  BottomSectionWraper,
  ToCompare,
  ResultsSection,
  ProductType,
  FilterSubmit,
  FinanciialProductsFullList,
  FinanciialProductsWrap,
  StyledBankListContainer,
  Tapwraper,
  TopSectionTitle,
  TopSectionSubTitle,
  TapButtonWraper,
  ProductWraper,
  MonthRangeSliderWraper,
  FilterSubmitWarper,
  TapButton,
  ProductsWraper,
  SelectedProductsContainer,
  StyledBankList,
  StyledBtnDiv,
  StyledBtn,
} from "./style";
import React, { useState, useMemo, useRef } from "react";
import ComparingModal from "../../components/ComparingModal/ComparingModal";
import AllBankList from "../../components/AllBankList/AllBankList";
import SavingAllBankList from "../../components/AllBankList/SavingAllBankList";
import SearchBankList from "../../components/SearchBankList/SearchBankList";
import SearchInput from "../../components/SearchBankList/SearchInput";
import axios from "axios";

const ServicePage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [productType, setProductType] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  //상품검색state
  const [searchBank, setSearchBank] = useState("");
  //예금상품 baseList , optionList
  const [depositbaseList, setdepositbaseList] = useState(null);
  const [depositOptionalList, setdepositOptionalList] = useState(null);
  //적금상품 baseList ,optionList
  const [savingbaseList, setSavingbaseList] = useState(null);
  const [savingOptionalList, setSavingOptionalList] = useState(null);
  //자세히 버튼 누르면 나올 상세페이지 토글
  const [toggleDetail, setToggleDetail] = useState(false);

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
  //   setSavingOptionalList(data?.result.optionList);
  // };
  const topLocation = useRef(null);

  const onTop = () => {
    topLocation.current.scrollIntoView({ behavior: "smooth" });
  };

  useMemo(() => {
    // SavingBankListFetch();
    DepositBankListFetch();
  }, []);

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
              {/* ##################################################################### */}
              {activeTab === 2 && (
                <TapContainer>
                  <TapContainerBox>
                    <TapTitleName>전체 목록</TapTitleName>
                    <FinanciialProductsWrap>
                      <FinanciialProductsFullList>
                        {/* 검색창_component */}
                        <SearchInput setSearchBank={setSearchBank} />
                        <ProductWraper className="버튼감싸는 wrapper">
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
                        <p style={{ color: "#aaa", marginTop: "5px" }}>
                          **기본정렬은 12개월 기준입니다.
                        </p>

                        <StyledBankListContainer>
                          <div>
                            <StyledBankList>
                              <div
                                ref={topLocation}
                                className="top으로 가는 위치 지정"
                              />
                              {searchBank.length > 0 ? (
                                <SearchBankList
                                  searchBank={searchBank}
                                  productType={productType}
                                  depositbaseList={depositbaseList}
                                  depositOptionalList={depositOptionalList}
                                  savingbaseList={savingbaseList}
                                  savingOptionalList={savingOptionalList}
                                />
                              ) : productType === 1 ? (
                                <AllBankList
                                  depositOptionalList={depositOptionalList}
                                  depositbaseList={depositbaseList}
                                  setToggleDetail={setToggleDetail}
                                  toggleDetail={toggleDetail}
                                />
                              ) : (
                                <SavingAllBankList
                                  savingbaseList={savingbaseList}
                                  savingOptionalList={savingOptionalList}
                                />
                              )}
                            </StyledBankList>
                            <StyledBtnDiv className="스크롤탑버튼">
                              <StyledBtn onClick={onTop}>
                                맨 위로 가기
                              </StyledBtn>
                            </StyledBtnDiv>
                          </div>
                        </StyledBankListContainer>
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
