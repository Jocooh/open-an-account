import React from "react";
import {
  CardCategory,
  CardImage,
  CardTitle,
  CardTitleContainer,
  CategoryLike,
  ListCard,
  SecondTitle,
} from "../../../pages/MyPage/style";
import Like from "../../Community/Like";

function UserLike({ likes, currentUser }) {
  //likes: 내가 좋아요한 글
  return (
    <>
      {likes?.map((like) => (
        <ListCard className="카드 하나하나 해당합니다." key={like.id}>
          {like.imgUrl ? (
            <CardImage src={`${like.imgUrl}`} alt="포스팅사진" />
          ) : null}
          <div
            style={{
              margin: "10px auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <CategoryLike>
              <CardCategory>
                <p style={{ color: "#6a24ff" }}>{like.category}</p>
              </CardCategory>
              {/* 이 like 부분은 style수정이 필요하다. */}
              <Like currentUser={currentUser} id={like.id} post={like} />
            </CategoryLike>
            <CardTitleContainer>
              <CardTitle>
                {like?.title.slice(0, 10)}
                {like?.title.length > 10 && "..."}
              </CardTitle>
              <SecondTitle>{like.name}</SecondTitle>
              <div>{like.content}</div>
            </CardTitleContainer>
          </div>
        </ListCard>
      ))}
    </>
  );
}

export default UserLike;
