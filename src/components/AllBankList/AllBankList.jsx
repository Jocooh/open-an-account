import React from "react";

import {
  StyledImg,
  StyledProductTitleDiv,
  StyledBankNameP,
  StyledFinPrdtNm,
} from "./style";

import logoLists from "../../assets/logo/logo";

import {
  StyledDiv,
  StyledContentDiv,
  StyledMoreListDiv,
  StyledListDiv,
  StyledSavingRateP,
  SaveTrmDiv,
  IntrRateContainer,
} from "../SearchBankList/style";
import DepositDetail from "../DetailProduct/DepositDetail";
import { StyledBankLists } from "../../pages/ServicePage/style";
import Bookmarks from "../ServicePage/Bookmarks";

function AllBankList({
  productTypes,
  setColor,
  activeItem,
  setActiveItem,
  depositbaseList,
  selectedProductIds,
  handleClickProduct,
  depositOptionalList,
}) {
  //최고금리순으로 가져오는 함수

  const depositDB = depositOptionalList?.sort(function (a, b) {
    return b.intr_rate2 - a.intr_rate2;
  });

  //최저개월 수 대로 가져오는 함수
  const sortMonths = depositOptionalList?.sort(function (a, b) {
    return a.save_trm - b.save_trm;
  });

  return (
    <div>
      {depositDB &&
        depositDB?.map((deposit) =>
          depositbaseList?.map((item) =>
            deposit.fin_prdt_cd === item.fin_prdt_cd ? (
              <div key={item.id}>
                {deposit.save_trm === "12" ? (
                  <StyledBankLists
                    key={item.id}
                    onClick={() => {
                      setColor(item.id);
                    }}
                    style={
                      selectedProductIds[0] === item.id ||
                      selectedProductIds[6] === item.id ||
                      selectedProductIds[12] === item.id
                        ? { border: "1px solid #6A24FF" }
                        : null
                    }
                  >
                    <div style={{ display: "flex" }}>
                      <StyledListDiv className="lightYellow">
                        <StyledDiv
                          onClick={() => {
                            handleClickProduct(item.id);
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "15px",
                            }}
                          >
                            <StyledImg
                              src={logoLists[item.fin_co_no]}
                              alt="로고"
                            />

                            <StyledContentDiv>
                              {/* 상품명 & 은행명 */}
                              <StyledProductTitleDiv>
                                <StyledFinPrdtNm>
                                  {item.fin_prdt_nm}
                                </StyledFinPrdtNm>

                                <StyledBankNameP>
                                  {item.kor_co_nm}
                                </StyledBankNameP>
                              </StyledProductTitleDiv>
                              {/* 최대금리 ,일반 금리###############################*/}
                              <IntrRateContainer className="최대금리 일반금리 display:flex">
                                <div>
                                  <SaveTrmDiv>최대금리</SaveTrmDiv>
                                  <StyledSavingRateP>
                                    {deposit.intr_rate2}%
                                  </StyledSavingRateP>
                                </div>
                                <div>
                                  <SaveTrmDiv>일반금리</SaveTrmDiv>
                                  <StyledSavingRateP>
                                    {deposit.intr_rate}%
                                  </StyledSavingRateP>
                                </div>
                              </IntrRateContainer>
                              {/* ########################### */}
                            </StyledContentDiv>
                          </div>
                        </StyledDiv>
                        <StyledMoreListDiv>
                          <Bookmarks
                            baseList={item} //base list
                            optionList={deposit} // option list
                            productTypes={productTypes}
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
                        <DepositDetail
                          depositDB={deposit}
                          depositbaseList={item}
                          sortMonths={sortMonths}
                          setActiveItem={setActiveItem}
                        />
                      ) : null}
                    </div>
                  </StyledBankLists>
                ) : null}
              </div>
            ) : null
          )
        )}
    </div>
  );
}

export default AllBankList;
