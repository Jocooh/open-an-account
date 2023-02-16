import React, { useState, axios, useEffect } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import {
  collection,
  getDoc,
  doc,
  deleteDoc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { authService, db } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
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

function Product({ inputValue }) {
  const [baseLists, setBaseLists] = useState([]);

  const [scrap, setScrap] = useState(false);
  const [changeColor, setChangeColor] = useState("#D9D9D9");
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserUid, setCurrentUserUid] = useState("");

  //* props로 받아온 문자열 input값 숫자형으로 바꾸기
  const inputNum = parseInt(inputValue.replaceAll(",", ""));

  //* 상품 찜 가져오기
  const getScrap = async () => {
    const newId = currentUserUid;
    const docRef = doc(db, "scrap", newId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setScrap(true);
      setChangeColor("#CDE974");
    }
  };

  //* 상품 찜하기
  const updateScrap = async () => {
    const newId = currentUserUid + baseLists.prdt_cd;
    if (scrap === false) {
      // 찜이 되어있지 않을 경우 DB에 추가
      await setDoc(doc(db, "scrap", newId), {
        userId: authService.currentUser?.uid,
        prdt_cd: baseLists?.prdt_cd,
        date: Date.now(),
      });

      setScrap(true);
      console.log("scrap :>> ", scrap);
      setChangeColor("#CDE974");
    } else {
      //* 찜이 되어있는 경우 DB에서 삭제
      const scrapDoc = doc(db, "scrap", newId);
      deleteDoc(scrapDoc);
      setScrap(false);
      setChangeColor("#D9D9D9");
    }
  };
  console.log(
    "예금 단리 만기 clear",
    Math.round(inputNum * (1 + 0.01 * 4 - 0.01 * 4 * 0.154))
  );

  console.log(
    "적금 단리 만기 clear",

    inputNum * 12 +
      Math.round((inputNum * 13.7 * 0.01 * (1 * 12 + 1) * 1 * 12) / 2 / 12) -
      Math.round(
        ((inputNum * 13.7 * 0.01 * (1 * 12 + 1) * 1 * 12) / 2 / 12) * 0.154
      )
  );

  console.log(
    "예금 복리 만기 clear",
    inputNum +
      Math.round(inputNum * Math.pow(1 + (4.65 * 0.01) / 12, 12) - inputNum) -
      Math.round(
        Math.round(inputNum * Math.pow(1 + (4.65 * 0.01) / 12, 12) - inputNum) *
          0.154
      )
  );

  console.log("~~~~~~~~~~");
  console.log(
    "적금 복리 어떻게 구하냐....",
    Math.round(inputNum * ((((12 * 13) / 2) * (4.65 * 0.01)) / 12))
  );

  useEffect(() => {
    //* 상품 찜 정보 가져오기
    getScrap();
  }, [currentUserName, currentUserUid]);
  return (
    <Wrapper>
      <Guide>만기 수령액</Guide>
      {inputNum > 9999 ? (
        <TotalCost>
          {Math.round(
            inputNum * (1 + 5 * 0.01 * (78 / 12) - 5 * 0.01 * (78 / 12) * 0.154)
          )}
          원
        </TotalCost>
      ) : (
        <TotalCost>0원</TotalCost>
      )}

      <ProductBox>
        <Name>
          <Prdt_nm>우리적금</Prdt_nm>
          <BsFillBookmarkFill
            onClick={updateScrap}
            style={scrap ? { color: "#CDE974" } : { color: "#D9D9D9" }}
          />
        </Name>

        <Info>
          <div>우리은행</div>
          <div>이자율3%</div>
          <div>최고 금리 4.6%</div>
          <div>최소 상품 가입기간 6개월</div>
        </Info>
        <Message>
          <li>중도 해지가 불가능해요</li>
          <li>최소 10 최대 30</li>
        </Message>
        <Button>사이트로 이동</Button>
      </ProductBox>
    </Wrapper>
  );
}

export default Product;
