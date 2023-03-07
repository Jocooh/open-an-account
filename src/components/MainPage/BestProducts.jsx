import { async } from "@firebase/util";
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
const BestProducts = () => {
  const [bookmarkListAll, setBookmarkListAll] = useState([]);
  // const [depositList, setDepositList] = useState([]);
  // const [savingList, setSavingList] = useState([]);

  // 오늘 날짜 (이게 맞나 싶다)
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  const dateNow = year + ".0" + month + ".0" + date;

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

  useEffect(() => {
    getBookmarkList();
  }, []);

  // 변수를 state 화 나중에...
  // useEffect(()=>{},[bookmarkListAll])

  return (
    <BestProductWrap>
      <CurrentState>
        <BtProductTitleWrap>
          <img src={require("../../assets/mainpage/bestproduct.png")} />
          <BestProductTitle>인기 금융상품</BestProductTitle>
          <KrDate>{dateNow} 기준</KrDate>
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
          <BtProductTitle>인기 적금</BtProductTitle>
          <BtProductList>
            <BtProductRank>1</BtProductRank>
            <BankLogo
              src={logoList[sortChangeSaving?.[0]?.[0]?.split(",")?.[2]]}
              alt="로고"
            />
            <BtProductContent>
              <div>
                <BtProductName>
                  {/* {sortChangeSaving[0][0]?.split(",")[0]} */}
                  {sortChangeSaving?.[0]?.[0]?.split(",")?.[0]}
                </BtProductName>
                <div>{sortChangeSaving?.[0]?.[0]?.split(",")?.[1]}</div>
              </div>
              <RateWrapper>
                <MaxRate>
                  <img
                    src={require("../../assets/bookmarked.png")}
                    style={{ width: "15px", height: "20px" }}
                    alt="북마크"
                  />
                  {sortChangeSaving?.[0]?.[1]}
                </MaxRate>
              </RateWrapper>
            </BtProductContent>
          </BtProductList>
          <BtProductList>
            <BtProductRank>2</BtProductRank>
            <BankLogo
              src={logoList[sortChangeSaving?.[1]?.[0]?.split(",")?.[2]]}
              alt="로고"
            />
            <BtProductContent>
              <div>
                <BtProductName>
                  {sortChangeSaving?.[1]?.[0]?.split(",")?.[0]}
                </BtProductName>
                <div>{sortChangeSaving?.[1]?.[0]?.split(",")?.[1]}</div>
              </div>
              <RateWrapper>
                <MaxRate>
                  <img
                    src={require("../../assets/bookmarked.png")}
                    style={{ width: "15px", height: "20px" }}
                    alt="북마크"
                  />
                  {sortChangeSaving?.[1]?.[1]}
                </MaxRate>
              </RateWrapper>
            </BtProductContent>
          </BtProductList>
          <BtProductList>
            <BtProductRank>3</BtProductRank>
            <BankLogo
              src={logoList[sortChangeSaving?.[2]?.[0]?.split(",")?.[2]]}
              alt="로고"
            />
            <BtProductContent>
              <div>
                <BtProductName>
                  {sortChangeSaving?.[2]?.[0]?.split(",")?.[0]}
                </BtProductName>
                <div>{sortChangeSaving?.[2]?.[0]?.split(",")?.[1]}</div>
              </div>
              <RateWrapper>
                <MaxRate>
                  <img
                    src={require("../../assets/bookmarked.png")}
                    style={{ width: "15px", height: "20px" }}
                    alt="북마크"
                  />
                  {sortChangeSaving?.[2]?.[1]}
                </MaxRate>
              </RateWrapper>
            </BtProductContent>
          </BtProductList>
        </BtProduct>
        <BtProduct>
          {/* ########################################################################################## */}
          <BtProductTitle>인기 예금</BtProductTitle>
          <BtProductList>
            <BtProductRank>1</BtProductRank>
            <BankLogo
              src={logoList[sortChangeDeposit?.[0]?.[0]?.split(",")?.[2]]}
              alt="로고"
            />
            <BtProductContent>
              <div>
                <BtProductName>
                  {sortChangeDeposit?.[0]?.[0]?.split(",")?.[0]}
                </BtProductName>
                <div>{sortChangeDeposit?.[0]?.[0]?.split(",")?.[1]}</div>
              </div>
              <RateWrapper>
                <MaxRate>
                  <img
                    src={require("../../assets/bookmarked.png")}
                    style={{ width: "15px", height: "20px" }}
                    alt="북마크"
                  />
                  {sortChangeDeposit?.[0]?.[1]}
                </MaxRate>
              </RateWrapper>
            </BtProductContent>
          </BtProductList>
          <BtProductList>
            <BtProductRank>2</BtProductRank>
            <BankLogo
              src={logoList[sortChangeDeposit?.[1]?.[0]?.split(",")?.[2]]}
              alt="로고"
            />
            <BtProductContent>
              <div>
                <BtProductName>
                  {sortChangeDeposit?.[1]?.[0]?.split(",")?.[0]}
                </BtProductName>
                <div>{sortChangeDeposit?.[1]?.[0]?.split(",")?.[1]}</div>
              </div>
              <RateWrapper>
                <MaxRate>
                  <img
                    src={require("../../assets/bookmarked.png")}
                    style={{ width: "15px", height: "20px" }}
                    alt="북마크"
                  />
                  {sortChangeDeposit?.[1]?.[1]}
                </MaxRate>
              </RateWrapper>
            </BtProductContent>
          </BtProductList>
          <BtProductList>
            <BtProductRank>3</BtProductRank>
            <BankLogo
              src={logoList[sortChangeDeposit?.[2]?.[0]?.split(",")?.[2]]}
              alt="로고"
            />
            <BtProductContent>
              <div>
                <BtProductName>
                  {sortChangeDeposit?.[2]?.[0]?.split(",")?.[0]}
                </BtProductName>
                <div>{sortChangeDeposit?.[2]?.[0]?.split(",")?.[1]}</div>
              </div>
              <RateWrapper>
                <MaxRate>
                  <img
                    src={require("../../assets/bookmarked.png")}
                    style={{ width: "15px", height: "20px" }}
                    alt="북마크"
                  />
                  {sortChangeDeposit?.[2]?.[1]}
                </MaxRate>
              </RateWrapper>
            </BtProductContent>
          </BtProductList>
        </BtProduct>
      </BtProducts>
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
