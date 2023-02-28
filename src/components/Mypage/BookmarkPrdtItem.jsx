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

  return (
    <div style={{ margin: "auto" }}>
      {items?.map((item) => (
        <div key={item.docId} style={{ width: "780px", margin: "auto" }}>
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
                    src={logoLists[item.fin_co_no]}
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
                          {item.fin_prdt_nm}
                        </h2>
                        <StyledBankNameP>{item.kor_co_nm}</StyledBankNameP>
                      </StyledProductTitleDiv>

                      <StyledSearchSaveTrmDiv>
                        <h4 style={{ fontWeight: "bold", color: "#aaa" }}>
                          최고금리
                        </h4>

                        {allOptionList?.map((v) =>
                          v.fin_prdt_cd === item.fin_prdt_cd ? (
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
                  <Bookmarks baseList={item} isMyPage={true} />
                  <button
                    title="자세히 버튼"
                    style={{
                      width: "60px",
                      height: "30px",
                    }}
                    s
                    onClick={() => {
                      setOpen(item.docId);
                    }}
                  >
                    {open === item.docId ? <></> : "자세히∨"}
                  </button>
                </StyledMoreListDiv>
              </div>

              {open === item.docId ? (
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
