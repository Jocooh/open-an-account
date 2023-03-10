import React, { useState } from "react";
import logoLists from "../../assets/logo/logo";

import { StyledBankLists } from "../../pages/ServicePage/style";
import {
  IntrRateContainer,
  SaveTrmDiv,
  StyledContentDiv,
  StyledDiv,
  StyledMoreListDiv,
  StyledSavingRateP,
  StyledSearchSaveTrmDiv,
  StyledListDiv,
  StyledSearchSaveTrmP,
} from "../../components/SearchBankList/style";
import {
  StyledBankNameP,
  StyledFinPrdtNm,
  StyledProductTitleDiv,
} from "../../components/AllBankList/style";
import DetailBookMark from "../BookMarkList/DetailBookMark";
import { StyledImg } from "../../components/AllBankList/style";
import Bookmarks, { NoBookmark } from "../ServicePage/Bookmarks";

function BookmarkPrdtItem({
  items,
  setColor,
  allOptionList,
  sortMonths,
  productTypes,
  handleClickProduct,
  selectedProductIds,
}) {
  const [open, setOpen] = useState("");

  return (
    <>
      {items.length > 0 ? (
        <div>
          {items?.map((item) => (
            <StyledBankLists
              onClick={() => {
                setColor(item.docId);
              }}
              style={
                selectedProductIds?.[0] === item?.docId ||
                selectedProductIds?.[6] === item?.docId ||
                selectedProductIds?.[12] === item?.docId
                  ? { border: "1px solid #6A24FF" }
                  : null
              }
            >
              <div style={{ display: "flex" }}>
                <StyledListDiv>
                  <StyledDiv
                    onClick={() => {
                      handleClickProduct(item.docId);
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "15px",
                      }}
                    >
                      <StyledImg src={logoLists[item.fin_co_no]} alt="로고" />

                      <StyledContentDiv>
                        <StyledProductTitleDiv>
                          <StyledFinPrdtNm>{item.fin_prdt_nm}</StyledFinPrdtNm>
                          <StyledBankNameP>{item.kor_co_nm}</StyledBankNameP>
                        </StyledProductTitleDiv>

                        <StyledSearchSaveTrmDiv>
                          <StyledSearchSaveTrmP>최고금리</StyledSearchSaveTrmP>

                          {allOptionList?.map((v) =>
                            v.fin_prdt_cd === item.fin_prdt_cd ? (
                              <IntrRateContainer>
                                <StyledSavingRateP key={item.id}>
                                  <SaveTrmDiv>{v.save_trm}개월</SaveTrmDiv>
                                  <StyledSavingRateP>
                                    {v.intr_rate2}%
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
                      baseList={item} // base list
                      isMyPage={true}
                      productTypes={productTypes}
                    />
                    <button
                      title="자세히 버튼"
                      style={{
                        width: "60px",
                        height: "30px",
                      }}
                      s
                      onClick={() => {
                        setOpen(item.docId);
                      }}
                    >
                      {open === item.docId ? <></> : "자세히∨"}
                    </button>
                  </StyledMoreListDiv>
                </StyledListDiv>
              </div>
              {open === item.docId ? (
                <DetailBookMark
                  base={item}
                  setOpen={setOpen}
                  optionList={allOptionList}
                  sortMonths={sortMonths}
                />
              ) : null}
            </StyledBankLists>
          ))}
        </div>
      ) : (
        <NoBookmark>
          <img
            src={require("../../assets/no.png")}
            alt="찜목록이 없으면 나올 사진"
            style={{ width: "180px", height: "130px" }}
          />
          <p style={{ fontSize: "20px" }}>가져올 찜 목록이 없어요!</p>
        </NoBookmark>
      )}
    </>
  );
}

export default BookmarkPrdtItem;
