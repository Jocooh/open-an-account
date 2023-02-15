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
  const [optionLists, setOptionLists] = useState([]);
  const bankListFetch = async () => {
    const { data } = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=6f3a6ea55869e0bdccf38e3e5dcc145e&topFinGrpNo=020000&pageNo=1"
    );
    setBaseLists(data?.result.baseList);
    setOptionLists(data?.result.optionList);
  };

  const [scrap, setScrap] = useState(false);
  const [changeColor, setChangeColor] = useState("#D9D9D9");
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserUid, setCurrentUserUid] = useState("");

  //* props로 받아온 문자열 input값 숫자형으로 바꾸기
  const inputNum = parseInt(inputValue.replaceAll(",", ""));
  console.log("~~~~~~");
  console.log("inputValue", inputValue);
  console.log("typeof inputValue", typeof inputValue);
  console.log("input숫자형 변환", typeof inputNum);
  console.log("inputNum ", inputNum);

  console.log(
    "적금 단리 만기 수령액",
    Math.round(
      inputNum * (1 + 3.76 * 0.01 * (78 / 12) - 3.76 * 0.01 * (78 / 12) * 0.154)
    )
  );

  console.log(
    "예금 단리 만기 수령액 :>> ",
    Math.round(inputNum * (1 + 0.01 * 4.21 - 0.01 * 4.21 * 0.154))
  );

  const returnSum = () => {
    let sum;
    for (let i = 0; i < 13; i++) {
      sum += Math.round((inputNum * (0.01 * 4.5)) ^ [i]);
    }
    return sum;
  };
  console.log("예금 복리 만기 수령액 ", returnSum());

  return (
    <Wrapper>
      <Guide>만기 수령액</Guide>
      {inputNum > 9999 ? (
        <TotalCost>
          {Math.round(
            inputNum *
              (1 + 3.76 * 0.01 * (78 / 12) - 3.76 * 0.01 * (78 / 12) * 0.154)
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
        <Button>은행 사이트 바로가기</Button>
      </ProductBox>
    </Wrapper>
  );
}

export default Product;
