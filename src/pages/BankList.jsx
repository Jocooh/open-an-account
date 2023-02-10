import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { useQuery } from "react-query";
// import { FetchSavingLists } from "../common/apis";
import logoLists from "../assets/logo/logo";

function BankLists() {
  const [lists, setLists] = useState(null);
  const [save, setSave] = useState(null);
  // const [bestDepositList, setBestDepositList] = useState(null);
  //   const { isLoading, isError, error, data } = useQuery("reviews", FetchLists);
  //   if (isLoading) <div>...Loading</div>;
  //   if (isError) <p>{error}</p>;
  const bankListFetch = async () => {
    const { data } = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1"
    );
    setLists(data?.result.baseList);
    setSave(data?.result.optionList);
  };

  // 적금 데이터불러오는 함수.
  //   const { isLoading, isError, error, data } = useQuery(
  //     "review",
  //     FetchSavingLists
  //   );
  //   if (isLoading) <div>...isloading</div>;
  //   if (isError) <p>{error}</p>;
  //   console.log(data?.result);

  useEffect(() => {
    bankListFetch();
  }, []);

  return (
    <div>
      <ul>
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
                    ,만기기한:{v.save_trm},저축금리:{v.intr_rate2}
                  </p>
                ) : null
              )}
            </StyleList>
          ))}
      </ul>
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
