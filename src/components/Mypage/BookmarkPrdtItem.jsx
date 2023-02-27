import React, { useState } from "react";
import logoLists from "../../assets/logo/logo";

import { StyledBankLists } from "../../pages/ServicePage/style";
import {
  StyledContentDiv,
  StyledDiv,
  StyledMoreListDiv,
  StyledSavingRateP,
  StyledSearchSaveTrmDiv,
} from "../../components/SearchBankList/style";
import {
  StyledBankNameP,
  StyledProductTitleDiv,
} from "../../components/AllBankList/style";
import DetailBookMark from "../BookMarkList/DetailBookMark";
import { StyledImg } from "../../components/AllBankList/style";
import Bookmarks from "../ServicePage/Bookmarks";

function BookmarkPrdtItem({ items, allOptionList, sortMonths }) {
  const [open, setOpen] = useState("");
  console.log(items);
  return (
    <div style={{ margin: "auto" }}>
      {items?.map((item) => (
        <div key={item.productDocId}>
          <div className="스크롤 구역" style={{ overflow: "auto" }}>
            <StyledBankLists>
              <div
                style={{
                  width: "780px",
                  height: "145px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="StyledListDiv"
              >
                <StyledDiv>
                  <StyledImg
                    src={logoLists[item.productCoCode]}
                    alt="로고"
                    style={{ marginLeft: "20px" }}
                  />
                  <div>
                    <StyledContentDiv>
                      <StyledProductTitleDiv>
                        <h2
                          style={{
                            fontSize: "20px",
                          }}
                        >
                          {item.productName}
                        </h2>
                        <StyledBankNameP>{item.productCoName}</StyledBankNameP>
                      </StyledProductTitleDiv>

                      <StyledSearchSaveTrmDiv>
                        {/* 여기가 지금 금리에따라서 여러개 나오는 부분인데 괜찮으시다면 searchDepositLists부분 참고하셔서 만드셔도 될껏같습니다. */}
                        <h4 style={{ fontWeight: "bold", color: "#aaa" }}>
                          최고금리
                        </h4>
                        {/* 여기가 경고뜨는 부분 지금 p태그가 h4를 감싸고 있음 ,,고칠예정 ㅎ */}
                        {allOptionList?.map((v) =>
                          v.fin_prdt_cd === item.productId ? (
                            <StyledSavingRateP key={item.id}>
                              <p style={{ color: "#aaa" }}>{v.save_trm}개월</p>
                              <h4
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "18px",
                                }}
                              >
                                {v.intr_rate2}%
                              </h4>
                            </StyledSavingRateP>
                          ) : null
                        )}
                      </StyledSearchSaveTrmDiv>
                    </StyledContentDiv>
                  </div>
                </StyledDiv>
                <StyledMoreListDiv
                  className="여기가 자세히 눌렀을때 상세정보 나오는 공간이예여"
                  style={{ marginRight: "2%" }}
                >
                  <Bookmarks
                    productId={item.fin_prdt_cd}
                    productName={item.fin_prdt_nm}
                    productCoName={item.kor_co_nm}
                    productDocId={item.id}
                    productCoCode={item.fin_co_no}
                  />
                  <button
                    title="자세히 버튼"
                    style={{
                      width: "60px",
                      height: "30px",
                    }}
                    s
                    onClick={() => {
                      setOpen(item.productDocId);
                    }}
                  >
                    {open === item.productDocId ? <></> : "자세히∨"}
                  </button>
                </StyledMoreListDiv>
              </div>

              {open === item.productDocId ? (
                <DetailBookMark
                  base={item}
                  setOpen={setOpen}
                  depositOptionalList={allOptionList}
                  sortMonths={sortMonths}
                />
              ) : null}
            </StyledBankLists>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookmarkPrdtItem;
