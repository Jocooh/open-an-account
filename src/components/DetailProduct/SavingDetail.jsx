//savingDetail.jsx

import React from "react";
import {
  StyledDetailContainer,
  StyledDetailContent,
  StyledDetailList,
  StyledDetaiListText,
} from "./style";

function SavingDetail({ savingDB, savingbaseList, setActiveItem }) {
  return (
    <>
      <div>
        <StyledDetailContainer>
          <StyledDetailContent>
            {savingDB.fin_prdt_cd === savingbaseList.fin_prdt_cd ? (
              <>
                <div>
                  <div className="가입기간" style={{ display: "flex" }}>
                    <p>가입기간 :</p>
                    <p style={{ fontWeight: "bold" }}>
                      최소{savingDB.save_trm}개월
                    </p>
                  </div>
                  <div
                    className="한도"
                    style={{ display: "flex", margin: "7px 0px" }}
                  >
                    <p>최고한도 :</p>
                    <p style={{ fontWeight: "bold" }}>
                      {savingbaseList.max_limit}
                    </p>
                  </div>
                  <StyledDetailList>
                    <StyledDetaiListText>
                      가입대상 : {savingbaseList.join_member}
                    </StyledDetaiListText>
                    <StyledDetaiListText>
                      기타유의사항: {savingbaseList.etc_note}
                    </StyledDetaiListText>
                  </StyledDetailList>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setActiveItem(1);
                    }}
                  >
                    닫기
                  </button>
                </div>
              </>
            ) : null}
          </StyledDetailContent>
        </StyledDetailContainer>
      </div>
    </>
  );
}

export default SavingDetail;
