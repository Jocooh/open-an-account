import {
  collection,
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
} from "../../pages/MainPage/style";
const BestProducts = () => {
  const [bookmarksOrderBy, setBookmarksOrderBy] = useState([]);

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  const dateNow = year + ".0" + month + ".0" + date;

  // useEffect(() => {
  //   const q = query(
  //     collection(db, "bookmarks"),
  //     orderBy("fin_prdt_cd"),
  //     limit(3)
  //   );

  //   const getBookmarksOrderBy = onSnapshot(q, (snapshot) => {
  //     const newBookmarkOrderBy = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //     }));
  //     setBookmarksOrderBy(newBookmarkOrderBy);
  //   });
  //   return getBookmarksOrderBy;
  // }, []);
  // console.log(bookmarksOrderBy);

  return (
    <BestProductWrap>
      <CurrentState>
        <BtProductTitleWrap>
          <img src={require("../../assets/mainpage/bestproduct.png")} />
          <BestProductTitle>인기 금융 상품</BestProductTitle>
          <KrDate>{dateNow} 기준</KrDate>
        </BtProductTitleWrap>
        <KrBankRateWrap>
          <KrBank>한국은행 기준 금리</KrBank>
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
