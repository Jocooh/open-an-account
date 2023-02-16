import React, { useState, axios, useEffect } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";

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

function Product({
  inputValue,
  selectedProductId,
  depositProductDetail,
  savingProudctDetail,
}) {
  //* 은행사이트 연결
  const navigate = useNavigate();

  //* props로 받아온 문자열 input값 숫자형으로 바꾸기
  const inputNum = parseInt(inputValue.replaceAll(",", ""));

  //* 스크랩 기능
  const [scrap, setScrap] = useState(false);
  const [changeColor, setChangeColor] = useState("#D9D9D9");
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserUid, setCurrentUserUid] = useState("");

  // //* 상품 찜 가져오기
  // const getScrap = async () => {
  //   const newId = currentUserUid;
  //   const docRef = doc(db, "scrap", newId);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     setScrap(true);
  //     setChangeColor("#CDE974");
  //   }
  // };

  // //* 상품 찜하기
  // const updateScrap = async () => {
  //   const newId = currentUserUid + baseLists.prdt_cd;
  //   if (scrap === false) {
  //     // 찜이 되어있지 않을 경우 DB에 추가
  //     await setDoc(doc(db, "scrap", newId), {
  //       userId: authService.currentUser?.uid,
  //       prdt_cd: baseLists?.prdt_cd,
  //       date: Date.now(),
  //     });

  //     setScrap(true);
  //     console.log("scrap :>> ", scrap);
  //     setChangeColor("#CDE974");
  //   } else {
  //     //* 찜이 되어있는 경우 DB에서 삭제
  //     const scrapDoc = doc(db, "scrap", newId);
  //     deleteDoc(scrapDoc);
  //     setScrap(false);
  //     setChangeColor("#D9D9D9");
  //   }
  // };

  useEffect(() => {}, []);

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
          <Prdt_nm>{selectedProductId.fin_prdt_nm}</Prdt_nm>
          <BsFillBookmarkFill
            onClick={setScrap(true)}
            style={scrap ? { color: "#CDE974" } : { color: "#D9D9D9" }}
          />
        </Name>

        {selectedProductId.category === "예금 기본 정보" ? (
          <>
            <Info>
              <div>{selectedProductId.fin_prdt_nm}</div>

              {depositProductDetail.map(
                (item) =>
                  item.fin_prdt_cd === selectedProductId.fin_prdt_cd && (
                    <>
                      <div>
                        이자율 {depositProductDetail.intr_rate}% | 최고금리
                        {depositProductDetail.inter_rate2}%
                      </div>
                      <div>저축 기간 {depositProductDetail.save_trm}</div>
                    </>
                  )
              )}

              <div>{selectedProductId.mtrt_int}</div>
            </Info>
            <Message>
              <li>{selectedProductId.spcl_cnd}</li>
              <li>가입 방법: {selectedProductId.join_way}</li>
            </Message>
          </>
        ) : (
          <>
            <Info>
              <div>{selectedProductId.fin_prdt_nm}</div>
              <div>
                이자율 {depositProductDetail.intr_rate}% | 최고 금리
                {depositProductDetail.inter_rate2}%
              </div>
              <div>저축 기간 {depositProductDetail.save_trm}</div>
              <div>{selectedProductId.mtrt_int}</div>
            </Info>
            <Message>
              <li>{selectedProductId.spcl_cnd}</li>
              <li>가입 방법: {selectedProductId.join_way}</li>
            </Message>
          </>
        )}

        {bankSites.logos.map((logo) =>
          Object.keys(logo)[0] === depositProductDetail.fin_co_no ? (
            <Button
              navigate={Object.values(logo)[1]}
              alt="은행사이트 바로가기"
              key={depositProductDetail.fin_co_subm_day}
            >
              사이트로 이동
            </Button>
          ) : (
            <Button>지원하지 않는 사이트입니다.</Button>
          )
        )}
      </ProductBox>
    </Wrapper>
  );
}

export default Product;
