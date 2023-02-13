import React from "react";
import logoLists from "../../assets/logo/logo";
import { StyledImg } from "../AllBankList/style";

function SearchBankList({ searchBank, depositbaseList }) {
  //searchBank: 사용자가 입력하는 값
  //depositbaseList: 예금상품 baseList

  return (
    <>
      <div>
        {depositbaseList &&
          depositbaseList
            ?.filter((val) => {
              if (searchBank === "") {
                return val;
              } else if (val.kor_co_nm.includes(searchBank)) {
                return val; //여기까지 값 확인
              } else if (val.fin_prdt_nm.includes(searchBank)) {
                return val;
              }
              //여기다가 상품명을 가져다 높으면 어떨까 싶다.
            })
            .map((data) => {
              return (
                <h3 key={data.fin_prdt_nm}>
                  {logoLists.logos.map((logo) =>
                    Object.keys(logo)[0] === data.fin_co_no ? (
                      <StyledImg
                        src={Object.values(logo)[0]}
                        alt="로고"
                        key={data.fin_co_subm_day}
                      />
                    ) : null
                  )}
                  {data.fin_prdt_nm}
                </h3>
              );
            })}
      </div>
    </>
  );
}

export default SearchBankList;
