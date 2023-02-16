import React from "react";
import {
  StyledDetailContainer,
  StyledDetailContent,
  StyledDetailList,
  StyledDetaiListText,
} from "./style";

function SavingDetail({ savingDB, savingbaseList }) {
  return (
    <>
      <div>
        {savingDB.fin_prdt_cd === savingbaseList.fin_prdt_cd ? (
          <StyledDetailContainer>
            <StyledDetailContent>
              <div className="가입기간" style={{ display: "flex" }}>
                <p>가입기간 :</p>
                <p style={{ fontWeight: "bold" }}>
                  최소{savingDB.save_trm}개월
                </p>
              </div>
              <div
                className="가입기간"
                style={{ display: "flex", marginBottom: "10px" }}
              >
                <p>가입방법 :</p>
                <p style={{ fontWeight: "bold" }}>{savingbaseList.join_way}</p>
              </div>
              <StyledDetailList>
                <StyledDetaiListText>
                  만기 후 이자율 :
                  <p style={{ color: "aaa" }}> {savingbaseList.mtrt_int}</p>
                </StyledDetaiListText>
                <StyledDetaiListText>
                  기타유의사항:{savingbaseList.etc_note}
                </StyledDetaiListText>
              </StyledDetailList>
            </StyledDetailContent>
          </StyledDetailContainer>
        ) : null}
      </div>
    </>
  );
}

export default SavingDetail;
