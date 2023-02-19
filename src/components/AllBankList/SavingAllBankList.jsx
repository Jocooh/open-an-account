//saveingAllBank.jsx
import React from "react";
import {
  StyledImg,
  StyledSaveTrmDiv,
  StyledProductTitleDiv,
  StyledRateP,
  StyledBankNameP,
} from "./style";

import { StyledBankLists, StyledBookMark } from "../../pages/ServicePage/style";
import {
  StyledDiv,
  StyledContentDiv,
  StyledMoreListDiv,
  StyledListDiv,
} from "../SearchBankList/style";
import logoLists from "../../assets/logo/logo";
import { BsFillBookmarkFill } from "react-icons/bs";
import SavingDetail from "../DetailProduct/SavingDetail";
import Bookmarks from "../Bookmarks";

function SavingAllBankList({
  savingbaseList,
  savingOptionalList,
  activeItem,
  setActiveItem,
  handleClickProduct,
  myBookmarkProducts,
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
                  <StyledBankLists
                    onClick={() => {
                      handleClickProduct(item.id);
                    }}
                  >
                    {/* 로고 */}
                    <div style={{ display: "flex" }}>
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
                          <Bookmarks
                            myBookmarkProducts={myBookmarkProducts} // my bookmark products
                            productId={item.fin_prdt_cd}
                            productName={item.fin_prdt_nm}
                            productCoName={item.kor_co_nm}
                            productDocId={item.id}
                          />
                          <button
                            style={{
                              width: "60px",
                              height: "30px",
                            }}
                            onClick={() => {
                              setActiveItem(item.id);
                            }}
                          >
                            {activeItem === item.id ? <></> : "자세히∨"}
                          </button>
                        </StyledMoreListDiv>
                      </StyledListDiv>
                    </div>
                    <div>
                      {activeItem === item.id ? (
                        <SavingDetail
                          savingDB={saving}
                          savingbaseList={item}
                          savingOptionalList={savingOptionalList}
                          setActiveItem={setActiveItem}
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
