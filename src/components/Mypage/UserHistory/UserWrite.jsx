import React from "react";

import {
  CardCategory,
  CategoryLike,
  CardTitle,
  SecondTitle,
  ListCard,
  CardTitleContainer,
  CardImage,
  CategoryLikeContainer,
  CardContentWrapper,
} from "../../../pages/MyPage/style";

import Like from "../../Community/Like";

function UserWrite({ board, currentUser }) {
  return (
    <>
      <ListCard>
        {board.imgUrl ? (
          <div
            style={{
              height: "211px",
            }}
          >
            <CardImage src={`${board.imgUrl}`} alt="포스팅사진" />
          </div>
        ) : (
          <div
            style={{
              height: "211px",
            }}
          >
            <CardImage src={require("../../../assets/blankimg.png")} />
          </div>
        )}
        <CategoryLikeContainer
          style={{
            margin: "10px 10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <CategoryLike>
            <CardCategory>
              <p style={{ color: "#6a24ff", fontSize: "14px" }}>
                {board.category}
              </p>
            </CardCategory>
            <Like currentUser={currentUser} post={board} id={board.id} />
          </CategoryLike>
          <CardTitleContainer>
            <CardTitle>
              {board.title.slice(0, 10)}
              {board.title.length > 10 && "..."}
            </CardTitle>
            <SecondTitle>{board.name}</SecondTitle>
            <CardContentWrapper>
              {board?.content.slice(0, 140)}
              {board?.content.length > 140 && "..."}
            </CardContentWrapper>
          </CardTitleContainer>
        </CategoryLikeContainer>
      </ListCard>
    </>
  );
}

export default UserWrite;
