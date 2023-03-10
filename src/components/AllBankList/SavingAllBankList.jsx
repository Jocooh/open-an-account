//saveingAllBank.jsx
import React from "react";
import {
  StyledImg,
  StyledProductTitleDiv,
  StyledBankNameP,
  StyledFinPrdtNm,
} from "./style";

import { StyledBankLists } from "../../pages/ServicePage/style";
import {
  StyledDiv,
  StyledContentDiv,
  StyledMoreListDiv,
  StyledListDiv,
  SaveTrmDiv,
  StyledSavingRateP,
  IntrRateContainer,
} from "../SearchBankList/style";
import logoLists from "../../assets/logo/logo";
import SavingDetail from "../DetailProduct/SavingDetail";
import Bookmarks from "../ServicePage/Bookmarks";

function SavingAllBankList({
  productTypes,
  setColor,
  savingbaseList,
  savingOptionalList,
  activeItem,
  setActiveItem,
  handleClickProduct,
  selectedProductIds,
}) {
  const savingDB = savingOptionalList?.sort(function (a, b) {
    return b.intr_rate2 - a.intr_rate2;
  });
  const sortMonths = savingOptionalList?.sort(function (a, b) {
    return a.save_trm - b.save_trm;
  });

  return (
    <div>
      {savingDB &&
        savingDB?.map((saving) =>
          savingbaseList?.map((item) =>
            saving.fin_prdt_cd === item.fin_prdt_cd ? (
              <div key={item.id}>
                {saving.save_trm === "12" ? (
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
                    {/* 로고 */}
                    <div style={{ display: "flex" }}>
                      <StyledListDiv>
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
                              <StyledProductTitleDiv>
                                <StyledFinPrdtNm>
                                  {item.fin_prdt_nm}
                                </StyledFinPrdtNm>
                                <StyledBankNameP>
                                  {item.kor_co_nm}
                                </StyledBankNameP>
                              </StyledProductTitleDiv>
                              <IntrRateContainer>
                                <div>
                                  <SaveTrmDiv>최대금리</SaveTrmDiv>
                                  <StyledSavingRateP>
                                    {saving.intr_rate2}%
                                  </StyledSavingRateP>
                                </div>
                                <div>
                                  <SaveTrmDiv>일반금리</SaveTrmDiv>
                                  <StyledSavingRateP>
                                    {saving.intr_rate}%
                                  </StyledSavingRateP>
                                </div>
                              </IntrRateContainer>
                            </StyledContentDiv>
                          </div>
                        </StyledDiv>
                        <StyledMoreListDiv>
                          <Bookmarks
                            baseList={item} //base list
                            optionList={saving} // option list
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
                        <SavingDetail
                          savingDB={saving}
                          savingbaseList={item}
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

export default SavingAllBankList;
