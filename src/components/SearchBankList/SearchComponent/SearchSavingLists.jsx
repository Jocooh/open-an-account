import React from "react";
import Bookmarks from "../../ServicePage/Bookmarks";
import logoLists from "../../../assets/logo/logo";
import { StyledBankLists } from "../../../pages/ServicePage/style";
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

import SearchDepositDetail from "../Detail/SearchSavingDetail";

function SearchSavingLists({
  setColor,
  searchBank,
  activeItem,
  productTypes,
  setActiveItem,
  savingbaseList,
  savingOptionalList,
  handleClickProduct,
  selectedProductIds,
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
                      <StyledImg
                        src={logoLists[base.fin_co_no]}
                        alt="로고"
                        key={base.id}
                      />
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
                            {savingOptionalList?.map((option) =>
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
                                    {option.intr_rate2 !== null ? (
                                      <>{option.intr_rate2}</>
                                    ) : (
                                      "0"
                                    )}
                                    %
                                  </h4>
                                </StyledSavingRateP>
                              ) : null
                            )}
                          </StyledSearchSaveTrmDiv>
                        </StyledContentDiv>
                      </div>
                    </StyledDiv>
                    <StyledMoreListDiv>
                      <Bookmarks baseList={base} productTypes={productTypes} />
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
                    savingOptionalList={savingOptionalList}
                  />
                ) : null}
              </StyledBankLists>
            );
          })}
    </div>
  );
}

export default SearchSavingLists;
