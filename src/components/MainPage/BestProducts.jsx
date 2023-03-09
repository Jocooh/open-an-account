import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import {
  BestProductWrap,
  CurrentState,
  BtProductTitleWrap,
  BestProductTitle,
  KrBank,
  KrDate,
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
  BankLogo,
} from "../../pages/MainPage/style";
import logoList from "../../assets/logo/logo";
import { timeToLocaleString } from "../../utils/Date";
const BestProducts = () => {
  const [bookmarkListAll, setBookmarkListAll] = useState([]);
  // const [depositList, setDepositList] = useState([]);
  // const [savingList, setSavingList] = useState([]);
  const navigate = useNavigate();

  // 오늘 날짜
  // let today = new Date();
  // let year = today.getFullYear();
  // let month = today.getMonth() + 1;
  // let date = today.getDate();
  // // const dateNow = year + ".0" + month + ".0" + date;
  // const dateNow =
  //   year +
  //   (month > 10 ? month : ".0" + month) +
  //   (date > 10 ? date : ".0" + date);

  // 전체 북마크 내역 불러오기
  const getBookmarkList = async () => {
    const q = query(collection(db, "bookmarks"));
    const querySnapshot = await getDocs(q);
    let dataArray = [];
    querySnapshot.forEach((doc) => {
      dataArray.push(doc.data());
    });
    setBookmarkListAll(dataArray);
  };

  // 예 적금 필터
  const filterSaving = bookmarkListAll?.filter(
    (saving) => saving?.productTypes === 2
  );
  // console.log(filterSaving);
  const filterDeposit = bookmarkListAll?.filter(
    (deposit) => deposit?.productTypes === 1
  );
  // console.log(filterDeposit);

  // 예 적금 누적
  const bestSaving = filterSaving
    ?.map((saving) => [
      saving?.fin_prdt_nm,
      saving?.kor_co_nm,
      saving?.fin_co_no,
    ])
    ?.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
  // console.log("bestSaving", bestSaving);
  const bestDeposit = filterDeposit
    ?.map((deposit) => [
      deposit?.fin_prdt_nm,
      deposit?.kor_co_nm,
      deposit?.fin_co_no,
    ])
    ?.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
  // console.log("bestDeposit", bestDeposit);

  // 예 적금 북마크 순
  const changeSaving = Object.entries(bestSaving);
  // console.log(changeSaving);
  const sortChangeSaving = changeSaving?.sort((a, b) => b[1] - a[1]);
  // console.log(sortChangeSaving);
  const changeDeposit = Object.entries(bestDeposit);
  // console.log(changeDeposit);
  const sortChangeDeposit = changeDeposit?.sort((a, b) => b[1] - a[1]);
  // console.log(sortChangeDeposit);

  // optional chaining 을 간소화하려면... 변수를 state 화...
  // useEffect(()=>{},[bookmarkListAll])

  // 로딩, 에러 상태 추가
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    setError(undefined);

    getBookmarkList()
      .catch((e) => setError("에러 발생"))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <BestProductWrap>
      <CurrentState>
        <BtProductTitleWrap>
          <img src={require("../../assets/mainpage/bestproduct.png")} />
          <BestProductTitle>인기 금융상품</BestProductTitle>
          <KrDate>{timeToLocaleString(Date.now()).slice(0, -12)} 기준</KrDate>
        </BtProductTitleWrap>
        <KrBankRateWrap>
          <KrBank>한국은행 기준금리</KrBank>
          <KrBankRate>3.50%</KrBankRate>
          <KrBankRateVar>
            {/* <img src={require("../../assets/mainpage/variation.png")} /> */}
            <div>🔺0.50</div>
          </KrBankRateVar>
        </KrBankRateWrap>
      </CurrentState>
      <BtProducts>
        <BtProduct>
          <BtProductTitle>정기적금</BtProductTitle>
          <BtProductList>
            <BtProductRank>1</BtProductRank>
            <BankLogo
              src={
                logoList[sortChangeSaving?.[0]?.[0]?.split(",")?.[2]] ??
                require("../../assets/no.png")
              }
              alt="로고"
            />
            <BtProductContent>
              <div>
                <BtProductName>
                  {/* {sortChangeSaving[0][0]?.split(",")[0]} */}
                  {sortChangeSaving?.[0]?.[0]?.split(",")?.[0] ??
                    "가져올 상품이 없어요!"}
                </BtProductName>
                <div>{sortChangeSaving?.[0]?.[0]?.split(",")?.[1] ?? null}</div>
              </div>
              {/* <RateWrapper>
                <MaxRate>
                  {sortChangeSaving?.[0]?.[0]?.split(",")?.[0] ? (
                    <img
                      src={require("../../assets/bookmarked.png")}
                      style={{ width: "15px", height: "20px" }}
                      alt="북마크"
                    />
                  ) : null}

                  {sortChangeSaving?.[0]?.[1]}
                </MaxRate>
              </RateWrapper> */}
            </BtProductContent>
          </BtProductList>
          <BtProductList>
            <BtProductRank>2</BtProductRank>
            <BankLogo
              src={
                logoList[sortChangeSaving?.[1]?.[0]?.split(",")?.[2]] ??
                require("../../assets/no.png")
              }
              alt="로고"
            />
            <BtProductContent>
              <div>
                <BtProductName>
                  {sortChangeSaving?.[1]?.[0]?.split(",")?.[0] ??
                    "가져올 상품이 없어요!"}
                </BtProductName>
                <div>{sortChangeSaving?.[1]?.[0]?.split(",")?.[1] ?? null}</div>
              </div>
              {/* <RateWrapper>
                <MaxRate>
                  {sortChangeSaving?.[1]?.[0]?.split(",")?.[0] ? (
                    <img
                      src={require("../../assets/bookmarked.png")}
                      style={{ width: "15px", height: "20px" }}
                      alt="북마크"
                    />
                  ) : null}

                  {sortChangeSaving?.[1]?.[1]}
                </MaxRate>
              </RateWrapper> */}
            </BtProductContent>
          </BtProductList>
          <BtProductList>
            <BtProductRank>3</BtProductRank>
            <BankLogo
              src={
                logoList[sortChangeSaving?.[2]?.[0]?.split(",")?.[2]] ??
                require("../../assets/no.png")
              }
              alt="로고"
            />
            <BtProductContent>
              <div>
                <BtProductName>
                  {sortChangeSaving?.[2]?.[0]?.split(",")?.[0] ??
                    "가져올 상품이 없어요!"}
                </BtProductName>
                <div>{sortChangeSaving?.[2]?.[0]?.split(",")?.[1] ?? null}</div>
              </div>
              {/* <RateWrapper>
                <MaxRate>
                  {sortChangeSaving?.[2]?.[0]?.split(",")?.[0] ? (
                    <img
                      src={require("../../assets/bookmarked.png")}
                      style={{ width: "15px", height: "20px" }}
                      alt="북마크"
                    />
                  ) : null}

                  {sortChangeSaving?.[2]?.[1]}
                </MaxRate>
              </RateWrapper> */}
            </BtProductContent>
          </BtProductList>
        </BtProduct>
        <BtProduct>
          {/* ########################################################################################## */}
          <BtProductTitle>인기예금</BtProductTitle>
          <BtProductList>
            <BtProductRank>1</BtProductRank>
            <BankLogo
              src={
                logoList[sortChangeDeposit?.[0]?.[0]?.split(",")?.[2]] ??
                require("../../assets/no.png")
              }
              alt="로고"
            />
            <BtProductContent>
              <div>
                <BtProductName>
                  {sortChangeDeposit?.[0]?.[0]?.split(",")?.[0] ??
                    "가져올 상품이 없어요!"}
                </BtProductName>
                <div>{sortChangeDeposit?.[0]?.[0]?.split(",")?.[1]}</div>
              </div>
              {/* <RateWrapper>
                <MaxRate>
                  {sortChangeDeposit?.[0]?.[0]?.split(",")?.[0] ? (
                    <img
                      src={require("../../assets/bookmarked.png")}
                      style={{ width: "15px", height: "20px" }}
                      alt="북마크"
                    />
                  ) : null}

                  {sortChangeDeposit?.[0]?.[1]}
                </MaxRate>
              </RateWrapper> */}
            </BtProductContent>
          </BtProductList>
          <BtProductList>
            <BtProductRank>2</BtProductRank>
            <BankLogo
              src={
                logoList[sortChangeDeposit?.[1]?.[0]?.split(",")?.[2]] ??
                require("../../assets/no.png")
              }
              alt="로고"
            />
            <BtProductContent>
              <div>
                <BtProductName>
                  {sortChangeDeposit?.[1]?.[0]?.split(",")?.[0] ??
                    "가져올 상품이 없어요!"}
                </BtProductName>
                <div>{sortChangeDeposit?.[1]?.[0]?.split(",")?.[1]}</div>
              </div>
              {/* <RateWrapper>
                <MaxRate>
                  {sortChangeDeposit?.[1]?.[0]?.split(",")?.[0] ? (
                    <img
                      src={require("../../assets/bookmarked.png")}
                      style={{ width: "15px", height: "20px" }}
                      alt="북마크"
                    />
                  ) : null}

                  {sortChangeDeposit?.[1]?.[1]}
                </MaxRate>
              </RateWrapper> */}
            </BtProductContent>
          </BtProductList>
          <BtProductList>
            <BtProductRank>3</BtProductRank>
            <BankLogo
              src={
                logoList[sortChangeDeposit?.[2]?.[0]?.split(",")?.[2]] ??
                require("../../assets/no.png")
              }
              alt="로고"
            />
            <BtProductContent>
              <div>
                <BtProductName>
                  {sortChangeDeposit?.[2]?.[0]?.split(",")?.[0] ??
                    "가져올 상품이 없어요!"}
                </BtProductName>
                <div>{sortChangeDeposit?.[2]?.[0]?.split(",")?.[1]}</div>
              </div>
              {/* <RateWrapper>
                <MaxRate>
                  {sortChangeDeposit?.[2]?.[0]?.split(",")?.[0] ? (
                    <img
                      src={require("../../assets/bookmarked.png")}
                      style={{ width: "15px", height: "20px" }}
                      alt="북마크"
                    />
                  ) : null}

                  {sortChangeDeposit?.[2]?.[1]}
                </MaxRate>
              </RateWrapper> */}
            </BtProductContent>
          </BtProductList>
        </BtProduct>
      </BtProducts>
      {/* ################################# */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          gap: "10px",
          textAlign: "center",
          alignContents: "center",
        }}
      >
        <img
          src={require("../../assets/Union.png")}
          style={{ width: "16px", height: "29px", marginTop: "10px" }}
          alt="번개"
        />
        <BestProductTitle> 빠른 상품 비교 </BestProductTitle>

        <button
          style={{
            width: "209px",
            height: "50px",
            backgroundColor: "#6a24ff",
            color: "white",
            borderRadius: "10px",
            fontSize: "17px",
          }}
          onClick={() => {
            navigate("/service");
          }}
        >
          상품 찾기
        </button>
      </div>
    </BestProductWrap>
  );
};

export default BestProducts;

// 북마크 전체 내역 불러오기
// const getBookmarksListAll = () => {
//       const q = query(collection(db, "bookmarks"));
//       const getBookmarksAll = onSnapshot(q, (snapshot) => {
//         const BookmarksAll = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//         }));
//         setBookmarksOrderBy(BookmarksAll);
//       });
//       return getBookmarksAll;
// }
