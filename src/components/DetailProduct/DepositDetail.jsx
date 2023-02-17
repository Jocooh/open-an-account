import React from "react";
import {
  StyledDetailContainer,
  StyledDetailContent,
  StyledDetailList,
  StyledDetaiListText,
} from "./style";

function DepositDetail({ depositDB, depositbaseList }) {
  //depositDB: 최고금리순으로 나눈 상품의 정렬

  return (
    <>
      <div>
        {depositDB.fin_prdt_cd === depositbaseList.fin_prdt_cd ? (
          <StyledDetailContainer>
            <StyledDetailContent>
              <div className="가입기간" style={{ display: "flex" }}>
                <p>가입기간 :</p>
                <p style={{ fontWeight: "bold" }}>
                  최소{depositDB.save_trm}개월
                </p>
              </div>
              <div
                className="가입기간"
                style={{ display: "flex", marginBottom: "10px" }}
              >
                <p>가입방법 :</p>
                <p style={{ fontWeight: "bold" }}>{depositbaseList.join_way}</p>
              </div>
              <StyledDetailList>
                <StyledDetaiListText>
                  만기 후 이자율 :
                  <p style={{ color: "aaa" }}> {depositbaseList.mtrt_int}</p>
                </StyledDetaiListText>
                <StyledDetaiListText>
                  기타유의사항:{depositbaseList.etc_note}
                </StyledDetaiListText>
              </StyledDetailList>
            </StyledDetailContent>
          </StyledDetailContainer>
        ) : null}
      </div>
    </>
  );
}
export default DepositDetail;
