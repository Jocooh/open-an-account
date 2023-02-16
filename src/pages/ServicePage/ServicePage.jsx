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
  ProducksRank,
  Producks,
  ProducksTitle,
  StyledBankList,
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
  StyledBtnDiv,
  StyledBtn,
} from "./style";
import React, { useState, useMemo, useRef, useEffect } from "react";
import ComparingModal from "../../components/ComparingModal/ComparingModal";
import AllBankList from "../../components/AllBankList/AllBankList";
import SavingAllBankList from "../../components/AllBankList/SavingAllBankList";
import SearchBankList from "../../components/SearchBankList/SearchBankList";
import SearchInput from "../../components/SearchBankList/SearchInput";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveBookmarks } from "../../redux/modules/BookmarksSlice";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  dbService,
  docRef,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";

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

  const [savingoptionalList, setSavingoptionalList] = useState(null);

  const inputRef = useRef(null);
  const [products, setProducts] = useState([]); //* 금융상품 list 상태 값 저장
  const [value, setValue] = useState(0); //* input Range 상태 값 저장
  const [amount, setAmount] = useState(""); //* input 상태 값 저장
  const [notAllow, setNotAllow] = useState(true); //* 찾기버튼 활성화 상태 값 저장
  const [selectedProductId, setSelectedProductId] = useState(""); //* 모달창 상태 값 저장

  //* 상품 리스트 함수
  const handleButtonClick = async () => {
    const querySnapshot = await getDocs(collection(db, "DEPOSIT_BASE_LIST"));
    const product = [];
    querySnapshot.forEach((doc) => {
      const newProduct = {
        id: doc.id,
        ...doc.data(),
      };
      product.push(newProduct);
    });
    setProducts(product);
  };
  // console.log(products);

  useEffect(() => {
    handleButtonClick();
  }, []);

  //* 선택된 상품 id 저장
  const handleSelectProduct = async (productId) => {
    try {
      const docRef = doc(db, "DEPOSIT_BASE_LIST", productId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSelectedProductId(docSnap.id);
        console.log(docSnap.id);
      } else {
        console.log("문서의 아이디를 을 찾을 수 없어요!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickProduct = (productId) => {
    handleSelectProduct(productId);
  };

  //* 찾기 버튼 활성화
  useEffect(() => {
    if (amount && value) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [amount, value]);

  //* input 상태 값 저장
  const handleBlur = () => {
    if (amount) {
      // amount가 존재하면 저장
      console.log("saved amount:", amount);
    }
  };

  const handleInputChange = (event) => {
    // 정규식으로 입력값에서 숫자만 추출
    const value = event.target.value.replace(/[^0-9]/g, "");

    if (value.length <= 10) {
      // 10자리 이하인 경우만 amount 업데이트
      setAmount(value.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    } else {
      setAmount("1,000,000,000");
    }
    if (value.length === 10) {
      setAmount("1,000,000,000");
    }
  };

  //* ","로 포맷팅된 금액을 ","를 제거한 숫자로 변환하고, 억, 만, 원으로 포맷팅.
  const formattedAmount = useMemo(() => {
    const amountWithoutCommas = amount.replace(/,/g, "");

    if (amountWithoutCommas >= 100000000) {
      //* 1억 이상
      let number = Math.floor(amountWithoutCommas / 100000000);
      if (amountWithoutCommas % 100000000 === 0) {
        number = `${Math.floor(amountWithoutCommas / 100000000)}억원`;
      } else if (amountWithoutCommas % 10000 === 0) {
        number = `${Math.floor(amountWithoutCommas / 100000000)}억 ${Math.floor(
          (amountWithoutCommas % 100000000) / 10000
        )}만원`; //* 1억원 이상이고 1만원 이상인 친구들 처리
      } else if (amountWithoutCommas % 100000000 < 10000) {
        number = `${Math.floor(amountWithoutCommas / 100000000)}억 ${Math.floor(
          amountWithoutCommas % 10000
        )}원`; //* 1억 이상이고 1만원 미만인 친구들 처리
      } else {
        number = `${Math.floor(amountWithoutCommas / 100000000)}억 ${Math.floor(
          (amountWithoutCommas % 100000000) / 10000
        )}만 ${new Intl.NumberFormat("ko-KR").format(
          amountWithoutCommas % 10000
        )}원`;
      }
      return number;
    } else if (amountWithoutCommas >= 10000) {
      //* 1만 이상
      return amountWithoutCommas % 10000 === 0
        ? `${Math.floor(amountWithoutCommas / 10000)}만원`
        : `${Math.floor(amountWithoutCommas / 10000)}만 ${new Intl.NumberFormat(
            "ko-KR"
          ).format(amountWithoutCommas % 10000)}원`;
    } else {
      return `${new Intl.NumberFormat("ko-KR").format(amountWithoutCommas)}원`;
    }
  }, [amount]);

  //* input 상태 값 저장슬리이더 함수
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    console.log([0, 6, 12, 24, 36][newValue]);
  };

  const [savingOptionalList, setSavingOptionalList] = useState(null);

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
  //스크롤 탑 함수
  const topLocation = useRef(null);
  const onTop = () => {
    topLocation.current.scrollIntoView({ behavior: "smooth" });
  };
  //자세히 버튼 누르면 나올 상세페이지 토글
  const [toggleDetail, setToggleDetail] = useState(false);

  useMemo(() => {
    // SavingBankListFetch();
    DepositBankListFetch();
  }, []);


  // 비교하기 버튼 모달창
  const [comparingModalOpen, setComparingModalOpen] = useState(false);
  const OpenComparingModal = () => {
    setComparingModalOpen(true);
  };

  // 찜한 상품 불러오기 --- 김원준 작업 중.
  // 유즈이펙트 안에 콘솔 찍으면 빈배열 .....................................
  // 전역에 찍자 ................................
  const [bookmarkProducts, setBookmarkProducs] = useState([]);
  // const dispatch = useDispatch();
  const getBookmarkProduct = async () => {
    const querySnapshot = await getDocs(collection(db, "bookmarks"));
    const bookmarkproduct = [];

    querySnapshot.forEach((doc) => {
      const newProduct = {
        id: doc.id,
        ...doc.data(),
      };

      bookmarkproduct.push(newProduct);
    });

    setBookmarkProducs(bookmarkproduct);
    // dispatch(saveBookmarks(bookmarkproduct));
  };
  useEffect(() => {
    getBookmarkProduct();
  }, []);
  console.log(bookmarkProducts);
  // 찜한 상품 불러오기 --- 김원준 작업 중.

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
                        <ProductType //* 상품 종류 선택 버튼
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
                          <div>
                            {productType === 1 ? (
                              <>
                                <span style={{ fontWeight: "bold" }}>
                                  최초 예치 할 금액
                                </span>
                                <span>을 입력해주세요.</span>
                                <div>
                                  <input
                                    type="text"
                                    value={amount}
                                    onBlur={handleBlur}
                                    onChange={handleInputChange}
                                    placeholder="금액을 입력해주세요"
                                  />
                                  <div
                                    style={{
                                      fontSize: "15px",
                                      fontWeight: "bold",
                                      margin: "0px 0px 30px 30px",
                                    }}
                                  >
                                    {formattedAmount}
                                  </div>
                                </div>
                                <MonthRangeSliderTitle>
                                  <span>몇개월</span>
                                  <span style={{ fontWeight: "bold" }}>
                                    {" "}
                                    예치
                                  </span>
                                  <span> 하실건가요?</span>
                                </MonthRangeSliderTitle>
                              </>
                            ) : productType === 2 ? (
                              <>
                                <span style={{ fontWeight: "bold" }}>
                                  만기 목표금액
                                </span>
                                <span>을 입력해주세요.</span>
                                <formattedAmount>
                                  <input
                                    type="text"
                                    value={amount}
                                    onBlur={handleBlur}
                                    onChange={handleInputChange}
                                    placeholder="금액을 입력해주세요"
                                  />
                                  <div
                                    style={{
                                      fontSize: "15px",
                                      fontWeight: "bold",
                                      margin: "0px 0px 30px 30px",
                                    }}
                                  >
                                    {formattedAmount}
                                  </div>
                                </formattedAmount>
                                <MonthRangeSliderTitle>
                                  <span>몇개월</span>
                                  <span style={{ fontWeight: "bold" }}>
                                    {" "}
                                    모으실건가요?
                                  </span>
                                </MonthRangeSliderTitle>
                              </>
                            ) : (
                              <div>잘못된 입력입니다.</div>
                            )}
                          </div>
                        </ProducksCalculatorBoxContentTilte>
                      </ProducksCalculatorBoxContent>
                      <MonthRangeSliderWraper>
                        <div>
                          <input
                            type="range"
                            min="0"
                            max="4"
                            value={value}
                            onChange={handleChange}
                          />
                        </div>
                        <MonthRangeSlider>
                          <span>기간 선택</span>
                          <span style={{ marginLeft: "-15px" }}>6개월</span>
                          <span style={{ marginLeft: "11px" }}>12개월</span>
                          <span style={{ marginLeft: "10px" }}>24개월</span>
                          <span style={{ marginLeft: "-6px" }}>36개월</span>
                        </MonthRangeSlider>
                      </MonthRangeSliderWraper>
                      <FilterSubmitWarper>
                        {showSearch ? (
                          <FilterSubmit
                            disabled={notAllow}
                            onClick={() => {
                              handleClickResults();
                              handleClickSearch();
                              handleButtonClick();
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

              {showResults && (
                <ResultsSection className="section">
                  <div>
                    <ul>
                      {products.map((item) => (
                        <li
                          onClick={() => handleClickProduct(item.id)}
                          key={item.id}
                        >
                          {item.fin_prdt_nm}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ResultsSection>
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
                                  bookmarkProducts={bookmarkProducts}
                                />
                              ) : productType === 1 ? (
                                <AllBankList
                                  depositOptionalList={depositOptionalList}
                                  depositbaseList={depositbaseList}
                                  // 원준 북마크
                                  bookmarkProducts={bookmarkProducts}
                                  // 원준 북마크
                                  setToggleDetail={setToggleDetail}
                                  toggleDetail={toggleDetail}

                                />
                              ) : (
                                <SavingAllBankList
                                  savingbaseList={savingbaseList}
                                  savingOptionalList={savingOptionalList}
                                  // 원준 북마크
                                  bookmarkProducts={bookmarkProducts}
                                  // 원준 북마크
                                  setToggleDetail={setToggleDetail}
                                  toggleDetail={toggleDetail}
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
          </BottomSection>
        </BottomSectionWraper>
      </Cantinar>
    </Wraper>
  );
};

export default ServicePage;
