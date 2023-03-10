import React from "react";
import Bookmarks from "../../ServicePage/Bookmarks";
import logoLists from "../../../assets/logo/logo";
import { StyledBankLists } from "../../../pages/ServicePage/style";
import {
  StyledImg,
  StyledProductTitleDiv,
  StyledBankNameP,
  StyledFinPrdtNm,
} from "../../AllBankList/style";
import {
  StyledListDiv,
  StyledDiv,
  StyledContentDiv,
  StyledSearchSaveTrmDiv,
  StyledSavingRateP,
  StyledMoreListDiv,
  IntrRateContainer,
  SaveTrmDiv,
} from "../style";

import SearchDepositDetail from "../Detail/SearchDepositDetail";

function SearchDepositLists({
  //이거를 검색버튼 클릭 후에 들어갈 state로 돌리자.
  setColor,
  searchBank,
  activeItem,
  productTypes,
  setActiveItem,
  depositbaseList,
  handleClickProduct,
  selectedProductIds,
  depositOptionalList,
}) {
  return (
    <div>
      {depositbaseList
        ?.filter((val) => {
          // console.log(val);
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
            <StyledBankLists
              key={base.id}
              onClick={() => {
                setColor(base.id);
              }}
              style={
                selectedProductIds[0] === base.id ||
                selectedProductIds[6] === base.id ||
                selectedProductIds[12] === base.id
                  ? { border: "1px solid #6A24FF" }
                  : null
              }
            >
              <div style={{ display: "flex" }}>
                <StyledListDiv>
                  <StyledDiv
                    onClick={() => {
                      handleClickProduct(base.id);
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "15px",
                      }}
                    >
                      <StyledImg src={logoLists[base.fin_co_no]} alt="로고" />

                      <StyledContentDiv>
                        <StyledProductTitleDiv>
                          <StyledFinPrdtNm>{base.fin_prdt_nm}</StyledFinPrdtNm>

                          <StyledBankNameP>{base.kor_co_nm}</StyledBankNameP>
                        </StyledProductTitleDiv>

                        <StyledSearchSaveTrmDiv>
                          <p
                            style={{
                              fontWeight: "bold",
                              color: "#aaa",
                              fontSize: "12px",
                            }}
                          >
                            최고금리
                          </p>
                          {depositOptionalList?.map((option) =>
                            option.fin_prdt_cd === base.fin_prdt_cd ? (
                              <IntrRateContainer>
                                <StyledSavingRateP key={option.id}>
                                  <SaveTrmDiv>{option.save_trm}개월</SaveTrmDiv>
                                  <StyledSavingRateP>
                                    {option.intr_rate2}%
                                  </StyledSavingRateP>
                                </StyledSavingRateP>
                              </IntrRateContainer>
                            ) : null
                          )}
                        </StyledSearchSaveTrmDiv>
                      </StyledContentDiv>
                    </div>
                  </StyledDiv>
                  <StyledMoreListDiv>
                    <Bookmarks
                      baseList={base} // base list
                      optionList={depositOptionalList} // option list
                      productTypes={productTypes}
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
