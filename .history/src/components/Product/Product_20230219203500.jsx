import React, { useState, useEffect } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { collection, getDocs, query, where } from "firebase/firestore";
import { authService, db } from "../../config/firebase";
import Numeral from "numeral";
import {
  Guide,
  Info,
  Message,
  Name,
  Prdt_nm,
  ProductBox,
  TotalCost,
  Wrapper,
} from "./style";

function Product({
  inputValue,
  selectedProduct,
  selectedProductRate,
  selectedProductRate2,
}) {
  //* props로 받아온 문자열 input값 숫자형으로 바꾸기
  //TODO: 입력할때마다 리렌더링
  const inputNum = parseInt(inputValue.replaceAll(",", ""));

  //* 상품 찜하기
  const [scrap, setScrap] = useState(false);

  console.log("selectedProduct", selectedProduct);

  return (
    <Wrapper>
      <Guide>만기 수령액</Guide>
      {inputNum > 999 ? (
        // TODO: 단복리 검사해야함 !! 아래는 임시
        // selectedProductRate === "S" ? (
        selectedProductRate ? (
          <TotalCost>
            {Numeral(
              Math.round(
                inputNum *
                  (1 +
                    0.01 * Number(selectedProductRate) -
                    0.01 * Number(selectedProductRate) * 0.154)
              )
            ).format(0, 0)}
            원
          </TotalCost>
        ) : (
          <TotalCost>
            {Numeral(
              inputNum +
                Math.round(
                  inputNum *
                    Math.pow(
                      1 + (Number(selectedProductRate2) * 0.01) / 12,
                      12
                    ) -
                    inputNum
                ) -
                Math.round(
                  Math.round(
                    inputNum *
                      Math.pow(
                        1 + (Number(selectedProductRate2) * 0.01) / 12,
                        12
                      ) -
                      inputNum
                  ) * 0.154
                )
            ).format(0, 0)}
            원
          </TotalCost>
        )
      ) : (
        <TotalCost style={{ color: "#A3A3A3" }}>0원</TotalCost>
      )}

      <ProductBox>
        <Name>
          <Prdt_nm>{selectedProduct.fin_prdt_nm}</Prdt_nm>
          <BsFillBookmarkFill
            onClick={() => {
              setScrap(true);
            }}
            style={scrap ? { color: "#CDE974" } : { color: "#D9D9D9" }}
          />
        </Name>

        <Info>
          <div>{selectedProduct.kor_co_nm}</div>
          <div>
            일반 금리 {selectedProductRate}% | 최고금리
            {selectedProductRate2}
          </div>
        </Info>
        <Message>
          <li>가입 방법: {selectedProduct.join_way}</li>
          <li>가입 대상: {selectedProduct.join_member}</li>
          <li>
            (유의사항)
            {selectedProduct.etc_note}
          </li>
        </Message>
      </ProductBox>
    </Wrapper>
  );
}

export default Product;
