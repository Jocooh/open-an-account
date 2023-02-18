// import React, { useState, useMemo, useRef, useEffect } from "react";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   dbService,
//   docRef,
//   query,
//   where,
// } from "firebase/firestore";
// import { db } from "../../config/firebase";

// // eslint-disable-next-line react-hooks/rules-of-hooks
// const [selectedProductIds, setSelectedProductIds] = useState(
//   new Array(9).fill("")
// ); //* 선택된 상품ID 저장

// const GetDepositBaseAndOptions = () => {
//   //* 선택된 상품 ID(BASE) 저장
//   const handleSelectProducts = async (productId) => {
//     try {
//       const docRef = doc(db, "DEPOSIT_BASE_LIST", productId);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         const newProductIds = [...selectedProductIds];
//         newProductIds[newProductIds.indexOf("")] = docSnap.id;
//         setSelectedProductIds(newProductIds);
//         console.log(docSnap.data().fin_prdt_cd);
//         const finPrdtCd = docSnap.data().fin_prdt_cd;
//         console.log(newProductIds);
//         const querySnapshot = await getDocs(
//           collection(db, "DEPOSIT_OPTION_LIST"),
//           where("fin_prdt_cd", "==", finPrdtCd)
//         );
//         const options = [];
//         querySnapshot.forEach((doc) => {
//           options.push(doc.data());
//         });
//         if (options.length > 0) {
//           const intrRate = options[0].intr_rate;
//           const intrRate2 = options[0].intr_rate2;
//           const index = newProductIds.indexOf("");
//           if (index !== -1) {
//             newProductIds[index + 0] = intrRate;
//             newProductIds[index + 1] = intrRate2;
//             setSelectedProductIds(newProductIds);
//             console.log(newProductIds);
//           }
//         }
//       } else {
//         console.log("문서의 아이디를 찾을 수 없어요!");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   //* 금융상품을 클릭 시 productId를 인자로 받아서 handleSelectProducts 함수 실행
//   const handleClickProduct = (productId) => {
//     handleSelectProducts(productId);
//   };

//   useEffect(() => {
//     handleClickProduct();
//   }, []);

//   return <></>;
// };

// export default GetDepositBaseAndOptions;
