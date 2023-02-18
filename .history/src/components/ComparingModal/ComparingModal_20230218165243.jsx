import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  CloseButton,
  FirstGuide,
  Guide,
  Highlight,
  Input,
  InputMoney,
  Message,
  MessageWrapper,
  ModalBackground,
  ModalContainer,
  ModalContents,
  Products,
  SecondGuide,
  SubTitle,
  Title,
  TitleWrapper,
} from "./style";
import Product from "../Product/Product";

const ComparingModal = ({ setComparingModalOpen, selectedProductId }) => {
  const [inputValue, setInputValue] = useState("");
  //* 상품 상세정보 저장
  const [depositProductDetail, setDepositProductDetail] = useState([]);
  const [savingProductDetail, setSavingProductDetail] = useState([]);

  //* selectedProductId 정보 저장
  const [selectedProductDetail, setSelectedProductDetail] = useState([]);

  //* selectedProduct정보 파베에서 불러오기
  const getSelectedProductDetail = async () => {
    const docRef = doc(db, "DEPOSIT_BASE_LIST", selectedProductId);

    onSnapshot(docRef, (doc) => {
      setSelectedProductDetail(doc.data());
    });

    // getBankSite();
    // goBankSite();
  };

  //* 예금 상품 정보 불러오기
  const getDepositProductDetail = async () => {
    const querySnapshot = await getDocs(collection(db, "DEPOSIT_OPTION_LIST"));
    const productDetail = [];

    querySnapshot.forEach((doc) => {
      const newProduct = {
        id: doc.id,
        ...doc.data(),
      };

      productDetail.push(newProduct);
      setDepositProductDetail(productDetail);
    });
  };
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
    getDepositProductDetail();
    getSavingProductDetail();
    getProductDetail();
  }, [productDetail, getSelectedProductDetail]);

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton
          src={require("../../assets/close.png")}
          alt="닫기"
          onClick={() => {
            setComparingModalOpen(false);
          }}
        />
        <ModalContents>
          <TitleWrapper>
            <Title>상품 비교</Title>
            <SubTitle>
              만기 수령액은 비교 상품들 모두 가입이 가능한 기간으로
              산정되었습니다.
            </SubTitle>
          </TitleWrapper>
          <MessageWrapper>
            <Message>
              12개월 동안
              <Input
                maxLength={12}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                thousandSeparator=","
                placeholder="금액을 입력해주세요"
                inputLength={inputValue.length}
              />
              원 씩 적립하면
              <FirstGuide>
                *금액은 최대 10억원까지 입력할 수 있습니다.
              </FirstGuide>
            </Message>
          </MessageWrapper>
          <Products>
            <Product
              inputValue={inputValue}
              selectedProductId={selectedProductId[0]}
              selectedProductDetail={selectedProductDetail}
              productDetail={productDetail}
            />
            <Product
              inputValue={inputValue}
              selectedProductId={selectedProductId[1]}
              selectedProductDetail={selectedProductDetail}
              productDetail={productDetail}
            />
            <Product
              inputValue={inputValue}
              selectedProductId={selectedProductId[2]}
              selectedProductDetail={selectedProductDetail}
              productDetail={productDetail}
            />
          </Products>
          <SecondGuide>
            *만기 수령액은 이자소득세를 제외한 (일반과세 기준 이자금액의 15.4%)
            금액입니다.
          </SecondGuide>
        </ModalContents>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ComparingModal;
