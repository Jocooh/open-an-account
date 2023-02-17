import React, { useState, useEffect } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  setDoc,
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

function Product({
  inputValue,
  selectedProductId,
  depositProductDetail,
  savingProudctDetail,
}) {
  //* 스크랩 기능
  const [scrap, setScrap] = useState(false);

  //* 은행사이트 연결
  const navigate = useNavigate();

  //* props로 받아온 문자열 input값 숫자형으로 바꾸기
  const inputNum = parseInt(inputValue);

  //* selectedProductId 정보 저장
  const [selectedProductDetail, setSelectedProductDetail] = useState([]);

  //* selectedProduct정보 파베에서 불러오기
  const getSelectedProductDetail = async () => {
    const docRef = doc(db, "DEPOSIT_BASE_LIST", selectedProductId);

    onSnapshot(docRef, (doc) => {
      console.log(doc.data(), doc.id);
      setSelectedProductDetail(doc.data());
    });

    // getBankSite();
    // goBankSite();
  };

  //* 은행사이트 바로가기 버튼 - 페이지 없으면 없음 표시 변경
  const [buttonContents, setButtonContents] = useState("");

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

  useEffect(() => {
    getSelectedProductDetail();
  }, []);

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
          <Prdt_nm>{selectedProductDetail.fin_prdt_nm}</Prdt_nm>
          <BsFillBookmarkFill
            onClick={() => {
              setScrap(true);
            }}
            style={scrap ? { color: "#CDE974" } : { color: "#D9D9D9" }}
          />
        </Name>

        <Info>
          {/* <div>
            {selectedProductDetail
              .filter((item) => item.id === selectedProductId)
              .map((item) => item.kor_co_nm)}
          </div> */}

          {/* {
            depositProductDetail.filter((item) =>
              selectedProductId.map((i) =>
                i?.fin_co_no === item?.fin_co_no
                  ? console.log("i :>> ", i)
                  : console.log("i!!!!!! :>> ", i)
              )
            )

            // <div key={i.id}>
            //   <div>
            //     이자율 {i.intr_rate}% | 최고금리
            //     {i.inter_rate2}%
            //   </div>
            //   <div>저축 기간 {i.save_trm}</div>
            // </div>
          } */}

          {/* <div>
            {selectedProductDetail
              .filter((item) => item.id == selectedProductId)
              .map((item) => item.mtrt_int)}
          </div> */}
          <div>{selectedProductDetail.etc_note}</div>
        </Info>
        <Message>
          <li>우대조건: {selectedProductDetail.spcl_cnd}</li>
          <li>가입 방법: {selectedProductDetail.join_way}</li>
          <li>
            (유의사항)
            {selectedProductDetail.etc_note}
          </li>
        </Message>

        <Button
          navigate={site}
          alt="은행사이트 바로가기"
          // key={Object.keys(logo)[0]}
        >
          {buttonContents}
        </Button>

        {/* {
        bankSites.logos.filter((logo) => {
          
          Object.keys(logo)[0] === selectedProductDetail[index].fin_co_no 
            
            &&  <Button
                navigate={Object.values(logo)[1]}
                alt="은행사이트 바로가기"
                key={Object.keys(logo)[0]}
              >
                사이트로 이동
              </Button>
            
           
        })
        } */}
      </ProductBox>
    </Wrapper>
  );
}

export default Product;
