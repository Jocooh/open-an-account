// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 관계자 외 접근 금지
// 접근 권한 차후 걸어둘 것 === 원준

import axios from "axios";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../../config/firebase";

const Admin = () => {
  const [savingBaseList, setSavingBaseList] = useState([]);
  const [savingOptionList, setSavingOptionList] = useState([]);
  const [depositBaseList, setDepositBaseList] = useState([]);
  const [depositOptionList, setDepositOptionList] = useState([]);

  // saving = 적금
  // deposit = 예금

  // saving products data
  // saving products data
  // saving products data

  const getSavingBaseListHandler = async () => {
    const { data } = await axios.get(
      ` https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1`
    );
    setSavingBaseList(data?.result.baseList); // base list = 기본 정보
    console.log("savingBaseList", savingBaseList);
    {
      savingBaseList.map((item) => {
        addDoc(collection(db, "SAVING_BASE_LIST"), {
          category: "적금 기본 정보",
          dcls_month: item?.dcls_month,
          fin_co_no: item?.fin_co_no,
          fin_prdt_cd: item?.fin_prdt_cd,
          kor_co_nm: item?.kor_co_nm,
          fin_prdt_nm: item?.fin_prdt_nm,
          join_way: item?.join_way,
          mtrt_int: item?.mtrt_int,
          spcl_cnd: item?.spcl_cnd,
          join_deny: item?.join_deny,
          join_member: item?.join_member,
          etc_note: item?.etc_note,
          max_limit: item?.max_limit,
          dcls_strt_day: item?.dcls_strt_day,
          dcls_end_day: item?.dcls_end_day,
          fin_co_subm_day: item?.fin_co_subm_day,
        });
      });
    }
  };
  const getSavingOptionListHandler = async () => {
    const { data } = await axios.get(
      ` https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1`
    );
    setSavingOptionList(data?.result.optionList); // option list = 옵션 목록
    console.log("savingOptionList", savingOptionList);
    {
      savingOptionList.map((item) => {
        addDoc(collection(db, "SAVING_OPTION_LIST"), {
          category: "적금 옵션 목록",
          dcls_month: item?.dcls_month,
          fin_co_no: item?.fin_co_no,
          fin_prdt_cd: item?.fin_prdt_cd,
          intr_rate_type: item?.intr_rate_type,
          intr_rate_type_nm: item?.intr_rate_type_nm,
          save_trm: item?.save_trm,
          intr_rate: item?.intr_rate,
          intr_rate2: item?.intr_rate2,
        });
      });
    }
  };

  // deposit products data
  // deposit products data
  // deposit products data

  const getDepositBaseListHandler = async () => {
    const { data } = await axios.get(
      ` https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1`
    );
    setDepositBaseList(data?.result.baseList); // base list = 기본 정보
    console.log("depositBaseList", depositBaseList);
    {
      depositBaseList.map((item) => {
        addDoc(collection(db, "DEPOSIT_BASE_LIST"), {
          category: "예금 기본 정보",
          dcls_month: item?.dcls_month,
          fin_co_no: item?.fin_co_no,
          fin_prdt_cd: item?.fin_prdt_cd,
          kor_co_nm: item?.kor_co_nm,
          fin_prdt_nm: item?.fin_prdt_nm,
          join_way: item?.join_way,
          mtrt_int: item?.mtrt_int,
          spcl_cnd: item?.spcl_cnd,
          join_deny: item?.join_deny,
          join_member: item?.join_member,
          etc_note: item?.etc_note,
          max_limit: item?.max_limit,
          dcls_strt_day: item?.dcls_strt_day,
          dcls_end_day: item?.dcls_end_day,
          fin_co_subm_day: item?.fin_co_subm_day,
        });
      });
    }
  };
  const getDepositOptionListHandler = async () => {
    const { data } = await axios.get(
      ` https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1`
    );
    setDepositOptionList(data?.result.optionList); // option list = 옵션 목록
    console.log("depositOptionList", depositOptionList);
    {
      depositOptionList.map((item) => {
        addDoc(collection(db, "DEPOSIT_OPTION_LIST"), {
          category: "예금 옵션 목록",
          dcls_month: item?.dcls_month,
          fin_co_no: item?.fin_co_no,
          fin_prdt_cd: item?.fin_prdt_cd,
          intr_rate_type: item?.intr_rate_type,
          intr_rate_type_nm: item?.intr_rate_type_nm,
          save_trm: item?.save_trm,
          intr_rate: item?.intr_rate,
          intr_rate2: item?.intr_rate2,
        });
      });
    }
  };

  return (
    <AdminBackground>
      <AdminWrapper>
        <AdminItems
          style={{ border: "none", fontSize: "larger", fontWeight: "bold" }}
        >
          <p>관계자 외 클릭 금지 ! 🔥</p>
        </AdminItems>
        <AdminItems>
          <a href="https://cors-anywhere.herokuapp.com/corsdemo">데이터 넣기</a>
        </AdminItems>
        <AdminItems>
          <button onClick={getSavingBaseListHandler}>
            적금 기본 정보 불러오기
          </button>
        </AdminItems>

        <AdminItems>
          <button onClick={getSavingOptionListHandler}>
            적금 옵션 목록 불러오기
          </button>
        </AdminItems>

        <AdminItems>
          <button onClick={getDepositBaseListHandler}>
            예금 기본 정보 불러오기
          </button>
        </AdminItems>

        <AdminItems>
          <button onClick={getDepositOptionListHandler}>
            예금 옵션 목록 불러오기
          </button>
        </AdminItems>
      </AdminWrapper>
    </AdminBackground>
  );
};

export default Admin;

const AdminBackground = styled.div`
  height: calc(100vh - 102px);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const AdminWrapper = styled.div`
  width: 700px;
  height: 700px;
  border: 4px solid #6a24ff;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AdminItems = styled.div`
  width: 250px;
  height: 100px;
  border: 2px solid #6a24ff;
  border-radius: 15px;

  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
