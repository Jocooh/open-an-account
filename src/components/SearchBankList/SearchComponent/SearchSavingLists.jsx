import React from "react";
import logoLists from "../../../assets/logo/logo";
import { BsFillBookmarkFill } from "react-icons/bs";
import {
  StyledBankLists,
  StyledBookMark,
} from "../../../pages/ServicePage/style";
import {
  StyledImg,
  StyledProductTitleDiv,
  StyledBankNameP,
} from "../../AllBankList/style";
import {
  StyledListDiv,
  StyledDiv,
  StyledContentDiv,
  StyledSearchSaveTrmDiv,
  StyledSavingRateP,
  StyledMoreListDiv,
} from "../style";
import Bookmarks from "../../Bookmarks";

function SearchSavingLists({
  savingbaseList,
  searchBank,
  savingOptionalList,
  myBookmarkProducts,
}) {
  return (
    <div>
      {savingbaseList &&
        savingbaseList
          ?.filter((val) => {
            if (searchBank === "") {
              return val;
            } else if (val.kor_co_nm.includes(searchBank)) {
              return val;
            } else if (val.fin_prdt_nm.includes(searchBank)) {
              return val;
            }
          })
          .map((v) => {
            return (
              <StyledBankLists>
                <StyledListDiv>
                  <StyledDiv>
                    <div key={v.fin_prdt_nm}>
                      {logoLists.logos.map((logo) =>
                        Object.keys(logo)[0] === v.fin_co_no ? (
                          <StyledImg
                            src={Object.values(logo)[0]}
                            alt="로고"
                            key={v.fin_co_subm_day}
                          />
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
                            {v.fin_prdt_nm}
                          </h2>

                          <StyledBankNameP>{v.kor_co_nm}</StyledBankNameP>
                        </StyledProductTitleDiv>

                        <StyledSearchSaveTrmDiv>
                          <h4 style={{ fontWeight: "bold", color: "#aaa" }}>
                            최고금리
                          </h4>
                          {savingOptionalList?.map((i) =>
                            i.fin_prdt_cd === v.fin_prdt_cd ? (
                              <>
                                <StyledSavingRateP>
                                  <p style={{ color: "#aaa" }}>
                                    {i.save_trm}개월
                                  </p>
                                  <p style={{ fontWeight: "bold" }}>
                                    {i.intr_rate2}%
                                  </p>
                                </StyledSavingRateP>
                              </>
                            ) : null
                          )}
                        </StyledSearchSaveTrmDiv>
                      </StyledContentDiv>
                    </div>
                  </StyledDiv>
                  <StyledMoreListDiv>
                    <Bookmarks
                      myBookmarkProducts={myBookmarkProducts} // my bookmark products
                      productId={v.fin_prdt_cd}
                      productName={v.fin_prdt_nm}
                      productCoName={v.kor_co_nm}
                      productDocId={v.id}
                    />
                    <button style={{ width: "50px", height: "30px" }}>
                      더 보기
                    </button>
                  </StyledMoreListDiv>
                </StyledListDiv>
              </StyledBankLists>
            );
          })}
    </div>
  );
}

export default SearchSavingLists;
