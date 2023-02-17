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
import {
  StyledDiv,
  StyledContentDiv,
  StyledMoreListDiv,
  StyledListDiv,
} from "../SearchBankList/style";
import logoLists from "../../assets/logo/logo";
import { BsFillBookmarkFill } from "react-icons/bs";
import SavingDetail from "../DetailProduct/SavingDetail";

function SavingAllBankList({
  savingbaseList,
  savingOptionalList,
  activeItem,
  setActiveItem,
}) {
  const savingDB = savingOptionalList?.sort(function (a, b) {
    return b.intr_rate2 - a.intr_rate2;
  });

  return (
    <div>
      {savingDB &&
        savingDB?.map((saving) =>
          savingbaseList?.map((item) =>
            saving.fin_prdt_cd === item.fin_prdt_cd ? (
              <>
                {saving.save_trm === "12" ? (
                  <StyledBankLists>
                    {/* 로고 */}
                    <StyledListDiv>
                      <StyledDiv>
                        <div key={item.fin_prdt_nm}>
                          {logoLists.logos.map((t) =>
                            Object.keys(t)[0] === item.fin_co_no ? (
                              <StyledImg
                                src={Object.values(t)[0]}
                                alt="로고"
                                key={item.fin_co_subm_day}
                              />
                            ) : null
                          )}
                        </div>

                        <div className="상품명 은행이름 이자율 한꺼번에 묶은 태그">
                          <StyledContentDiv>
                            <StyledProductTitleDiv>
                              {/* product name */}
                              <h2
                                style={{
                                  fontSize: "20px",
                                }}
                              >
                                {item.fin_prdt_nm}
                              </h2>
                              {/* bank Name */}
                              <StyledBankNameP>
                                {item.kor_co_nm}
                              </StyledBankNameP>
                            </StyledProductTitleDiv>
                            <StyledSaveTrmDiv>
                              {/* 최대금리 */}
                              <StyledRateP>
                                최대금리
                                {saving.intr_rate2}
                              </StyledRateP>
                              {/* 이자율 -> 일반금리 */}
                              <StyledRateP>
                                일반금리 {saving.intr_rate}
                              </StyledRateP>
                            </StyledSaveTrmDiv>
                          </StyledContentDiv>
                        </div>
                      </StyledDiv>
                      <StyledMoreListDiv>
                        <BsFillBookmarkFill style={StyledBookMark} />
                        <button
                          style={{
                            width: "60px",
                            height: "30px",
                          }}
                          onClick={() => {
                            setActiveItem(item.id);
                          }}
                        >
                          자세히∨
                        </button>
                      </StyledMoreListDiv>
                    </StyledListDiv>
                    <div>
                      {activeItem === item.id ? (
                        <SavingDetail
                          savingDB={saving}
                          savingbaseList={item}
                          savingOptionalList={savingOptionalList}
                        ></SavingDetail>
                      ) : null}
                    </div>
                  </StyledBankLists>
                ) : null}
              </>
            ) : null
          )
        )}
    </div>
  );
}

export default SavingAllBankList;
