import axios from "axios";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Bookmarks from "../components/Bookmarks";
import { db } from "../config/firebase";
const InsertData = () => {
  const [savingBaseList, setSavingBaseList] = useState([]);
  const [savingOptionList, setSavingOptionList] = useState([]);
  const [depositBaseList, setDepositBaseList] = useState([]);
  const [depositOptionList, setDepositOptionList] = useState([]);

  // saving = 적금
  // deposit = 예금

  // saving products data
  // saving products data
  // saving products data

  // const getSavingBaseListHandler = async () => {
  //   const { data } = await axios.get(
  //     ` https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1`
  //   );
  //   setSavingBaseList(data?.result.baseList); // base list = 기본 정보
  //   console.log("savingBaseList", savingBaseList);
  //   {
  //     savingBaseList.map((item) => {
  //       addDoc(collection(db, "SAVING_BASE_LIST"), {
  //         category: "적금 기본 정보",
  //         dcls_month: item?.dcls_month,
  //         fin_co_no: item?.fin_co_no,
  //         fin_prdt_cd: item?.fin_prdt_cd,
  //         kor_co_nm: item?.kor_co_nm,
  //         fin_prdt_nm: item?.fin_prdt_nm,
  //         join_way: item?.join_way,
  //         mtrt_int: item?.mtrt_int,
  //         spcl_cnd: item?.spcl_cnd,
  //         join_deny: item?.join_deny,
  //         join_member: item?.join_member,
  //         etc_note: item?.etc_note,
  //         max_limit: item?.max_limit,
  //         dcls_strt_day: item?.dcls_strt_day,
  //         dcls_end_day: item?.dcls_end_day,
  //         fin_co_subm_day: item?.fin_co_subm_day,
  //       });
  //     });
  //   }
  // };
  // const getSavingOptionListHandler = async () => {
  //   const { data } = await axios.get(
  //     ` https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1`
  //   );
  //   setSavingOptionList(data?.result.optionList); // option list = 옵션 목록
  //   console.log("savingOptionList", savingOptionList);
  //   {
  //     savingOptionList.map((item) => {
  //       addDoc(collection(db, "SAVING_OPTION_LIST"), {
  //         category: "적금 옵션 목록",
  //         dcls_month: item?.dcls_month,
  //         fin_co_no: item?.fin_co_no,
  //         fin_prdt_cd: item?.fin_prdt_cd,
  //         intr_rate_type: item?.intr_rate_type,
  //         intr_rate_type_nm: item?.intr_rate_type_nm,
  //         save_trm: item?.save_trm,
  //         intr_rate: item?.intr_rate,
  //         intr_rate2: item?.intr_rate2,
  //       });
  //     });
  //   }
  // };

  // deposit products data
  // deposit products data
  // deposit products data

  // const getDepositBaseListHandler = async () => {
  //   const { data } = await axios.get(
  //     ` https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1`
  //   );
  //   setDepositBaseList(data?.result.baseList); // base list = 기본 정보
  //   console.log("depositBaseList", depositBaseList);
  //   {
  //     depositBaseList.map((item) => {
  //       addDoc(collection(db, "DEPOSIT_BASE_LIST"), {
  //         category: "예금 기본 정보",
  //         dcls_month: item?.dcls_month,
  //         fin_co_no: item?.fin_co_no,
  //         fin_prdt_cd: item?.fin_prdt_cd,
  //         kor_co_nm: item?.kor_co_nm,
  //         fin_prdt_nm: item?.fin_prdt_nm,
  //         join_way: item?.join_way,
  //         mtrt_int: item?.mtrt_int,
  //         spcl_cnd: item?.spcl_cnd,
  //         join_deny: item?.join_deny,
  //         join_member: item?.join_member,
  //         etc_note: item?.etc_note,
  //         max_limit: item?.max_limit,
  //         dcls_strt_day: item?.dcls_strt_day,
  //         dcls_end_day: item?.dcls_end_day,
  //         fin_co_subm_day: item?.fin_co_subm_day,
  //       });
  //     });
  //   }
  // };
  // const getDepositOptionListHandler = async () => {
  //   const { data } = await axios.get(
  //     ` https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1`
  //   );
  //   setDepositOptionList(data?.result.optionList); // option list = 옵션 목록
  //   console.log("depositOptionList", depositOptionList);
  //   {
  //     depositOptionList.map((item) => {
  //       addDoc(collection(db, "DEPOSIT_OPTION_LIST"), {
  //         category: "예금 옵션 목록",
  //         dcls_month: item?.dcls_month,
  //         fin_co_no: item?.fin_co_no,
  //         fin_prdt_cd: item?.fin_prdt_cd,
  //         intr_rate_type: item?.intr_rate_type,
  //         intr_rate_type_nm: item?.intr_rate_type_nm,
  //         save_trm: item?.save_trm,
  //         intr_rate: item?.intr_rate,
  //         intr_rate2: item?.intr_rate2,
  //       });
  //     });
  //   }
  // };

  useEffect(() => {
    // getSavingBaseListHandler();
    // getSavingOptionListHandler();
    // getDepositBaseListHandler();
    // getDepositOptionListHandler();
  }, []);

  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    const querySnapshot = await getDocs(collection(db, "DEPOSIT_BASE_LIST"));
    const product = [];

    querySnapshot.forEach((doc) => {
      const newProduct = {
        id: doc.id,
        ...doc.data(),
      };

      product.push(newProduct);
    });

    setProducts(product);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>버튼 누르면 안돼요</h1>
      <br />
      <br />
      <br />
      <h3>적금 기본 정보</h3>
      {/* <button onClick={getSavingBaseListHandler}>누르지 마세요.</button> */}
      <br />
      <br />
      <br />
      <h3>적금 옵션 목록</h3>
      {/* <button onClick={getSavingOptionListHandler}>누르지마세요</button> */}
      <br />
      <br />
      <br />
      <h3>예금 기본 정보</h3>
      {/* <button onClick={getDepositBaseListHandler}>누르지마세요</button> */}
      <br />
      <br />
      <br />
      <h3>예금 옵션 목록</h3>
      {/* <button onClick={getDepositOptionListHandler}>누르지마세요</button> */}

      {/* 찜기능 테스트용 */}
      <div
        style={{ border: "1px solid black", width: "100px", height: "100px" }}
      >
        <h1>상품</h1>
        {products
          .filter((item) => item.fin_prdt_nm.length < 5)
          .map((item) => (
            <Bookmarks item={item} />
          ))}
      </div>
    </div>
  );
};

export default InsertData;
