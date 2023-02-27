import React, { useState } from "react";
import Bookmarks from "../ServicePage/Bookmarks";
import logoLists from "../../assets/logo/logo";
import {
  StyledBankNameP,
  StyledProductTitleDiv,
  StyledImg,
  StyledSaveTrmDiv,
  StyledRateP,
} from "../AllBankList/style";
import {
  StyledDiv,
  StyledContentDiv,
  StyledListDiv,
  StyledMoreListDiv,
} from "../SearchBankList/style";


import Bookmarks from "../ServicePage/Bookmarks";
// import PracticeDetail from "./PracticeDetail";

import DepositDetail from "../DetailProduct/DepositDetail";
import { StyledBankLists } from "../../pages/ServicePage/style";

const CalculatorList = ({
  months,
  activeItem,
  setActiveItem,
  depositbaseList,
  selectedProductIds,
  handleClickProduct,
  depositOptionalList,
}) => {
  const [color, setColor] = useState([]);

  const depositDB = depositOptionalList?.sort(function (a, b) {
    return b.intr_rate2 - a.intr_rate2;
  });
  const sortMonths = depositOptionalList?.sort(function (a, b) {
    return a.save_trm - b.save_trm;
  });

  const changeStringHandler = months.toString();
  return (
    <div>
      {depositDB &&
        depositDB?.map((deposit) =>
          depositbaseList?.map((item) =>
            deposit.fin_prdt_cd === item.fin_prdt_cd ? (
              <div key={item.id}>
                {deposit.save_trm === `${changeStringHandler}` ? (
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
                          <Bookmarks
                            productId={item.fin_prdt_cd}
                            productName={item.fin_prdt_nm}
                            productCoName={item.kor_co_nm}
                            productDocId={item.id}
                            productCoCode={item.fin_co_no}
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
};

export default CalculatorList;
