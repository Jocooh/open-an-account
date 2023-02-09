import React from "react";
import { useQuery } from "react-query";
import { allDepositList } from "../../common/apis";
import { Info, Title } from "./style";

function Product() {
  // 예금상품 전체 리스트 불러오기

  const { isLoading, isError, error, data } = useQuery("products", () =>
    allDepositList()
  );
  if (isLoading) <div>...Loading</div>;
  if (isError) <p>{error}</p>;
  console.log("data ", data);
  return (
    <Info>
      <Title>{data}</Title>
    </Info>
  );
}

export default Product;
