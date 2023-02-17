import React, { useState } from "react";
import {
  StyledImg,
  StyledSaveTrmDiv,
  StyledProductTitleDiv,
  StyledRateP,
  StyledBankNameP,
} from "./style";
import logoLists from "../../assets/logo/logo";
import {
  StyledDiv,
  StyledContentDiv,
  StyledMoreListDiv,
  StyledListDiv,
} from "../SearchBankList/style";

import { BsFillBookmarkFill } from "react-icons/bs";
import DepositDetail from "../DetailProduct/DepositDetail";
import { StyledBankLists, StyledBookMark } from "../../pages/ServicePage/style";
import { useRef } from "react";

import Bookmarks from "./Bookmarks";


function AllBankList({
  depositbaseList,
  depositOptionalList,

  activeItem,
  setActiveItem,


  bookmarkProducts,

  setToggleDetail,
  toggleDetail,


}) {
  //최고금리순으로 가져오는 함수
  const depositDB = depositOptionalList?.sort(function (a, b) {
    return b.intr_rate2 - a.intr_rate2;
  });
  //상품 고유 아이디 가져오는state

  return (
    <div>
      {depositDB &&
        depositDB?.map((deposit) =>
          depositbaseList?.map((item) =>
            deposit.fin_prdt_cd === item.fin_prdt_cd ? (
              <>
                {deposit.save_trm === "12" ? (
                  <StyledBankLists key={item.id}>
                    <StyledListDiv>
                      <StyledDiv>
                        {logoLists.logos.map((t) =>
                          Object.keys(t)[0] === item.fin_co_no ? (
                            <StyledImg
                              src={Object.values(t)[0]}
                              alt="로고"
                              key={item.id}
                            />
                          ) : null
                        )}
                        <div className="상품명 은행이름 이자율 한꺼번에 묶은 태그">
                          <StyledContentDiv>
                            <StyledProductTitleDiv>
                              <h2
                                style={{
                                  fontSize: "20px",
                                }}
                              >
                                {item.fin_prdt_nm}
                              </h2>

                              <StyledBankNameP>
                                {item.kor_co_nm}
                              </StyledBankNameP>
                            </StyledProductTitleDiv>
                            <StyledSaveTrmDiv>
                              <StyledRateP>
                                최대금리
                                {deposit.intr_rate2}
                              </StyledRateP>


                              <StyledRateP>
                                일반금리 {deposit.intr_rate}
                              </StyledRateP>
                            </StyledSaveTrmDiv>
                          </StyledContentDiv>
                        </div>
                      </StyledDiv>
                    <StyledMoreListDiv>
                          <Bookmarks bookmarkProducts={bookmarkProducts} />
                          <button
                            style={{
                              width: "60px",
                              height: "30px",
                            }}
                            onClick={() => {
                              setToggleDetail((toggleDetail) => !toggleDetail);
                            }}
                          >
                            {toggleDetail === true ? "자세히∧" : "자세히∨"}
                          </button>
                        </StyledMoreListDiv>
                    </StyledListDiv>
                    <div>
                      {activeItem === item.id ? (
                        <DepositDetail
                          depositDB={deposit}
                          depositbaseList={item}
                          depositOptionalList={depositOptionalList}
                          setActiveItem={setActiveItem}
                        />
                      ) : null}
                    </div>
                  </StyledBankLists>
                ) : null}
              </>
            ) : null
          )
        )}
    </div>

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
                              width: "60px",
                              height: "30px",
                            }}
                            onClick={() => {
                              setToggleDetail((toggleDetail) => !toggleDetail);
                            }}
                          >
                            {toggleDetail === true ? "자세히∧" : "자세히∨"}
                          </button>
                        </StyledMoreListDiv>
                      </StyledListDiv>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100px",
                        }}
                      >
                        {toggleDetail === true ? <p>상세보기</p> : null}
                      </div>
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
