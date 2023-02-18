//DepositDetail.jsx
import React from "react";
import {
  StyledDetailContainer,
  StyledDetailContent,
  StyledDetailList,
  StyledDetaiListText,
} from "./style";

function DepositDetail({
  depositDB,
  depositbaseList,
  setActiveItem,
  depositOptionalList,
}) {
  //만약

  return (
    <>
      <div>
        <StyledDetailContainer>
          <StyledDetailContent>
            {depositDB.fin_prdt_cd === depositbaseList.fin_prdt_cd ? (
              <>
                <div>
                  <div className="가입기간" style={{ display: "flex" }}>
                    <p>가입기간 :</p>
                    <p style={{ fontWeight: "bold" }}>
                      최소{depositDB.save_trm}개월
                    </p>
                  </div>
                  <div
                    className="가입방법"
                    style={{ display: "flex", marginBottom: "10px" }}
                  >
                    <p>가입방법 :</p>
                    <p style={{ fontWeight: "bold" }}>
                      {depositbaseList.join_way}
                    </p>
                  </div>
                  <StyledDetailList>
                    <StyledDetaiListText>
                      가입대상 : {depositbaseList.join_member}
                    </StyledDetaiListText>
                    <StyledDetaiListText>
                      기타유의사항: {depositbaseList.etc_note}
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
export default DepositDetail;
