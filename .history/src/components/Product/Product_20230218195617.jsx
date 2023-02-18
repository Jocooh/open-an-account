import React, { useState, useEffect } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  setDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { authService, db } from "../../config/firebase";
import {
  Button,
  Guide,
  Info,
  Message,
  Name,
  Prdt_nm,
  ProductBox,
  TotalCost,
  Wrapper,
} from "./style";

import { useNavigate } from "react-router-dom";
import bankSites from "../../assets/bankSite/bankSite";

function Product({ inputValue, selectedProductId }) {
  //* props로 받아온 문자열 input값 숫자형으로 바꾸기
  //TODO: 입력할때마다 리렌더링
  const inputNum = parseInt(inputValue.replaceAll(",", ""));

  //* 은행사이트 연결
  const navigate = useNavigate();
  //* 은행사이트 바로가기 버튼 - 페이지 없으면 없음 표시 변경
  const [buttonContents, setButtonContents] = useState("");

  //* 상품 찜하기
  const [scrap, setScrap] = useState(false);

  //********** 상품 정보 *************
  // //* selectedProductId의 DEPOSIT_BASE_LIST 정보 저장
  // const [depositBaseDetail, setDepositBaseDetail] = useState([]);
  // //* selectedProductId의 SAVING_BASE_LIST 정보 저장
  // const [savingBaseDetail, setSavingBaseDetail] = useState([]);

  //* 전체 상품의 DEPOSIT_OPTION_LIST 정보 저장
  const [totalDepositOptionDetail, setTotalDepositOptionDetail] = useState([]);
  //* 전체 상품의 SAVING_OPTION_LIST 정보 저장
  const [totalSavingOptionDetail, setTotalSavingOptionDetail] = useState([]);

  //* selectedProductId의 DEPOSIT_BASE_LIST 정보 저장
  const [depositOptionDetail, setDepositOptionDetail] = useState([]);
  //* selectedProductId의 SAVING_BASE_LIST 정보 저장
  const [savingOptionDetail, setSavingOptionDetail] = useState([]);

  // //* selectedProduct의 DEPOSIT_BASE_LIST 정보 파베에서 불러오기
  // const getSelectedDepositProductDetail = async () => {
  //   const docRef = doc(db, "DEPOSIT_BASE_LIST", selectedProductId);

  //   onSnapshot(docRef, (doc) => {
  //     setDepositBaseDetail(doc.data());
  //   });
  // };
  // //* selectedProduct의 SAVING_BASE_LIST 정보 파베에서 불러오기
  // const getSelectedSavingProductDetail = async () => {
  //   const docRef = doc(db, "SAVING_BASE_LIST", selectedProductId);

  //   onSnapshot(docRef, (doc) => {
  //     setSavingBaseDetail(doc.data());
  //   });
  // };

  //* 전체 DEPOSIT_OPTION_LIST 정보 저장
  const getDepositOptionDetail = async () => {
    const querySnapshot = await getDocs(collection(db, "DEPOSIT_OPTION_LIST"));
    const productDetail = [];

    querySnapshot.forEach((doc) => {
      const newProduct = {
        id: doc.id,
        ...doc.data(),
      };

      productDetail.push(newProduct);
      setTotalDepositOptionDetail(productDetail);
    });
  };
  //* 전체 SAVING_OPTION_LIST 정보 저장
  const getSavingOptionDetail = async () => {
    const querySnapshot = await getDocs(collection(db, "SAVING_OPTION_LIST"));
    const productDetail = [];

    querySnapshot.forEach((doc) => {
      const newProduct = {
        id: doc.id,
        ...doc.data(),
      };

      productDetail.push(newProduct);
      setTotalSavingOptionDetail(productDetail);
    });
  };

  //* depositOptionDetail에서 selectedProductId의 fin_prdt_cd 맞는걸 찾아서 파베에서 doc 불러오기
  const getSelectedDepositProductOptionDetail = async () => {
    const q = query(
      collection(db, "DEPOSIT_OPTION_LIST"),
      where("fin_prdt_cd", "==", selectedProductId.fin_prdt_cd)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setDepositOptionDetail(doc.data());
    });
  };
  //* savingOptionDetail에서 selectedProductId의 fin_prdt_cd 맞는걸 찾아서 파베에서 doc 불러오기
  const getSelectedSavingProductOptionDetail = async () => {
    const q = query(
      collection(db, "SAVING_OPTION_LIST"),
      where("fin_prdt_cd", "==", selectedProductId.fin_prdt_cd)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setSavingOptionDetail(doc.data());
    });
  };

  useEffect(() => {
    getSelectedDepositProductDetail();
    getSelectedSavingProductDetail();
    getDepositOptionDetail();
    getSavingOptionDetail();
    getSelectedDepositProductOptionDetail();
    getSelectedSavingProductOptionDetail();
  }, [
    depositBaseDetail,
    savingBaseDetail,
    depositOptionDetail,
    savingOptionDetail,
  ]);

  const getBankSite = () => {
    bankSites.logos.map((logo, index) => {
      if (Object.keys(logo)[0] === depositBaseDetail[index]?.fin_co_no) {
        setButtonContents("사이트로 이동");
      } else {
        setButtonContents("지원하지 않는 사이트입니다.");
      }
    });
  };
  //* 은행사이트 연결
  const [site, setSite] = useState("");

  const goBankSite = () => {
    bankSites.logos.map((logo, index) => {
      if (Object.keys(logo)[0] === depositBaseDetail[index]?.fin_co_no) {
        console.log("Object.keys(logo)[1] :>> ", Object.keys(logo)[1]);
        setSite(Object.keys(logo)[1]);
      }
    });
  };

  return (
    <Wrapper>
      <Guide>만기 수령액</Guide>
      {inputNum > 9999 ? (
        depositOptionDetail.intr_rate_type === "S" ? (
          <TotalCost>
            {Math.round(
              inputNum *
                (1 +
                  0.01 * Number(depositOptionDetail.intr_rate2) -
                  0.01 * Number(depositOptionDetail.intr_rate2) * 0.154)
            )}
            원
          </TotalCost>
        ) : (
          <TotalCost>
            {inputNum +
              Math.round(
                inputNum *
                  Math.pow(
                    1 + (Number(depositOptionDetail.intr_rate2) * 0.01) / 12,
                    12
                  ) -
                  inputNum
              ) -
              Math.round(
                Math.round(
                  inputNum *
                    Math.pow(
                      1 + (Number(depositOptionDetail.intr_rate2) * 0.01) / 12,
                      12
                    ) -
                    inputNum
                ) * 0.154
              )}
            원
          </TotalCost>
        )
      ) : (
        <TotalCost>0원</TotalCost>
      )}

      <ProductBox>
        <Name>
          <Prdt_nm>{selectedProductId.fin_prdt_nm}</Prdt_nm>
          <BsFillBookmarkFill
            onClick={() => {
              setScrap(true);
            }}
            style={scrap ? { color: "#CDE974" } : { color: "#D9D9D9" }}
          />
        </Name>

        <Info>
          <div>{selectedProductId.kor_co_nm}</div>
          <div>
            일반 금리 {depositOptionDetail.intr_rate}% | 최고금리
            {depositOptionDetail.intr_rate2}
          </div>
        </Info>
        <Message>
          <li>가입 방법: {selectedProductId.join_way}</li>
          <li>가입 대상: {selectedProductId.join_member}</li>
          <li>
            (유의사항)
            {depositBaseDetail.etc_note}
          </li>
        </Message>

        <Button navigate={site} alt="은행사이트 바로가기">
          {buttonContents}
        </Button>
      </ProductBox>
    </Wrapper>
  );
}

export default Product;
