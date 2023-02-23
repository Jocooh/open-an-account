import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import logoLists from "../../assets/logo/logo";
import { db } from "../../config/firebase";
import {
  StyledListDiv,
  StyledBankListWrapper,
  StyledBankLists,
} from "../../pages/ServicePage/style";
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

function BookmarkPrdtItem({ items, allOptionList, sortMonths }) {
  const [open, setOpen] = useState("");

  return (
    <div style={{ width: "500px" }}>
      {items?.map((item) => (
        <div key={item.productDocId}>
          <div className="스크롤 구역" style={{ overflow: "auto" }}>
            <StyledBankLists>
              <div style={{ display: "flex" }}>
                <div>
                  <StyledDiv>
                    <div>
                      {logoLists.logos.map((logo) =>
                        Object.keys(logo)[0] === item.productCoCode ? (
                          <StyledImg src={Object.values(logo)[0]} alt="로고" />
                        ) : null
                      )}
                    </div>
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
                          <StyledBankNameP>
                            {item.productCoName}
                          </StyledBankNameP>
                        </StyledProductTitleDiv>
                        <StyledSearchSaveTrmDiv>
                          {/* 여기가 지금 금리에따라서 여러개 나오는 부분인데 괜찮으시다면 searchDepositLists부분 참고하셔서 만드셔도 될껏같습니다. */}
                          <h4 style={{ fontWeight: "bold", color: "#aaa" }}>
                            최고금리
                          </h4>
                          {/* 여기가 경고뜨는 부분 지금 p태그가 h4를 감싸고 있음 ,,고칠예정 ㅎ */}
                          <StyledSavingRateP>
                            <div style={{ display: "flex", gap: "15px" }}>
                              {allOptionList?.map((v) =>
                                v.fin_prdt_cd === item.productId ? (
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: "10px",
                                    }}
                                  >
                                    <p style={{ color: "#aaa" }}>
                                      {v.save_trm}
                                    </p>
                                    <h4
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                      }}
                                    >
                                      {v.intr_rate2}%
                                    </h4>
                                  </div>
                                ) : null
                              )}
                            </div>
                          </StyledSavingRateP>
                        </StyledSearchSaveTrmDiv>
                      </StyledContentDiv>
                    </div>
                  </StyledDiv>
                  <StyledMoreListDiv className="여기가 자세히 눌렀을때 상세정보 나오는 공간이예여">
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
              </div>
              {open === item.productDocId && (
                <DetailBookMark
                  base={item}
                  setOpen={setOpen}
                  depositOptionalList={allOptionList}
                  sortMonths={sortMonths}
                />
              )}
            </StyledBankLists>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookmarkPrdtItem;
