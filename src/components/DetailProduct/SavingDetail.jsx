//savingDetail.jsx

import React from "react";
import {
  StyledDetailContainer,
  StyledDetailContent,
  StyledDetailList,
  StyledDetaiListText,
  DetailContentWrapper,
} from "./style";

function SavingDetail({ savingDB, savingbaseList, setActiveItem, sortMonths }) {
  const sortArr = sortMonths.filter(
    (month) => month.fin_prdt_cd === savingDB.fin_prdt_cd
  );

  return (
    <>
      <div>
        <StyledDetailContainer>
          <StyledDetailContent>
            {savingDB.fin_prdt_cd === savingbaseList.fin_prdt_cd ? (
              <>
                <DetailContentWrapper>
                  <div className="가입기간" style={{ display: "flex" }}>
                    <p>가입기간 :</p>
                    <p style={{ fontWeight: "bold" }}>
                      최소{sortArr[0].save_trm}개월
                    </p>
                  </div>
                  <div
                    className="최고한도"
                    style={{ display: "flex", marginBottom: "10px" }}
                  >
                    <p>최고한도 :</p>
                    <p style={{ fontWeight: "bold" }}>
                      {savingbaseList.max_limit !== null
                        ? `${savingbaseList.max_limit
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
                        : "없음"}
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
                </DetailContentWrapper>

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
