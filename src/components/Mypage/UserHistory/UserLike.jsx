import React from "react";
import {
  CardCategory,
  CardContentWrapper,
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
        <ListCard key={like.id}>
          {like.imgUrl ? (
            <div
              style={{
                height: "211px",
              }}
            >
              <CardImage src={`${like.imgUrl}`} alt="포스팅사진" />
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
          <CategoryLikeContainer>
            <CategoryLike>
              <CardCategory>
                <p style={{ color: "#6a24ff", fontSize: "14px" }}>
                  {like.category}
                </p>
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
              <CardContentWrapper>
                {like?.content.slice(0, 140)}
                {like?.content.length > 140 && "..."}
              </CardContentWrapper>
            </CardTitleContainer>
          </CategoryLikeContainer>
        </ListCard>
      ))}
    </>
  );
}

export default UserLike;
