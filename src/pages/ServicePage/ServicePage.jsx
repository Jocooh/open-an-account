import {
  Wraper,
  Cantinar,
  TopSection,
  SelectedProducts,
  BottomSection,
  TopSectionWraper,
  TapTitleName,
  TapContainerWrap,
  TapContainer,
  TapContainerBox,
  ProducksCalculatorBoxContent,
  ProducksCalculatorBoxContentTilte,
  MonthRangeSlider,
  MonthRangeSliderTitle,
  BottomSectionWraper,
  ToCompare,
  ProductType,
  FilterSubmit,
  FinanciialProductsFullList,
  FinanciialProductsWrap,
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
  StyledBankListWrapper,
  FormattedAmount,
  StagingWrap,
  StagingProductsName,
  StagingBankName,
  BeforeSelectedContainer,
  StagingCancel,
} from "./style";
import React, { useState, useMemo, useRef, useEffect } from "react";
import ComparingModal from "../../components/ComparingModal/ComparingModal";
import SearchBankList from "../../components/SearchBankList/SearchBankList";
import SearchInput from "../../components/SearchBankList/SearchInput";
import axios from "axios";
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
import { authService, db } from "../../config/firebase";
import AllBank from "../../components/ServicePage/AllBank";
import CalculatorList from "../../components/CalculatorList/CalculatorList";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import BookmarkPrdtList from "../../components/Mypage/BookmarkPrdtList";

