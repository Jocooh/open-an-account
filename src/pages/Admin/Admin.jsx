// admin page 접근 권한 차후 걸어둘 것 원준

import axios from "axios";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db, firebaseConfig } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [savingBaseList, setSavingBaseList] = useState([]);
  const [savingOptionList, setSavingOptionList] = useState([]);
  const [depositBaseList, setDepositBaseList] = useState([]);
  const [depositOptionList, setDepositOptionList] = useState([]);

  const navigate = useNavigate();
  const userSession = sessionStorage.getItem(
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
  );
  const currentUser = JSON.parse(userSession ?? "");

  useEffect(() => {
    currentUser.email === "k1mwnjn@gmail.com"
      ? navigate("/admin")
      : navigate("/");
  }, []);

  const goToHeroku = () => {
    const link = "https://cors-anywhere.herokuapp.com/corsdemo";
    window.location.href = link;
  };

  // saving = 적금
  // deposit = 예금

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
      <AdminMsg>
        <Title>관계자 외 클릭 금지! 🔥</Title>
        <Text>
          금융감독원 API를 Heroku server를 통한 우회접속으로 Firebase database에
          저장하는 과정입니다.
        </Text>
        <Text>개발자 도구를 통해 데이터가 잘 들어오는지 확인해주세요.</Text>
      </AdminMsg>
      <AdminNav>
        <Menu onClick={goToHeroku}>1. heroku 이동 → API 받으러 가기</Menu>
        <Menu onClick={getSavingBaseListHandler}>
          2. 금감원 적금 기본정보 저장
        </Menu>
        <Menu onClick={getSavingOptionListHandler}>
          3. 금감원 적금 옵션목록 저장
        </Menu>
        <Menu onClick={getDepositBaseListHandler}>
          4. 금감원 예금 기본정보 저장
        </Menu>
        <Menu onClick={getDepositOptionListHandler}>
          5. 금감원 예금 옵션목록 저장
        </Menu>
      </AdminNav>
    </AdminBackground>
  );
};

export default Admin;

const AdminBackground = styled.div`
  height: calc(100vh - 102px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AdminMsg = styled.div`
  width: 1000px;
  height: 200px;
  gap: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: bold;

  margin-bottom: 15px;
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const AdminNav = styled.div`
  width: 1000px;
  height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Menu = styled.div`
  width: 500px;
  height: 100px;

  font-size: large;
  font-weight: bold;
  color: #6a24ff;
  text-align: center;
  line-height: 100px;

  transition: transform 300ms ease-in-out;
  transition: -webkit-transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  cursor: pointer;
`;
