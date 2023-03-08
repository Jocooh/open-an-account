import React from "react";
import {
  CardCategory,
  CardImage,
  CardTitle,
  CardTitleContainer,
  CategoryLike,
  CategoryLikeContainer,
  ListCard,
  SecondTitle,
} from "../../../pages/MyPage/style";
import Like from "../../Community/Like";

function UserLike({ likes, currentUser }) {
  return (
    <>
      {likes?.map((like) => (
        <ListCard className="카드 하나하나 해당합니다." key={like.id}>
          {like.imgUrl ? (
            <CardImage src={`${like.imgUrl}`} alt="포스팅사진" />
          ) : null}
          <CategoryLikeContainer>
            <CategoryLike>
              <CardCategory>
                <p style={{ color: "#6a24ff" }}>{like.category}</p>
              </CardCategory>
              <Like
                currentUser={currentUser}
                id={like.docId}
                post={like}
                userLike={true}
              />
            </CategoryLike>
            <CardTitleContainer>
              <CardTitle>
                {like?.title.slice(0, 10)}
                {like?.title.length > 10 && "..."}
              </CardTitle>
              <SecondTitle>{like.name}</SecondTitle>
              <div>{like.content}</div>
            </CardTitleContainer>
          </CategoryLikeContainer>
        </ListCard>
      ))}
    </>
  );
}

export default UserLike;
