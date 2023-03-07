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
} from "../../../pages/MyPage/style";

import Like from "../../Community/Like";
// import Bookmarks from "../../ServicePage/Bookmarks";

function UserWrite({ board, currentUser }) {
  return (
    <>
      <ListCard>
        {board.imgUrl ? (
          <CardImage src={`${board.imgUrl}`} alt="포스팅사진" />
        ) : null}
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
              <p style={{ color: "#6a24ff" }}>{board.category}</p>
            </CardCategory>
            <Like currentUser={currentUser} post={board} id={board.id} />
          </CategoryLike>
          <CardTitleContainer>
            <CardTitle>
              {board.title.slice(0, 10)}
              {board.title.length > 10 && "..."}
            </CardTitle>
            <SecondTitle>{board.name}</SecondTitle>
            <div style={{ height: "200px" }}>
              {board?.content.slice(0, 230)}
              {board?.content.length > 230 && "..."}
            </div>
          </CardTitleContainer>
        </CategoryLikeContainer>
      </ListCard>
    </>
  );
}

export default UserWrite;
