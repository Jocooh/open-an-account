//전체목록이 들어가는 은행들의 리스트를 여기서 맵돌릴꺼다.
import React, { useEffect, useState } from "react";
import { StyledListContainer, StyledImg } from "./style";
import axios from "axios";
import logoLists from "../../assets/logo/logo";

function AllBankList() {
  const [depositbaseList, setdepositbaseList] = useState(null);
  const [depositOptionalList, setdepositOptionalList] = useState(null);

  const bankListFetch = async () => {
    const { data } = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1"
    );
    setdepositbaseList(data?.result.baseList);
    setdepositOptionalList(data?.result.optionList);
  };

  //최고금리 순으로 가져오는 함수
  const BD = depositOptionalList?.sort(function (a, b) {
    return b.intr_rate2 - a.intr_rate2;
  });

  useEffect(() => {
    bankListFetch();
  }, []);

  return (
    <StyledListContainer>
      {BD &&
        BD?.map((i) =>
          depositbaseList?.map((v) =>
            i.fin_prdt_cd === v.fin_prdt_cd ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                  boxSizing: "border-box",
                }}
              >
                {i.save_trm === "12" ? (
                  <>
                    <div style={{ display: "flex", alignContent: "center" }}>
                      {/* 은행 로고  */}
                      <div>
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
                      {/* 상품이름 */}
                      <h2
                        style={{
                          fontSize: "20px",
                          boxSizing: "border-box",
                        }}
                      >
                        {v.fin_prdt_nm}
                      </h2>
                    </div>
                    {/* 최고금리 */}
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <h4>{i.intr_rate2}</h4>
                      <div style={{ marginLeft: "10px", marginTop: "15px" }}>
                        <button style={{ width: "30px", height: "30px" }}>
                          +
                        </button>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            ) : null
          )
        )}
    </StyledListContainer>
  );
}

export default AllBankList;
