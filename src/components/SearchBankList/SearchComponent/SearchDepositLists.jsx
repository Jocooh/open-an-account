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
  StyledContentDiv,
  StyledSearchSaveTrmDiv,
  StyledSavingRateP,
} from "../style";

function SearchDepositLists({
  depositbaseList,
  searchBank,
  depositOptionalList,
}) {
  return (
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
              //상품리스트 각 하나하나 스타일
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
                {/* 찜 아이콘 이동때문에 만든 스타일  */}
                <div
                  style={{
                    width: "775px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {/* 은행상품 이름 최고금리 다 가지고 있는 스타일 태그 */}
                  <StyledContentDiv>
                    {/* 상품네임 은행네임 스타일 태그 */}
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
                    {/*  금리표시 _ 디자인 수정부분*/}
                    {/* 금리높이 지정 스타일 태그 */}
                    <StyledSearchSaveTrmDiv>
                      {depositOptionalList?.map((i) =>
                        i.fin_prdt_cd === v.fin_prdt_cd ? (
                          <>
                            {/* 금리 하나하나의 스타일태그 */}
                            <StyledSavingRateP>
                              <p style={{ color: "#aaa" }}>{i.save_trm}개월</p>
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
  );
}

export default SearchDepositLists;
