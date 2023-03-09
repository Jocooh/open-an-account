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
                <div
                  style={{
                    height: "200px",
                    color: "#818181",
                    fontSize: "16px",
                    lineHeight: "25px",
                  }}
                >
                  {best?.content.slice(0, 140)}
                  {best?.content.length > 140 && "..."}
                </div>
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
