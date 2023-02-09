import React from "react";
import { allDepositList } from "../../common/apis";

function Product({ data }) {
  // 예금상품 전체 리스트 불러오기
  const {
    isDeposit: isDepositAll,
    data: allDepositList,
    isError,
  } = useQuery(["allDepositList", _], () => allDepositList());

  return (
    <>
      <Title>{products.product}</Title>
      <Bank>{products.product.baseinfo.kor_co_nm}</Bank>
      <Rate>{products.product.options.option.intr_rate2}</Rate>
    </>
  );
}

export default Product;
