//DepositDetail.jsx
import React from "react";
import {
  StyledDetailContainer,
  StyledDetailContent,
  StyledDetailList,
  StyledDetaiListText,
  DetailContentWrapper,
} from "./style";

function DepositDetail({
  depositDB,
  depositbaseList,
  setActiveItem,
  sortMonths,
}) {
  //최소개월 수 대로 정렬한 리스트 중에서 선택한 상품의 코드와 일치하면 filter로 새배열 생성 -> 새배열 생성후 제일 첫번째 해당하는 값의 개월 수를 들고온다.
  const sortArr = sortMonths?.filter(
    (month) => month.fin_prdt_cd === depositDB.fin_prdt_cd
  );

  return (
    <>
      <div>
        <StyledDetailContainer>
          <StyledDetailContent>
            {depositDB.fin_prdt_cd === depositbaseList.fin_prdt_cd ? (
              <>
                <DetailContentWrapper>
                  <div className="가입기간" style={{ display: "flex" }}>
                    <p>가입기간 :</p>
                    <p style={{ fontWeight: "bold" }}>
                      최소{sortArr[0].save_trm}개월
                    </p>
                  </div>
                  <div className="가입방법" style={{ display: "flex" }}>
                    <p>가입방법 :</p>
                    <p style={{ fontWeight: "bold" }}>
                      {depositbaseList.join_way}
                    </p>
                  </div>
                  <div
                    className="최고한도"
                    style={{ display: "flex", marginBottom: "10px" }}
                  >
                    <p>최고한도 :</p>
                    <p style={{ fontWeight: "bold" }}>
                      {depositbaseList.max_limit !== null
                        ? `${depositbaseList.max_limit
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
                        : "없음"}
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
export default DepositDetail;
