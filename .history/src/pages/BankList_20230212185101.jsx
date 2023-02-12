import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { useQuery } from "react-query";
// import { FetchSavingLists } from "../common/apis";
import logoLists from "../assets/logo/logo";

function BankLists() {
  const [baseLists, setBaseLists] = useState([]);
  const [optionLists, setOptionLists] = useState([]);
  //   const { isLoading, isError, error, data } = useQuery("reviews", FetchLists);
  //   if (isLoading) <div>...Loading</div>;
  //   if (isError) <p>{error}</p>;
  const bankListFetch = async () => {
    const { data } = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1"
    );
    console.log("data.length :>> ", data.length);
    setBaseLists(data?.result.baseList);
    setOptionLists(data?.result.optionList);
  };

  // 적금 데이터불러오는 함수.
  //   const { isLoading, isError, error, data } = useQuery(
  //     "result",
  //     FetchSavingLists
  //   );
  //   if (isLoading) <div>...isloading</div>;
  //   if (isError) <p>{error}</p>;
  //   console.log(data?.result);
  const rate = optionLists?.map((v) =>
    v.save_trm === "12" ? v.intr_rate2 : null
  );

  console.log("baseLists.length :>> ", baseLists.length);
  console.log("optionLists.length :>> ", optionLists.length);
  console.log("rate :>> ", rate);

  useEffect(() => {
    bankListFetch();
  }, []);

  return (
    <div>
      {/* <ul>
        {lists &&
          lists?.map((i) => (
            <StyleList key={i.fin_prdt_cd}>
              {logoLists.logos.map((t) =>
                Object.keys(t)[0] === i.fin_co_no ? (
                  <StyledImg src={Object.values(t)[0]} alt="로고" />
                ) : null
              )}
              {i.fin_prdt_nm}:{i.kor_co_nm}==={i.fin_prdt_nm}
              {save.map((v) =>
                i.fin_prdt_cd === v.fin_prdt_cd ? (
                  <p>
                    단/복리:{v.intr_rate_type_nm},상품설명:{i.mtrt_int}
                    ,만기기한:{v.save_trm},저축금리:{v.intr_rate2},일반금리:{v.intr_rate}
                  </p>
                ) : null
              )}
            </StyleList>
          ))}
      </ul> */}

      {baseLists?.map((i) => (
        <StyleList key={i.fin_prdt_cd}>
          {/* 상품명 */}
          {i.fin_prdt_nm}
          {/* 은행명 */}
          {i.kor_co_nm}
          {/* 여기는 기간이 12개월인 상품의 최대금리만 가져왔습니다. */}
          {optionLists?.map((v) =>
            i.fin_prdt_cd === v.fin_prdt_cd
              ? v.save_trm === "12"
                ? v.intr_rate2
                : null
              : null
          )}
          <br />
          예금 1년 50만원 단리계산식:
          {500000 * (1 + { rate } * 1) - { rate } * 0.154}
          <br />
        </StyleList>
      ))}
    </div>
  );
}

export default BankLists;

const StyleList = styled.li`
  margin-bottom: 10px;
`;
const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;
