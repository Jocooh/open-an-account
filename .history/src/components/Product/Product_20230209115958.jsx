import React from "react";
import { useQuery } from "react-query";
import { allDepositList } from "../../common/apis";
import { Bank, Info, Rate, Title } from "./style";

function Product() {
  // 예금상품 전체 리스트 불러오기
  const { isLoading, IsError, error, data } = useQuery("result", () =>
    allDepositList()
  );
  if (isLoading) <div>...Loading</div>;
  if (isError) <p>{error}</p>;
  console.log("data :>> ", data);
  return (
    <Info>
      <Title>{data?.baseList[0]?.kor_co_nm}</Title>
      {/* <Bank>{products.product.baseinfo.kor_co_nm}</Bank>
      <Rate>{products.product.options.option.intr_rate2}</Rate> */}
    </Info>
  );
}

export default Product;
