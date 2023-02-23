import React from "react";
import {
  DetailContentWrapper,
  StyledDetailList,
  StyledDetaiListText,
  BookMarkWrapper,
} from "../DetailProduct/style";

function DetailBookMark({ base, setOpen, depositOptionalList }) {
  console.log(base);
  return (
    <div style={{ borderTop: "1px solid #efefef" }}>
      <BookMarkWrapper>
        <>
          <DetailContentWrapper>
            <div
              className="가입방법"
              style={{ display: "flex", marginBottom: "10px" }}
            >
              <p>가입방법 :</p>
              <p style={{ fontWeight: "bold" }}>{base.join_way}</p>
            </div>
            {/* <div
          className="한도"
          style={{ display: "flex", marginBottom: "10px" }}
         >
          <p>최고한도 : </p>
          <div>
            <p style={{ fontWeight: "bold" }}>
              {base.max_limit !== null
                ? `${maxLimit
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
                : "없음"}
            </p>
          </div>
        </div> */}
            <StyledDetailList>
              <StyledDetaiListText>
                가입대상 : {base.join_member}
              </StyledDetaiListText>
              <StyledDetaiListText>
                기타유의사항: {base.etc_note}
              </StyledDetaiListText>
            </StyledDetailList>
          </DetailContentWrapper>
          <div>
            <button
              onClick={() => {
                setOpen(1);
              }}
            >
              닫기
            </button>
          </div>
        </>
      </BookMarkWrapper>
    </div>
  );
}

export default DetailBookMark;
