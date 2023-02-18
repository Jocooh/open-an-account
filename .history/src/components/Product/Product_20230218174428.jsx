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
  //* 스크랩 기능
  const [scrap, setScrap] = useState(false);
  //* 은행사이트 연결
  const navigate = useNavigate();

  //* props로 받아온 문자열 input값 숫자형으로 바꾸기
  //TODO: 입력할때마다 리렌더링
  const inputNum = parseInt(inputValue.replaceAll(",", ""));

  //* 은행사이트 바로가기 버튼 - 페이지 없으면 없음 표시 변경
  const [buttonContents, setButtonContents] = useState("");

  //* 상품 상세정보 저장
  const [savingProductDetail, setSavingProductDetail] = useState([]);

  //* selectedProductId 정보 저장
  const [selectedProductDetail, setSelectedProductDetail] = useState([]);

  //* selectedProduct의 DEPOSIT_BASE_LIST 정보 파베에서 불러오기
  const getSelectedProductDetail = async () => {
    const docRef = doc(db, "DEPOSIT_BASE_LIST", selectedProductId);

    onSnapshot(docRef, (doc) => {
      setSelectedProductDetail(doc.data());
    });

    // getBankSite();
    // goBankSite();
  };

  // //* 예금 상품 정보 불러오기
  // const getDepositProductDetail = async () => {
  //   const querySnapshot = await getDocs(collection(db, "DEPOSIT_OPTION_LIST"));
  //   const productDetail = [];

  //   querySnapshot.forEach((doc) => {
  //     const newProduct = {
  //       id: doc.id,
  //       ...doc.data(),
  //     };

  //     productDetail.push(newProduct);
  //     setDepositProductDetail(productDetail);
  //   });
  // };
  //* 적금 상품 정보 불러오기
  const getSavingProductDetail = async () => {
    const querySnapshot = await getDocs(collection(db, "SAVING_OPTION_LIST"));
    const productDetail = [];

    querySnapshot.forEach((doc) => {
      const newProduct = {
        id: doc.id,
        ...doc.data(),
      };

      productDetail.push(newProduct);
      setSavingProductDetail(productDetail);
    });
  };

  const [productDetail, setProductDetail] = useState([]);

  //* selectedProductId의 fin_prdt_cd 맞는걸 찾아서 파베에서 doc 불러오기
  const getProductDetail = async () => {
    const q = query(
      collection(db, "DEPOSIT_OPTION_LIST"),
      where("fin_prdt_cd", "==", selectedProductDetail.fin_prdt_cd)
    );
    // console.log("q", q);
    const querySnapshot = await getDocs(q);
    // console.log("querySnapshot :>> ", querySnapshot);
    querySnapshot.forEach((doc) => {
      setProductDetail(doc.data());
    });
    // getBankSite();
    // goBankSite();
  };

  // console.log(
  //   "예금옵션에서 필터링",
  //   depositProductDetail.map((item) => item.fin_prdt_cd)
  // );
  // console.log("1", selectedProductDetail);
  // console.log("2", selectedProductDetail.fin_prdt_cd);
  // console.log("3", productDetail);

  useEffect(() => {
    getSelectedProductDetail();
    //  getDepositProductDetail();
    getSavingProductDetail();
    getProductDetail();
  }, [productDetail, getSelectedProductDetail]);

  const getBankSite = () => {
    console.log("selectedProductDetail :>> ", selectedProductDetail);
    bankSites.logos.map((logo, index) => {
      if (Object.keys(logo)[0] === selectedProductDetail[index]?.fin_co_no) {
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
      if (Object.keys(logo)[0] === selectedProductDetail[index]?.fin_co_no) {
        console.log("Object.keys(logo)[1] :>> ", Object.keys(logo)[1]);
        setSite(Object.keys(logo)[1]);
      }
    });
  };

  return (
    <Wrapper>
      <Guide>만기 수령액</Guide>
      {inputNum > 9999 ? (
        productDetail.intr_rate_type === "S" ? (
          <TotalCost>
            {Math.round(
              inputNum *
                (1 +
                  0.01 * Number(productDetail.intr_rate2) -
                  0.01 * Number(productDetail.intr_rate2) * 0.154)
            )}
            원
          </TotalCost>
        ) : (
          <TotalCost>
            {inputNum +
              Math.round(
                inputNum *
                  Math.pow(
                    1 + (Number(productDetail.intr_rate2) * 0.01) / 12,
                    12
                  ) -
                  inputNum
              ) -
              Math.round(
                Math.round(
                  inputNum *
                    Math.pow(
                      1 + (Number(productDetail.intr_rate2) * 0.01) / 12,
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
          <Prdt_nm>{selectedProductDetail.fin_prdt_nm}</Prdt_nm>
          <BsFillBookmarkFill
            onClick={() => {
              setScrap(true);
            }}
            style={scrap ? { color: "#CDE974" } : { color: "#D9D9D9" }}
          />
        </Name>

        <Info>
          <div>{selectedProductDetail.kor_co_nm}</div>

          <div>
            일반 금리 {productDetail.intr_rate}% | 최고금리
            {productDetail.intr_rate2}
          </div>

          <div>{selectedProductDetail.etc_note}</div>
        </Info>
        <Message>
          <li>가입 방법: {selectedProductDetail.join_way}</li>
          <li>
            (유의사항)
            {selectedProductDetail.etc_note}
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
