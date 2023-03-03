import React from "react";

import {
  CardCategory,
  CategoryLike,
  CardTitle,
  SecondTitle,
  ListCard,
  CardTitleContainer,
  CardImage,
} from "../../../pages/MyPage/style";
// import Bookmarks from "../../ServicePage/Bookmarks";

function UserWrite({ board }) {
  return (
    <>
      <ListCard className="카드 하나하나 해당합니다.">
        {board.imgUrl ? (
          <CardImage src={`${board.imgUrl}`} alt="포스팅사진" />
        ) : null}
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <CategoryLike>
            <CardCategory>
              <p style={{ color: "#6a24ff" }}>{board.category}</p>
            </CardCategory>
            <div>34❤️</div>
            {/* /* <Bookmarks baseList={item} productTypes={productTypes} /> */}
          </CategoryLike>
          <CardTitleContainer>
            <CardTitle>
              {board.title.slice(0, 10)}
              {board.title.length > 10 && "..."}
            </CardTitle>
            <SecondTitle>{board.name}</SecondTitle>
            <div>{board.content}</div>
          </CardTitleContainer>
        </div>
      </ListCard>
    </>
  );
}

export default UserWrite;
