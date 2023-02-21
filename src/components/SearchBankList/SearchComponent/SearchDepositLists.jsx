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

import SearchDepositDetail from "../Detail/SearchDepositDetail";

import Bookmarks from "../../Bookmarks";

function SearchDepositLists({
  //이거를 검색버튼 클릭 후에 들어갈 state로 돌리자.
  activeItem,
  searchBank,
  setActiveItem,
  depositbaseList,
  handleClickProduct,
  depositOptionalList,
}) {
  return (
    <div>
      {depositbaseList
        ?.filter((val) => {
          if (searchBank === "") {
            return val;
          } else if (val.kor_co_nm.includes(searchBank)) {
            return val;
          } else if (val.fin_prdt_nm.includes(searchBank)) {
            return val;
          }
        })
        .map((base) => {
          return (
            <StyledBankLists key={base.id}>
              <div style={{ display: "flex" }}>
                <StyledListDiv>
                  <StyledDiv
                    onClick={() => {
                      handleClickProduct(base.id);
                    }}
                  >
                    <div key={base.fin_prdt_nm}>
                      {logoLists.logos.map((logo) =>
                        Object.keys(logo)[0] === base.fin_co_no ? (
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
                            {base.fin_prdt_nm}
                          </h2>

                          <StyledBankNameP>{base.kor_co_nm}</StyledBankNameP>
                        </StyledProductTitleDiv>

                        <StyledSearchSaveTrmDiv>
                          <h4 style={{ fontWeight: "bold", color: "#aaa" }}>
                            최고금리
                          </h4>
                          {depositOptionalList?.map((option) =>
                            option.fin_prdt_cd === base.fin_prdt_cd ? (
                              <StyledSavingRateP key={option.id}>
                                <p style={{ color: "#aaa" }}>
                                  {option.save_trm}개월
                                </p>
                                <h4
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                  }}
                                >
                                  {option.intr_rate2}%
                                </h4>
                              </StyledSavingRateP>
                            ) : null
                          )}
                        </StyledSearchSaveTrmDiv>
                      </StyledContentDiv>
                    </div>
                  </StyledDiv>
                  <StyledMoreListDiv>
                    <Bookmarks
                      productId={base.fin_prdt_cd}
                      productName={base.fin_prdt_nm}
                      productCoName={base.kor_co_nm}
                      productDocId={base.id}
                    />
                    <button
                      style={{
                        width: "60px",
                        height: "30px",
                      }}
                      onClick={() => {
                        setActiveItem(base.id);
                      }}
                    >
                      {activeItem === base.id ? <></> : "자세히∨"}
                    </button>
                  </StyledMoreListDiv>
                </StyledListDiv>
              </div>
              {activeItem === base.id ? (
                <SearchDepositDetail
                  base={base}
                  setActiveItem={setActiveItem}
                  depositOptionalList={depositOptionalList}
                />
              ) : null}
            </StyledBankLists>
          );
        })}
    </div>
  );
}

export default SearchDepositLists;
