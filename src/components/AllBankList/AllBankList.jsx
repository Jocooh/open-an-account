//전체목록이 들어가는 은행들의 리스트를 여기서 맵돌릴꺼다.
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  StyledImg,
  StyledSaveTrmDiv,
  StyledProductTitleDiv,
  StyledRateP,
  StyledBankNameP,
} from "./style";
import {
  StyledBankLists,
  StyledBankListWrapper,
  StyledBookMark,
} from "../../pages/ServicePage/style";
import logoLists from "../../assets/logo/logo";
import { BsFillBookmarkFill } from "react-icons/bs";
// import InfiniteScroll from "react-infinite-scroll-component";

function AllBankList({ depositbaseList, depositOptionalList }) {
  // const [hasMore, setHasMore] = useState(true);

  //최고금리순으로 가져오는 함수
  const depositDB = depositOptionalList?.sort(function (a, b) {
    return b.intr_rate2 - a.intr_rate2;
  });
  // const sliceDB = depositDB?.slice(0, 7);
  // console.log(sliceDB);
  // const [dataSource, setDataSource] = useState(sliceDB);

  // const fetchMoreData = () => {
  //   if (dataSource.length < 40) {
  //     setTimeout(() => {
  //       setDataSource(dataSource?.concat(depositDB?.slice(0, 7)));
  //     }, 500);
  //   } else {
  //     setHasMore(false);
  //   }
  // };

  return (
    <StyledBankListWrapper>
      {/* <InfiniteScroll
        dataLength={dataSource?.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p>...loading</p>}
        endMessage={<p>you are all set!</p>}
      > */}
      {depositDB &&
        depositDB?.map((i) =>
          depositbaseList?.map((v) =>
            i.fin_prdt_cd === v.fin_prdt_cd ? (
              <>
                {i.save_trm === "12" ? (
                  <StyledBankLists>
                    {/* 로고 */}

                    <div>
                      {logoLists.logos.map((t) =>
                        Object.keys(t)[0] === v.fin_co_no ? (
                          <StyledImg
                            src={Object.values(t)[0]}
                            alt="로고"
                            key={v.fin_co_subm_day}
                          />
                        ) : null
                      )}
                    </div>
                    <div
                      style={{
                        width: "780px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="상품명 은행이름 이자율 한꺼번에 묶은 태그">
                        <StyledProductTitleDiv>
                          {/* product name */}
                          <h2
                            style={{
                              fontSize: "20px",
                            }}
                          >
                            {v.fin_prdt_nm}
                          </h2>
                          {/* bank Name */}
                          <StyledBankNameP>{v.kor_co_nm}</StyledBankNameP>
                        </StyledProductTitleDiv>
                        <StyledSaveTrmDiv>
                          {/* 최대금리 */}
                          <StyledRateP>
                            최대금리
                            {i.intr_rate2}
                          </StyledRateP>
                          {/* 이자율 -> 일반금리 */}
                          <StyledRateP>일반금리 {i.intr_rate}</StyledRateP>
                        </StyledSaveTrmDiv>
                      </div>
                      <BsFillBookmarkFill style={StyledBookMark} />
                    </div>
                  </StyledBankLists>
                ) : null}
              </>
            ) : null
          )
        )}
      {/* </InfiniteScroll> */}
    </StyledBankListWrapper>
  );
}

export default AllBankList;
