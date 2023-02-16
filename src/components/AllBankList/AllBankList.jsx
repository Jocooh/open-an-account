//전체목록이 들어가는 은행들의 리스트를 여기서 맵돌릴꺼다.
import React from "react";
import {
  StyledImg,
  StyledSaveTrmDiv,
  StyledProductTitleDiv,
  StyledRateP,
  StyledBankNameP,
} from "./style";
import {
  StyledBankLists,
  StyledBankListWrapper,
  StyledBookMark,
} from "../../pages/ServicePage/style";
import logoLists from "../../assets/logo/logo";
import { BsFillBookmarkFill } from "react-icons/bs";
import {
  StyledDiv,
  StyledContentDiv,
  StyledMoreListDiv,
  StyledListDiv,
} from "../SearchBankList/style";
import Bookmarks from "./Bookmarks";

function AllBankList({
  depositbaseList,
  depositOptionalList,
  bookmarkProducts,
}) {
  //최고금리순으로 가져오는 함수
  const depositDB = depositOptionalList?.sort(function (a, b) {
    return b.intr_rate2 - a.intr_rate2;
  });

  return (
    <StyledBankListWrapper>
      <div>
        {depositDB &&
          depositDB?.map((i) =>
            depositbaseList?.map((v) =>
              i.fin_prdt_cd === v.fin_prdt_cd ? (
                <>
                  {i.save_trm === "12" ? (
                    <StyledBankLists className="lightcoral">
                      <StyledListDiv>
                        <StyledDiv>
                          <div key={v.fin_prdt_nm}>
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

                          <div className="상품명 은행이름 이자율 한꺼번에 묶은 태그">
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
                              <StyledSaveTrmDiv>
                                <StyledRateP>
                                  최대금리
                                  {i.intr_rate2}
                                </StyledRateP>

                                <StyledRateP>
                                  일반금리 {i.intr_rate}
                                </StyledRateP>
                              </StyledSaveTrmDiv>
                            </StyledContentDiv>
                          </div>
                        </StyledDiv>
                        <StyledMoreListDiv>
                          <Bookmarks bookmarkProducts={bookmarkProducts} />
                          <button
                            style={{
                              width: "50px",
                              height: "30px",
                            }}
                          >
                            더 보기
                          </button>
                        </StyledMoreListDiv>
                      </StyledListDiv>
                    </StyledBankLists>
                  ) : null}
                </>
              ) : null
            )
          )}
      </div>
    </StyledBankListWrapper>
  );
}

export default AllBankList;
