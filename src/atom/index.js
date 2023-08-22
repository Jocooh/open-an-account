import { atom } from "recoil";

//recoil state 생성
export const productType = atom({
  key: "productType",
  default: 1,
});
export const comparingModal = atom({
  key: "comparingModal",
  default: false,
});
// export const selectedProduct = atom({
//   key: "selectedProduct",
//   default: [],
// });
export const productIds = atom({
  key: "productIds",
  default: new Array(18).fill(""),
});
