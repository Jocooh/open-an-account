import React from "react";
import { useQuery } from "react-query";
import { allDepositList } from "../../common/apis";
import { Bank, Info, Rate, Title } from "./style";

function Product({ data }) {
  // 예금상품 전체 리스트 불러오기
  const product = useQuery("result", () => allDepositList());
  console.log("result :>> ", result);
  return (
    <Info>
      <Title>{product.result?.baseList?.kor_co_nm}</Title>
      {/* <Bank>{products.product.baseinfo.kor_co_nm}</Bank>
      <Rate>{products.product.options.option.intr_rate2}</Rate> */}
    </Info>
  );
}

export default Product;
