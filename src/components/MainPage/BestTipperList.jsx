import React from "react";

import {
  ListCard,
  CardImage,
  CategoryLike,
  CardCategory,
  CardTitleContainer,
  CardTitle,
  SecondTitle,
  CategoryLikeContainer,
  CardContentWrapper,
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
            ) : (
              <CardImage src={require("../../assets/blankimg.png")} />
            )}
            <CategoryLikeContainer>
              <CategoryLike>
                <CardCategory>
                  <p style={{ color: "#6a24ff" }}>{best?.category}</p>
                </CardCategory>
                <Like currentUser={currentUser} id={best.id} post={best} />
              </CategoryLike>
              <CardTitleContainer>
                <CardTitle>
                  {best?.title.slice(0, 10)}
                  {best?.title.length > 10 && "..."}
                </CardTitle>
                <SecondTitle>{best?.name}</SecondTitle>
                <CardContentWrapper>
                  {best?.content.slice(0, 120)}
                  {best?.content.length > 120 && "..."}
                </CardContentWrapper>
              </CardTitleContainer>
            </CategoryLikeContainer>
          </ListCard>
        </>
      ) : (
        <ListCard>
          <div style={{ padding: "10px" }}>가져올 게시물이 없어요!</div>
          <img
            src={require("../../assets/no.png")}
            alt="빈 게시물"
            style={{ width: "100px", margin: "auto" }}
          />
        </ListCard>
      )}
    </>
  );
}

export default BestTipperList;
