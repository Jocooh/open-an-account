import React from "react";
import {
  Block,
  CardCategory,
  CardTitle,
  SecondTitle,
  ListCard,
  UserWriteWrapper,
  CardTitleContainer,
} from "../../pages/MyPage/style";
import Bookmarks from "../ServicePage/Bookmarks";

function UserWriteList() {
  return (
    <UserWriteWrapper>
      <ListCard className="카드 하나하나 해당합니다.">
        <CardCategory>
          <Block />
          <CardTitle>내집마련</CardTitle>
          <div>북마크</div>
          {/* <Bookmarks baseList={item} productTypes={productTypes} /> */}
        </CardCategory>

        <CardTitleContainer>
          <SecondTitle>
            <p>스크랩 갯수</p>
            <p>좋아요 갯수</p>
          </SecondTitle>

          <CardTitle>주택청약 당첨 후기</CardTitle>
          <SecondTitle>당첨된 조라니</SecondTitle>
        </CardTitleContainer>

        <article>
          <div>주택 청약 당첨됐습니다.</div>
        </article>
      </ListCard>
    </UserWriteWrapper>
  );
}

export default UserWriteList;
//타이틀 제목 수가 넘어갈 수 없도록 ...처리
// {list.content.slice(0, 7)}
// {list.content.length > 7 && "..."}
