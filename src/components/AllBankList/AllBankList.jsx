//전체목록이 들어가는 은행들의 리스트를 여기서 맵돌릴꺼다.
import React, { useState } from "react";
import { StyledListContainer, StyledImg } from "./style";
// import axios from "axios";
import logoLists from "../../assets/logo/logo";
// import InfiniteScroll from "react-infinite-scroll-component";

function AllBankList({ depositDB, depositbaseList }) {
  //BD:optionList를 최고금리 순으로 가져온 데이터
  //depositbaseList : 예금상품 baseList
  // console.log(BD);

  // const [dataSource, setDataSource] = useState(Array.from(BD));
  // console.log(dataSource);
  // const [hasMore, setHasMore] = useState(true);

  // const fetchMoreData = () => {
  //   if (dataSource.length < 10) {
  //     setTimeout(() => {
  //       setDataSource(dataSource.concat(Array.from(BD, { length: 10 })));
  //     }, 500);
  //   } else {
  //     setHasMore(false);
  //   }
  // };

  return (
    <StyledListContainer>
      {/* <InfiniteScroll
        dataLength={dataSource?.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p>...데이터를 불러오는 중입니다.</p>}
        endMessage={<p>모든 데이터를 불러왔습니다.</p>}
        scrollableTarget="parentScroller"
      > */}

      {depositDB &&
        depositDB?.map((i) =>
          depositbaseList?.map((v) =>
            i.fin_prdt_cd === v.fin_prdt_cd ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "920px",
                  // height: "129px",
                }}
              >
                {i.save_trm === "12" ? (
                  <>
                    <div style={{ display: "flex", alignContent: "center" }}>
                      {/* 은행 로고  */}
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
                      {/* 상품이름 */}
                      <h2
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        {v.fin_prdt_nm}
                      </h2>
                    </div>
                    {/* 최고금리 */}
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <h4>{i.intr_rate2}</h4>
                      <div style={{ marginLeft: "10px", marginTop: "15px" }}>
                        <button style={{ width: "30px", height: "30px" }}>
                          +
                        </button>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            ) : null
          )
        )}
      {/* </InfiniteScroll> */}
    </StyledListContainer>
  );
}

export default AllBankList;
