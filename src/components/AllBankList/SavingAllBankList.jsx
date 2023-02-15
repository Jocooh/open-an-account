//전체목록이 들어가는 은행들의 리스트를 여기서 맵돌릴꺼다.
import React from "react";
import {
  StyledImg,
  StyledSaveTrmDiv,
  StyledProductTitleDiv,
  StyledRateP,
  StyledBankNameP,
} from "./style";

import {
  StyledBankLists,
  StyledBankListWrapper,
  StyledBookMark,
} from "../../pages/ServicePage/style";
import logoLists from "../../assets/logo/logo";
import { BsFillBookmarkFill } from "react-icons/bs";
// import InfiniteScroll from "react-infinite-scroll-component";

function AllBankList({ savingbaseList, savingOptionalList }) {
  //BD:optionList를 최고금리 순으로 가져온 데이터
  //depositbaseList : 예금상품 baseList
  const savingDB = savingOptionalList?.sort(function (a, b) {
    return b.intr_rate2 - a.intr_rate2;
  });

  return (
    <StyledBankListWrapper>
      {savingDB &&
        savingDB?.map((i) =>
          savingbaseList?.map((v) =>
            i.fin_prdt_cd === v.fin_prdt_cd ? (
              <>
                {i.save_trm === "12" ? (
                  <StyledBankLists>
                    {/* 은행 로고  */}
                    <div className="로고">
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
                    <div
                      style={{
                        width: "780px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="상품명 은행이름 이자율 한꺼번에 묶은 태그">
                        <StyledProductTitleDiv>
                          {/* ProductName */}
                          <h2
                            style={{
                              fontSize: "20px",
                            }}
                          >
                            {v.fin_prdt_nm}
                          </h2>
                          <StyledBankNameP>{v.kor_co_nm}</StyledBankNameP>
                        </StyledProductTitleDiv>
                        <StyledSaveTrmDiv>
                          <StyledRateP>최대금리{i.intr_rate2}</StyledRateP>
                          <StyledRateP>일반금리 {i.intr_rate}</StyledRateP>
                        </StyledSaveTrmDiv>
                      </div>
                      <BsFillBookmarkFill style={StyledBookMark} />
                    </div>
                  </StyledBankLists>
                ) : null}
              </>
            ) : null
          )
        )}
    </StyledBankListWrapper>
  );
}

export default AllBankList;