const ServicePage = () => {
  const [activeTab, setActiveTab] = useState(1); //* 탭 선택 상태 값 저장(조건, 상품 명, 찜)
  const [productTypes, setProductTypes] = useState(1); //* 상품 타입 선택 상태 값 저장
  const [showResults, setShowResults] = useState(false); //* 결과 보기 버튼 활성화 상태 값 저장
  const [notAllow2, setNotAllow2] = useState(true); //* 비교하기 버튼 활성화 상태 값 저장
  const [showSearch, setShowSearch] = useState(true); //* 검색창 활성화 상태 값 저장
  const [activeItem, setActiveItem] = useState("");
  const [userInputs, setUserInputs] = useState([]); //* 선택된 상품의 id 저장
  //상품검색state
  const [searchBank, setSearchBank] = useState("");
  //예금상품 baseList , optionList
  const [depositOptionalList, setdepositOptionalList] = useState([]);
  //적금상품 baseList ,optionList
  const [savingbaseList, setSavingbaseList] = useState([]);
  const [savingoptionalList, setSavingoptionalList] = useState([]);

  // const inputRef = useRef(null);
  const [products, setProducts] = useState([]); //* 금융상품 list 상태 값 저장
  const [value, setValue] = useState(0); //* input Range(기간) 상태 값 저장
  const [months, setMonths] = useState(0);
  const [amount, setAmount] = useState(""); //* input 상태 값 저장
  const [notAllow, setNotAllow] = useState(true); //* 찾기버튼 활성화 상태 값 저장
  const [selectedProductIds, setSelectedProductIds] = useState(
    new Array(18).fill("")
  );
  const [intrRate, setIntrRate] = useState(""); //* 선택된 상품의 intr_rate(이자율) 저장
  const [intrRate2, setIntrRate2] = useState(""); //* 선택된 상품의 intr_rate(최대금리) 저장
  const [intrRateType, setIntrRateType] = useState(""); //* 선택된 상품의 intr_rate_type(이자율타입 :단리, 복리) 저장
  const [productList, setProductList] = useState([]);

  //* 금융상품 리스트 가져오기
  const handleButtonClick = async () => {
    const baseListPromises = [
      getDocs(collection(db, "DEPOSIT_BASE_LIST")),
      getDocs(collection(db, "SAVING_BASE_LIST")),
    ];
    const optionListPromises = [
      getDocs(collection(db, "DEPOSIT_OPTION_LIST")),
      getDocs(collection(db, "SAVING_OPTION_LIST")),
    ];

    const [baseListSnapshots, optionListSnapshots] = await Promise.all([
      Promise.all(baseListPromises),
      Promise.all(optionListPromises),
    ]);

    const products = [];
    const depositOptionalList = [];
    const savingbaseList = [];
    const savingoptionalList = [];

    baseListSnapshots.forEach((snapshot, index) => {
      snapshot.forEach((doc) => {
        const newProduct = {
          id: doc.id,
          ...doc.data(),
        };
        if (index === 0) {
          products.push(newProduct);
        } else {
          savingbaseList.push(newProduct);
        }
      });
    });

    optionListSnapshots.forEach((snapshot, index) => {
      snapshot.forEach((doc) => {
        const newProduct = {
          id: doc.id,
          ...doc.data(),
        };
        if (index === 0) {
          depositOptionalList.push(newProduct);
        } else {
          savingoptionalList.push(newProduct);
        }
      });
    });

    setProducts(products);
    setdepositOptionalList(depositOptionalList);
    setSavingbaseList(savingbaseList);
    setSavingoptionalList(savingoptionalList);
  };

  useEffect(() => {
    handleButtonClick();
  }, []);

  //* 금융상품 타입에 따른 선택된 상품의 고유 값 저장함수.
  const handleSelectProducts = async (productId) => {
    if (productTypes !== 2) {
      try {
        const docRef = doc(db, "DEPOSIT_BASE_LIST", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const baseListData = {
            id: docSnap.id,
            ...docSnap.data(),
          };
          //baseListData에서 상품코드만 구조분해할당
          const { fin_prdt_cd } = baseListData;

          const querySnapshot = await getDocs(
            collection(db, "DEPOSIT_OPTION_LIST"),
            where("fin_prdt_cd", "==", fin_prdt_cd)
          );
          //위에 상품코드가 똑같은거를 option에서 찾아서 map
          const options = querySnapshot.docs.map((doc) => doc.data());
          //selectedProductIds : 선택한 상품 들어가는 배열
          const selectedProductIdsCopy = [...selectedProductIds];

          for (let i = 0; i < selectedProductIdsCopy.length; i += 6) {
            if (selectedProductIdsCopy[i] === "") {
              //targetDoc: 선택한 상품코드가 일치한 option친구들의 속성을 가져온다.
              const targetDoc = options.find(
                (option) => option.fin_prdt_cd === fin_prdt_cd
              );

              if (targetDoc) {
                selectedProductIdsCopy[i] = docSnap.id;
                selectedProductIdsCopy[i + 1] = targetDoc.intr_rate;
                selectedProductIdsCopy[i + 2] = targetDoc.intr_rate2;
                selectedProductIdsCopy[i + 3] = targetDoc.intr_rate_type;
                selectedProductIdsCopy[i + 4] = docSnap.data();
                selectedProductIdsCopy[i + 5] = productTypes;
                setSelectedProductIds(selectedProductIdsCopy);
                setIntrRate(targetDoc.intr_rate);
                setIntrRate2(targetDoc.intr_rate2);
                setIntrRateType(targetDoc.intr_rate_type);
                console.log(selectedProductIdsCopy);
                break;
              } else {
                console.log(
                  "DEPOSIT_OPTION_LIST 컬렉션에서 해당 상품을 찾을 수 없습니다."
                );
              }
            }
          }
        } else {
          console.log(
            "DEPOSIT_BASE_LIST 컬렉션에서 해당 상품을 찾을 수 없습니다."
          );
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const docRef = doc(db, "SAVING_BASE_LIST", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const { fin_prdt_cd } = docSnap.data();

          const querySnapshot = await getDocs(
            collection(db, "SAVING_OPTION_LIST"),
            where("fin_prdt_cd", "==", fin_prdt_cd)
          );

          const options = querySnapshot.docs.map((doc) => doc.data());
          const selectedProductIdsCopy = [...selectedProductIds];
          for (let i = 0; i < selectedProductIdsCopy.length; i += 6) {
            if (selectedProductIdsCopy[i] === "") {
              const targetDoc = options.find(
                (option) => option.fin_prdt_cd === fin_prdt_cd
              );
              if (targetDoc) {
                selectedProductIdsCopy[i] = docSnap.id;
                selectedProductIdsCopy[i + 1] = targetDoc.intr_rate;
                selectedProductIdsCopy[i + 2] = targetDoc.intr_rate2;
                selectedProductIdsCopy[i + 3] = targetDoc.intr_rate_type;
                selectedProductIdsCopy[i + 4] = docSnap.data();
                selectedProductIdsCopy[i + 5] = productTypes;
                setSelectedProductIds(selectedProductIdsCopy);
                setIntrRate(targetDoc.intr_rate);
                setIntrRate2(targetDoc.intr_rate2);
                setIntrRateType(targetDoc.intr_rate_type);
                console.log(selectedProductIdsCopy);
                break;
              } else {
                console.log(
                  "DEPOSIT_OPTION_LIST 컬렉션에서 해당 상품을 찾을 수 없습니다."
                );
              }
            }
          }
        } else {
          console.log(
            "DEPOSIT_BASE_LIST 컬렉션에서 해당 상품을 찾을 수 없습니다1."
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  //* 첫번째 선택된 상품선택해제 함수
  const handleProductsCancel = (productId) => {
    const index = selectedProductIds.indexOf(productId);
    const newSelectedProductIds = [...selectedProductIds];
    newSelectedProductIds[index + 1] = "";
    newSelectedProductIds[index + 2] = "";
    newSelectedProductIds[index + 3] = "";
    newSelectedProductIds[index + 4] = "";
    newSelectedProductIds[index + 5] = "";
    newSelectedProductIds[index + 6] = "";

    setSelectedProductIds(newSelectedProductIds);
    console.log(selectedProductIds);
  };

  //* 두번째 선택된 상품선택해제 함수
  const handleProductsCancel2 = (productId) => {
    const index = selectedProductIds.indexOf(productId);
    const newSelectedProductIds = [...selectedProductIds];
    newSelectedProductIds[index + 7] = "";
    newSelectedProductIds[index + 8] = "";
    newSelectedProductIds[index + 9] = "";
    newSelectedProductIds[index + 10] = "";
    newSelectedProductIds[index + 11] = "";
    newSelectedProductIds[index + 12] = "";

    setSelectedProductIds(newSelectedProductIds);
    console.log(selectedProductIds);
  };

  //* 세번째 선택된 상품선택해제 함수
  const handleProductsCancel3 = (productId) => {
    const index = selectedProductIds.indexOf(productId);
    const newSelectedProductIds = [...selectedProductIds];
    newSelectedProductIds[index + 13] = "";
    newSelectedProductIds[index + 14] = "";
    newSelectedProductIds[index + 15] = "";
    newSelectedProductIds[index + 16] = "";
    newSelectedProductIds[index + 17] = "";
    newSelectedProductIds[index + 18] = "";

    setSelectedProductIds(newSelectedProductIds);
    console.log(selectedProductIds);
  };

  //* 동일된 상품 선택시 함수 종료.
  const handleClickProduct = async (productId) => {
    const index = selectedProductIds.indexOf(productId);
    if (index !== -1) {
      alert("이미 선택된 상품입니다. 다른 상품을 선택해주세요.");
      return;
    }
    //* 선택된 상품이 3개 이상일 경우 함수 종료.
    if (selectedProductIds.every((value) => value !== "")) {
      alert("금융상품은 최대 3개까지만 비교할 수 있습니다.");
      return;
    }
    handleSelectProducts(productId);
  };

  //* setSelectedProductIds배열의 2번째 id값이 있으면 비교하기 버튼 활성화
  useEffect(() => {
    if (selectedProductIds[6].length > 1) {
      setNotAllow2(false);
    } else {
      setNotAllow2(true);
    }
  }, [selectedProductIds]);

  //* 찾기 버튼 활성화
  useEffect(() => {
    if (amountWithoutCommas >= 100000 && value) {
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
    //* 정규식으로 입력값에서 숫자만 추출
    const value = event.target.value.replace(/[^0-9]/g, "");

    if (value.length <= 10) {
      //* 10자리 이하인 경우만 amount 업데이트
      setAmount(value.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    } else {
      setAmount("1,000,000,000");
    }
    if (value.length === 10) {
      setAmount("1,000,000,000");
    }
  };

  //* ","로 포맷팅된 금액을 ","를 제거한 숫자로 변환하고, 억, 만, 원으로 포맷팅.
  const amountWithoutCommas = useMemo(() => amount.replace(/,/g, ""), [amount]);

  const formattedAmount = useMemo(() => {
    const amountNumber = parseInt(amountWithoutCommas);

    if (Number.isNaN(amountNumber)) {
      return `0원`;
    } else if (amountNumber < 100000) {
      return "100,000원 이상부터 비교 가능합니다.";
    } else if (amountNumber >= 100000000) {
      // 1억 이상
      const won = amountNumber % 10000;
      const million = Math.floor(amountNumber / 10000) % 10000;
      const billion = Math.floor(amountNumber / 100000000);

      if (billion === 0) {
        if (million === 0) {
          return `${new Intl.NumberFormat("ko-KR").format(won)}원`;
        } else if (won === 0) {
          return `${new Intl.NumberFormat("ko-KR").format(million)}만원`;
        } else {
          return `${new Intl.NumberFormat("ko-KR").format(
            million
          )}만 ${new Intl.NumberFormat("ko-KR").format(won)}원`;
        }
      } else {
        if (million === 0 && won === 0) {
          return `${new Intl.NumberFormat("ko-KR").format(billion)}억원`;
        } else if (million === 0) {
          return `${new Intl.NumberFormat("ko-KR").format(
            billion
          )}억 ${new Intl.NumberFormat("ko-KR").format(won)}원`;
        } else if (won === 0) {
          return `${new Intl.NumberFormat("ko-KR").format(
            billion
          )}억 ${new Intl.NumberFormat("ko-KR").format(million)}만원`;
        } else {
          return `${new Intl.NumberFormat("ko-KR").format(
            billion
          )}억 ${new Intl.NumberFormat("ko-KR").format(
            million
          )}만 ${new Intl.NumberFormat("ko-KR").format(won)}원`;
        }
      }
    } else if (amountNumber >= 10000) {
      // 1만 이상
      const won = amountNumber % 10000;
      const million = Math.floor(amountNumber / 10000);

      if (won === 0) {
        return `${new Intl.NumberFormat("ko-KR").format(million)}만원`;
      } else {
        return `${new Intl.NumberFormat("ko-KR").format(
          million
        )}만 ${new Intl.NumberFormat("ko-KR").format(won)}원`;
      }
    } else {
      return `${new Intl.NumberFormat("ko-KR").format(amountNumber)}원`;
    }
  }, [amountWithoutCommas]);

  //* input 상태 값 저장슬리이더 함수
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    setMonths([0, 6, 12, 24, 36][newValue]);
  };

  const handleProductTypeClick = (buttonType) => {
    if (selectedProductIds.some((value) => value !== "")) {
      alert("상품유형은 선택 후 변경이 불가능합니다.");
      return;
    }
    setProductTypes(buttonType);
  };

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
    setShowSearch(false); // 검색 결과 리스트 닫기
  };

  const handleClickSearch = (search) => {
    setShowSearch(!showSearch);
  };

  const handleClickResults = (results) => {
    if (activeTab === 1) {
      setShowResults(!showResults);
    } else {
      setActiveTab(1);
      setTimeout(() => setShowResults(!showResults), 0);
    }
  };

  const [comparingModalOpen, setComparingModalOpen] = useState(false);
  const OpenComparingModal = () => {
    setComparingModalOpen(true);
  };
  //스크롤 탑 함수
  const topLocation = useRef(null);
  const onTop = () => {
    topLocation.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  // 찜하기 - 원준 작업 중 -
  const [myBookmarkProducts, setMyBookmarkProducs] = useState([]);

  const getMyBookmarkProduct = async () => {
    const querySnapshot = await getDocs(
      collection(db, "bookmarks"),
      where("userId", "==", authService.currentUser?.uid)
    );
    const myBookmarkProduct = [];

    querySnapshot.forEach((doc) => {
      const newBookmarkProduct = {
        id: doc.id,
        ...doc.data(),
      };

      myBookmarkProduct.push(newBookmarkProduct);
      setMyBookmarkProducs(myBookmarkProduct);
    });
  };
  //tab 3(찜 목록 함수)
  // const auth = getAuth();
  // const [currentUser, setCurrentUser] = useState();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setCurrentUser(user);
  //   } else {
  //     console.log("로그인 하지 않은 유저");
  //   }
  // });
  return (
    <Wraper>
      <Cantinar>
        <TopSectionWraper>
          <TopSection>
            <TopSectionTitle>금융상품 비교하기</TopSectionTitle>
            <TopSectionSubTitle>
              예금과 적금은 동일한 종류만 비교할 수 있어요.
            </TopSectionSubTitle>
            <ProductsWraper>
              <SelectedProductsContainer>
                <SelectedProducts>
                  {/* //* 배열의 첫번째 요소에 selectedProductId 값이 있을 때만 실행 */}
                  {selectedProductIds[0] === "" ? (
                    <BeforeSelectedContainer>
                      <p>비교 박스에 자리가 남았어요.</p>
                      <img
                        src={require("../../assets/UnStagingImg.png")}
                        alt="이미지"
                      />
                    </BeforeSelectedContainer>
                  ) : (
                    <div style={{ display: "flex" }}>
                      <div>
                        <img src="" alt="logo" />
                      </div>

                      <StagingWrap>
                        <div>
                          <StagingProductsName>
                            <p
                              style={{
                                fontSize: "22px",
                                color: "#000",
                                fontWeight: "bold",
                              }}
                            >
                              {products.find(
                                (product) =>
                                  product.id === selectedProductIds[0]
                              )?.fin_prdt_nm ||
                                savingbaseList.find(
                                  (product) =>
                                    product.id === selectedProductIds[0]
                                )?.fin_prdt_nm}
                            </p>
                          </StagingProductsName>
                          <div>
                            <StagingBankName>
                              {products.find(
                                (product) =>
                                  product.id === selectedProductIds[0]
                              )?.kor_co_nm ||
                                savingbaseList.find(
                                  (product) =>
                                    product.id === selectedProductIds[0]
                                )?.kor_co_nm}
                            </StagingBankName>
                          </div>
                        </div>
                        {/* //* intr_rate, intr_rate2 값 출력 */}
                        <div
                          style={{
                            fontSize: "19px",
                            color: "#6A24FF",
                            fontWeight: "bold",
                          }}
                        >
                          <div>이자율: {selectedProductIds[1]}</div>
                          <div>최고금리: {selectedProductIds[2]}</div>
                        </div>
                      </StagingWrap>
                      <StagingCancel onClick={() => handleProductsCancel()}>
                        X
                      </StagingCancel>
                    </div>
                  )}
                </SelectedProducts>
              </SelectedProductsContainer>

              <SelectedProductsContainer>
                <SelectedProducts>
                  {/* //* 배열의 두번째 요소에 selectedProductId 값이 있을 때만 실행 */}
                  {selectedProductIds[6] === "" ? (
                    <BeforeSelectedContainer>
                      <p>비교 박스에 자리가 남았어요.</p>
                      <img
                        src={require("../../assets/UnStagingImg.png")}
                        alt="이미지"
                      />
                    </BeforeSelectedContainer>
                  ) : (
                    <div style={{ display: "flex" }}>
                      <div>
                        <img src="" alt="logo" />
                      </div>
                      <StagingWrap>
                        <div>
                          <StagingProductsName>
                            <p
                              style={{
                                fontSize: "22px",
                                color: "#000",
                                fontWeight: "bold",
                              }}
                            >
                              {products.find(
                                (product) =>
                                  product.id === selectedProductIds[6]
                              )?.fin_prdt_nm ||
                                savingbaseList.find(
                                  (product) =>
                                    product.id === selectedProductIds[6]
                                )?.fin_prdt_nm}
                            </p>
                          </StagingProductsName>
                          <div>
                            <StagingBankName>
                              {products.find(
                                (product) =>
                                  product.id === selectedProductIds[6]
                              )?.kor_co_nm ||
                                savingbaseList.find(
                                  (product) =>
                                    product.id === selectedProductIds[6]
                                )?.kor_co_nm}
                            </StagingBankName>
                          </div>
                        </div>
                        {/* //* intr_rate, intr_rate2 값 출력 */}
                        <div
                          style={{
                            fontSize: "19px",
                            color: "#6A24FF",
                            fontWeight: "bold",
                          }}
                        >
                          <div>이자율: {selectedProductIds[7]}</div>
                          <div>최고금리: {selectedProductIds[8]}</div>
                        </div>
                      </StagingWrap>
                      <StagingCancel onClick={() => handleProductsCancel2()}>
                        X
                      </StagingCancel>
                    </div>
                  )}
                </SelectedProducts>
              </SelectedProductsContainer>

              <SelectedProductsContainer>
                <SelectedProducts>
                  {/* //* 배열의 세번째 요소에 selectedProductId 값이 있을 때만 실행 */}
                  {selectedProductIds[12] === "" ? (
                    <BeforeSelectedContainer>
                      <p>비교 박스에 자리가 남았어요.</p>
                      <img
                        src={require("../../assets/UnStagingImg.png")}
                        alt="이미지"
                      />
                    </BeforeSelectedContainer>
                  ) : (
                    <div style={{ display: "flex" }}>
                      <div>
                        <img src="" alt="logo" />
                      </div>
                      <StagingWrap>
                        <div>
                          <StagingProductsName>
                            <p
                              style={{
                                fontSize: "22px",
                                color: "#000",
                                fontWeight: "bold",
                              }}
                            >
                              {products.find(
                                (product) =>
                                  product.id === selectedProductIds[12]
                              )?.fin_prdt_nm ||
                                savingbaseList.find(
                                  (product) =>
                                    product.id === selectedProductIds[12]
                                )?.fin_prdt_nm}
                            </p>
                          </StagingProductsName>
                          <div>
                            <StagingBankName>
                              {products.find(
                                (product) =>
                                  product.id === selectedProductIds[12]
                              )?.kor_co_nm ||
                                savingbaseList.find(
                                  (product) =>
                                    product.id === selectedProductIds[12]
                                )?.kor_co_nm}
                            </StagingBankName>
                          </div>
                        </div>
                        {/* //* intr_rate, intr_rate2 값 출력 */}
                        <div
                          style={{
                            fontSize: "19px",
                            color: "#6A24FF",
                            fontWeight: "bold",
                          }}
                        >
                          <div>이자율: {selectedProductIds[13]}</div>
                          <div>최고금리: {selectedProductIds[14]}</div>
                        </div>
                      </StagingWrap>
                      <StagingCancel onClick={() => handleProductsCancel3()}>
                        X
                      </StagingCancel>
                    </div>
                  )}
                </SelectedProducts>
              </SelectedProductsContainer>
            </ProductsWraper>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <ToCompare
                onClick={() => OpenComparingModal()}
                disabled={notAllow2}
              >
                비교하기
              </ToCompare>
              {comparingModalOpen && (
                <ComparingModal
                  setComparingModalOpen={setComparingModalOpen}
                  selectedProductId={[
                    selectedProductIds[0],
                    selectedProductIds[6],
                    selectedProductIds[12],
                  ]}
                  selectedProductRate={[
                    selectedProductIds[1],
                    selectedProductIds[7],
                    selectedProductIds[13],
                  ]}
                  selectedProductRate2={[
                    selectedProductIds[2],
                    selectedProductIds[8],
                    selectedProductIds[14],
                  ]}
                  selectedProductRateType={[
                    selectedProductIds[3],
                    selectedProductIds[9],
                    selectedProductIds[15],
                  ]}
                  selectedProduct={[
                    selectedProductIds[4],
                    selectedProductIds[10],
                    selectedProductIds[16],
                  ]}
                />
              )}
            </div>
          </TopSection>
        </TopSectionWraper>

        <BottomSectionWraper>
          <BottomSection>
            <TapButtonWraper>
              <TapButton
                onClick={() => handleTabChange(1)}
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
                onClick={() => handleTabChange(2)}
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
                onClick={() => handleTabChange(3)}
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
                  <div>
                    <TapContainer>
                      <TapContainerBox>
                        <TapTitleName>상품 종류를 선택해주세요.</TapTitleName>
                        <ProductWraper>
                          <ProductType //* 상품 종류 선택 버튼
                            onClick={() => {
                              handleProductTypeClick(1);
                            }}
                            style={
                              productTypes === 1
                                ? {
                                    color: "#fff",
                                    border: "1px solid #E1E1E4",
                                    backgroundColor: "#6A24FF",
                                    fontWeight: "bold",
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
                              productTypes === 2
                                ? {
                                    color: "#fff",
                                    border: "1px solid #E1E1E4",
                                    backgroundColor: "#6A24FF",
                                    fontWeight: "bold",
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
                              {productTypes === 1 ? (
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
                                      style={
                                        amountWithoutCommas >= 100000
                                          ? {}
                                          : {
                                              border: "1px solid red",
                                            }
                                      }
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
                              ) : productTypes === 2 ? (
                                <>
                                  <span style={{ fontWeight: "bold" }}>
                                    한 달 적립금
                                  </span>
                                  <span>을 입력해주세요.</span>
                                  <FormattedAmount>
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
                                  </FormattedAmount>
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
                              style={{ accentColor: "#6A24FF" }}
                            />
                          </div>
                          <MonthRangeSlider>
                            <span>기간 선택</span>
                            <span style={{ marginLeft: "-23px" }}>6개월</span>
                            <span style={{ marginLeft: "10px" }}>12개월</span>
                            <span style={{ marginLeft: "5px" }}>24개월</span>
                            <span style={{ marginLeft: "-20px" }}>36개월</span>
                          </MonthRangeSlider>
                        </MonthRangeSliderWraper>
                        <FilterSubmitWarper>
                          {setNotAllow !== true ? (
                            <FilterSubmit
                              disabled={notAllow}
                              onClick={() => {
                                handleClickResults();
                                handleClickSearch();
                                handleButtonClick();
                                // findSorting();
                                // CalculatorList();
                              }}
                            >
                              찾기
                            </FilterSubmit>
                          ) : (
                            <FilterSubmit
                              onClick={() => {
                                handleClickResults();
                                handleClickSearch();
                                // CalculatorList();
                              }}
                            >
                              닫기
                            </FilterSubmit>
                          )}
                        </FilterSubmitWarper>
                      </TapContainerBox>
                    </TapContainer>
                    {showResults === true ? (
                      <StyledBankListContainer>
                        <StyledBankList>
                          {/* <StyledBankListWrapper> */}
                          <CalculatorList
                            activeItem={activeItem}
                            setActiveItem={setActiveItem}
                            selectedProductIds={selectedProductIds}
                            handleClickProduct={handleClickProduct}
                            depositOptionalList={depositOptionalList}
                            depositbaseList={products}
                            // value={value}
                            months={months}
                          />
                          {/* </StyledBankListWrapper> */}
                        </StyledBankList>
                      </StyledBankListContainer>
                    ) : null}
                  </div>
                </Tapwraper>
              )}

              {/* <div>
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
              </div> */}

              {/* ##################################################################### */}

              {activeTab === 2 && (
                <div>
                  <TapContainerWrap>
                    <TapContainer>
                      <TapContainerBox>
                        <TapTitleName>상품 종류를 선택해주세요.</TapTitleName>
                        <ProductWraper>
                          <ProductType
                            onClick={() => {
                              handleProductTypeClick(1);
                            }}
                            style={
                              productTypes === 1
                                ? {
                                    color: "#fff",
                                    border: "1px solid #E1E1E4",
                                    backgroundColor: "#6A24FF",
                                    fontWeight: "bold",
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
                              productTypes === 2
                                ? {
                                    color: "#fff",
                                    border: "1px solid #E1E1E4",
                                    backgroundColor: "#6A24FF",
                                    fontWeight: "bold",
                                  }
                                : {}
                            }
                          >
                            정기적금
                          </ProductType>
                        </ProductWraper>
                        <FinanciialProductsWrap>
                          <FinanciialProductsFullList>
                            {/* 검색창_component */}
                            <SearchInput setSearchBank={setSearchBank} />
                            <p style={{ color: "#aaa", marginTop: "5px" }}>
                              **기본정렬은 12개월 기준입니다.
                            </p>
                          </FinanciialProductsFullList>
                        </FinanciialProductsWrap>
                      </TapContainerBox>
                    </TapContainer>
                  </TapContainerWrap>
                  <StyledBankListContainer>
                    <div>
                      <StyledBankList>
                        <div
                          ref={topLocation}
                          className="top으로 가는 위치 지정"
                        />
                        {/* <StyledBankListWrapper> */}
                        {searchBank.length > 0 ? (
                          <SearchBankList
                            searchBank={searchBank}
                            activeItem={activeItem}
                            depositbaseList={products}
                            productTypes={productTypes}
                            setActiveItem={setActiveItem}
                            savingbaseList={savingbaseList}
                            selectedProductIds={selectedProductIds}
                            savingOptionalList={savingoptionalList}
                            myBookmarkProducts={myBookmarkProducts} // my bookmark products
                            handleClickProduct={handleClickProduct}
                            depositOptionalList={depositOptionalList}
                          />
                        ) : (
                          <AllBank
                            activeItem={activeItem}
                            depositbaseList={products}
                            productTypes={productTypes}
                            setActiveItem={setActiveItem}
                            savingbaseList={savingbaseList}
                            savingoptionalList={savingoptionalList}
                            selectedProductIds={selectedProductIds}
                            handleClickProduct={handleClickProduct}
                            myBookmarkProducts={myBookmarkProducts} // my bookmark products
                            depositOptionalList={depositOptionalList}
                          />
                        )}
                        {/* </StyledBankListWrapper> */}
                      </StyledBankList>
                      <StyledBtnDiv className="스크롤탑버튼">
                        <StyledBtn onClick={onTop}>맨 위로 가기</StyledBtn>
                      </StyledBtnDiv>
                    </div>
                  </StyledBankListContainer>
                </div>
              )}
              {activeTab === 3 && (
                <>
                  <TapContainer>
                    <TapContainerBox>
                      <TapTitleName>찜 목록</TapTitleName>
                    </TapContainerBox>
                  </TapContainer>
                  {/* 찜목록 들어갈 컴포넌트 */}
                  {/* <BankBookMark
                    currentUser={currentUser}
                    setActiveItem={setActiveItem}
                  /> */}
                  <BookmarkPrdtList />
                </>
              )}
            </div>
          </BottomSection>
        </BottomSectionWraper>
      </Cantinar>
    </Wraper>
  );
};

export default ServicePage;
