import React, { Component, useState, useMemo, useRef, useEffect } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  dbService,
  docRef,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";

const GetDepositOption = () => {
  const [products, setProducts] = useState([]); //* 금융상품 list 상태 값 저장
  const [selectedProductOptions, setSelectedProductOptions] = useState(
    new Array(3).fill("")
  ); //* 선택된 상품 id 저장

  //* 상품 리스트(BASE) 함수
  const handleButtonClick = async () => {
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
  // console.log(products);

  useEffect(() => {
    handleButtonClick();
  }, []);

  //* 선택된 상품 ID(BASE) 저장
  const handleSelectProduct = async (productId) => {
    try {
      const docRef = doc(db, "DEPOSIT_BASE_LIST", productId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const newProductIds = [...selectedProductOptions];
        newProductIds[newProductIds.indexOf("")] = docSnap.id;
        setSelectedProductOptions(newProductIds);
        // console.log(newProductIds);
      } else {
        console.log("문서의 아이디를 찾을 수 없어요!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickProducts = (productId) => {
    handleSelectProduct(productId);
  };
  return <></>;
};
export default GetDepositOption;
