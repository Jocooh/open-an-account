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
  //* 은행사이트 연결
  const navigate = useNavigate();

  //* props로 받아온 문자열 input값 숫자형으로 바꾸기
  const inputNum = parseInt(inputValue.replaceAll(",", ""));

  //* selectedProductId 정보 저장
  const [selectedProductDetail, setSelectedProductDetail] = useState([]);
  console.log("selectedProductDetail :>> ", selectedProductDetail);
  //* 스크랩 기능
  const [scrap, setScrap] = useState(false);
  const [changeColor, setChangeColor] = useState("#D9D9D9");
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserUid, setCurrentUserUid] = useState("");

  //* selectedProduct정보 파베에서 불러오기
  const getSelectedProductDetail = async () => {
    //* getDoc는 안돼 getDoc 선택
    // const querySnapshot = await getDocs(db, "DEPOSIT_BASE_LIST");
    // const selectedProductArray = [];

    // querySnapshot.forEach((doc) => {
    //   const newProduct = {
    //     id: doc.id,
    //     ...doc.data(),
    //   };
    //   selectedProductArray.push(newProduct);
    // });

    // //* 파베 문서 참고
    // const ref = doc(db, "DEPOSIT_BASE_LIST");
    // const docSnap = await getDoc(ref);
    // if (docSnap.exists()) {
    //   const selectedProductBaseList = docSnap.data();
    //   console.log(selectedProductBaseList);
    // } else {
    //   console.log("No such document!");
    // }

    //* 선택된 상품 id 저장
    // const getSelectedProductDetail = async () => {
    try {
      const docRef = doc(db, "DEPOSIT_BASE_LIST");
      const docSnap = await getDoc(docRef);
      const selectedProductArray = [];

      if (docSnap.exists()) {
        const selectedProductBaseList = docSnap.data();
        selectedProductArray.push(selectedProductBaseList);
        // const newProductIds = [...selectedProductIds];
        // newProductIds[newProductIds.indexOf("")] = docSnap.id;
        setSelectedProductDetail(selectedProductArray);
        console.log(selectedProductDetail);
      } else {
        console.log("문서의 아이디를 찾을 수 없어요!");
      }
    } catch (error) {
      console.log("error :>> ", error);
    }

    // setSelectedProductDetail(selectedProductBaseList);
    getBankSite();
    goBankSite();
  };

  const [buttonContents, setButtonContents] = useState("");

  const getBankSite = () => {
    console.log("selectedProductDetail :>> ", selectedProductDetail);
    bankSites.logos.map((logo, index) => {
      if (Object.keys(logo)[0] === selectedProductDetail[index].fin_co_no) {
        setButtonContents("사이트로 이동");
        //   return (
        //     <Button
        //       navigate={Object.values(logo)[1]}
        //       alt="은행사이트 바로가기"
        //       key={Object.keys(logo)[0]}
        //     >
        //       사이트로 이동
        //     </Button>
        //   );
        // } else {
        //   return <Button>지원하지 않는 사이트입니다.</Button>;
      } else {
        setButtonContents("지원하지 않는 사이트입니다.");
      }
    });
  };

  const [site, setSite] = useState("");

  const goBankSite = () => {
    bankSites.logos.map((logo, index) => {
      if (Object.keys(logo)[0] === selectedProductDetail[index].fin_co_no) {
        console.log("Object.keys(logo)[1] :>> ", Object.keys(logo)[1]);
        setSite(Object.keys(logo)[1]); //undefined
      }
    });
  };

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

  useEffect(() => {
    getSelectedProductDetail();
  }, []);
  console.log("selectedProductDetail :>> ", selectedProductDetail);

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
          <Prdt_nm>
            {selectedProductDetail
              .filter((item) => item.id === selectedProductId)
              .map((item) => item.fin_prdt_nm)}
          </Prdt_nm>
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
          <div>
            {selectedProductDetail
              .filter((item) => item.id == selectedProductId)
              .map((item) => item.etc_note)}
          </div>
        </Info>
        <Message>
          <li>
            우대조건:{" "}
            {selectedProductDetail
              .filter((item) => item.id == selectedProductId)
              .map((item) => item.spcl_cnd)}
          </li>
          <li>
            가입 방법:{" "}
            {selectedProductDetail
              .filter((item) => item.id == selectedProductId)
              .map((item) => item.join_way)}
          </li>
          <li>
            (유의사항)
            {selectedProductDetail
              .filter((item) => item.id == selectedProductId)
              .map((item) => item.etc_note)}
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
