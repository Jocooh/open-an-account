import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useMemo, useState } from "react";
import { authService } from "../../config/firebase";
import {
  ListCard,
  CardImage,
  CategoryLike,
  CardCategory,
  CardTitleContainer,
  CardTitle,
  SecondTitle,
} from "../../pages/MyPage/style";
import Like from "../Community/Like";

function BestTipperList({ best, currentUser }) {
  return (
    <>
      {best ? (
        <>
          <ListCard>
            {best?.imgUrl ? (
              <CardImage src={`${best.imgUrl}`} alt="포스팅사진" />
            ) : null}
            <div
              style={{
                margin: "10px 10px", //마이페이지에 디자인과 쪼금 다름
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <CategoryLike>
                <CardCategory>
                  <p>{best?.category}</p>
                </CardCategory>
                <Like currentUser={currentUser} id={best.id} post={best} />
              </CategoryLike>
              <CardTitleContainer>
                <CardTitle>
                  {best?.title.slice(0, 10)}
                  {best?.title.length > 10 && "..."}
                </CardTitle>
                <SecondTitle>{best?.name}</SecondTitle>
                <div>{best?.content}</div>
              </CardTitleContainer>
            </div>
          </ListCard>
        </>
      ) : (
        <ListCard>
          <div style={{ padding: "10px" }}>해당 게시물이 없어요!</div>
        </ListCard>
      )}
    </>
  );
}

export default BestTipperList;
