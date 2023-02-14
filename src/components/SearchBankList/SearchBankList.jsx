import React from "react";
import logoLists from "../../assets/logo/logo";
import { BsFillBookmarkFill } from "react-icons/bs";
import {
  StyledImg,
  StyledProductTitleDiv,
  StyledBankNameP,
} from "../AllBankList/style";
import {
  StyledBankListWrapper,
  StyledBankLists,
  StyledBookMark,
} from "../../pages/ServicePage/style";
import {
  StyledSearchSaveTrmDiv,
  StyledSavingRateP,
  StyledContentDiv,
} from "./style";

function SearchBankList({
  searchBank,
  depositbaseList,
  depositOptionalList,
  productType,
  savingbaseList,
  savingOptionalList,
}) {
  //productType:예금,적금
  //searchBank: 사용자가 입력하는 값
  //depositbaseList: 예금상품 baseList
  //savingbaseList: 적금상품 baseList

  return (
    <StyledBankListWrapper>
      {productType === 1 ? (
        <div>
          {depositbaseList &&
            depositbaseList
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
                    <div
                      style={{
                        width: "775px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <StyledContentDiv>
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
                        <StyledSearchSaveTrmDiv>
                          {depositOptionalList?.map((i) =>
                            i.fin_prdt_cd === v.fin_prdt_cd ? (
                              <>
                                <StyledSavingRateP>
                                  <p style={{ color: "#aaa" }}>
                                    {i.save_trm}개월
                                  </p>
                                  최고금리{i.intr_rate2}
                                </StyledSavingRateP>
                              </>
                            ) : null
                          )}
                        </StyledSearchSaveTrmDiv>
                      </StyledContentDiv>
                      <BsFillBookmarkFill style={StyledBookMark} />
                    </div>
                  </StyledBankLists>
                );
              })}
        </div>
      ) : (
        <div>
          {savingbaseList &&
            savingbaseList
              ?.filter((val) => {
                if (searchBank === "") {
                  return val;
                } else if (val.kor_co_nm.includes(searchBank)) {
                  return val; //여기까지 값 확인
                } else if (val.fin_prdt_nm.includes(searchBank)) {
                  return val;
                }
              })
              .map((v) => {
                return (
                  <StyledBankLists>
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
                    <StyledContentDiv>
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
                      <StyledSearchSaveTrmDiv>
                        {savingOptionalList?.map((i) =>
                          i.fin_prdt_cd === v.fin_prdt_cd ? (
                            <>
                              <StyledSavingRateP>
                                <p style={{ color: "#aaa" }}>
                                  {i.save_trm}개월
                                </p>
                                최고금리{i.intr_rate2}
                              </StyledSavingRateP>
                            </>
                          ) : null
                        )}
                      </StyledSearchSaveTrmDiv>
                    </StyledContentDiv>
                  </StyledBankLists>
                );
              })}
        </div>
      )}
    </StyledBankListWrapper>
  );
}

export default SearchBankList;
