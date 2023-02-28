//saveingAllBank.jsx
import React from "react";
import {
  StyledImg,
  StyledSaveTrmDiv,
  StyledProductTitleDiv,
  StyledRateP,
  StyledBankNameP,
} from "./style";

import { StyledBankLists } from "../../pages/ServicePage/style";
import {
  StyledDiv,
  StyledContentDiv,
  StyledMoreListDiv,
  StyledListDiv,
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
                          <StyledImg
                            src={logoLists[item.fin_co_no]}
                            alt="로고"
                            key={item.id}
                          />
                          <div>
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
                            baseList={item} //baseList
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
                        ></SavingDetail>
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
