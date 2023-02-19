import React, { useState, useEffect } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { collection, getDocs, query, where } from "firebase/firestore";
import { authService, db } from "../../config/firebase";
import numeral from "numeral";
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
  selectedProductId,
  selectedProductRate,
  selectedProductRate2,
}) {
  //* props로 받아온 문자열 input값 숫자형으로 바꾸기
  //TODO: 입력할때마다 리렌더링
  const inputNum = parseInt(inputValue.replaceAll(",", ""));

  //* 상품 찜하기
  const [scrap, setScrap] = useState(false);

  //********** 상품 정보 *************
  //* 전체 상품의 DEPOSIT_OPTION_LIST 정보 저장
  const [totalDepositOptionDetail, setTotalDepositOptionDetail] = useState([]);
  //* 전체 상품의 SAVING_OPTION_LIST 정보 저장
  const [totalSavingOptionDetail, setTotalSavingOptionDetail] = useState([]);

  //* selectedProductId의 DEPOSIT_BASE_LIST 정보 저장
  const [depositOptionDetail, setDepositOptionDetail] = useState([]);
  //* selectedProductId의 SAVING_BASE_LIST 정보 저장
  const [savingOptionDetail, setSavingOptionDetail] = useState([]);

  return (
    <Wrapper>
      <Guide>만기 수령액</Guide>
      {inputNum > 9999 ? (
        // TODO: 단복리 검사해야함 !! 아래는 임시
        // selectedProductRate === "S" ? (
        selectedProductRate ? (
          <TotalCost>
            {Math.round(
              inputNum *
                (1 +
                  0.01 * Number(selectedProductRate) -
                  0.01 * Number(selectedProductRate) * 0.154)
            )}
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
            일반 금리 {selectedProductRate}% | 최고금리
            {selectedProductRate2}
          </div>
        </Info>
        <Message>
          <li>가입 방법: {selectedProductId.join_way}</li>
          <li>가입 대상: {selectedProductId.join_member}</li>
          <li>
            (유의사항)
            {selectedProductId.etc_note}
          </li>
        </Message>
      </ProductBox>
    </Wrapper>
  );
}

export default Product;
