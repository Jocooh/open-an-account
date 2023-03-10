import { collection, getDocs, query } from "firebase/firestore";
import { orderBy } from "lodash";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import Tipper from "../MainPage/Tipper";
import TopButton from "../../components/TopScrollBtn/TopScrollBtn";
import {
  Wrapper,
  Content,
  Title,
  UserWrapper,
  Message,
  User,
  Category,
  Categories,
  Boards,
  ProfileImg,
  PostButton,
  LoginButton,
  Body,
} from "./style";
function CommunityMain({ username, categorytab, setCategoryTab }) {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const getPostList = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "posts"), orderBy("createdAt", "desc"))
    );
    const post = [];
    querySnapshot.forEach((doc) => {
      const newPost = {
        id: doc.id,
        ...doc.data(),
      };
      post.push(newPost);
    });
    setPosts(post);
  };
  const result = posts?.filter((item) => item.category === categorytab);

  const sortWriteList = posts?.sort(function (a, b) {
    return b.createdAt - a.createdAt;
  });

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <Wrapper>
      <Body>
        <TopButton />
        <Title>
          사회초년생의
          <br />
          금융 꿀팁🍯 공간
        </Title>
        {categorytab === "금융상품 후기" && (
          <Content>
            <Boards>
              <Tipper posts={posts} result={result} getPostList={getPostList} />
            </Boards>
          </Content>
        )}
        {categorytab === "팁과 노하우" && (
          <Content>
            <Boards>
              <Tipper posts={posts} result={result} getPostList={getPostList} />
            </Boards>
          </Content>
        )}
        {/* {categorytab === "공지사항" && (
          <Content>
            <Boards>
              <Tipper posts={posts} result={result} />
            </Boards>
          </Content>
        )} */}
      </Body>
      <UserWrapper>
        <User>
          <ProfileImg src={require("../../assets/profileimg.png")} />
          로그인하고 <br /> 팁 모으기
          <LoginButton
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </LoginButton>
        </User>
        <Categories>
          <Message>카테고리</Message>
          <Category
            style={
              categorytab === "금융상품 후기"
                ? { backgroundColor: "white", color: "#6A24FF" }
                : null
            }
            onClick={() => {
              setCategoryTab("금융상품 후기");
            }}
          >
            금융상품 후기
          </Category>
          <Category
            style={
              categorytab === "팁과 노하우"
                ? { backgroundColor: "white", color: "#6A24FF" }
                : null
            }
            onClick={() => {
              setCategoryTab("팁과 노하우");
            }}
          >
            팁과 노하우
          </Category>
          {/* <Category
            style={
              categorytab === "공지사항"
                ? { backgroundColor: "white", color: "#6A24FF" }
                : null
            }
            onClick={() => {
              setCategoryTab("공지사항");
            }}
          >
            공지사항
          </Category> */}
        </Categories>
      </UserWrapper>
    </Wrapper>
  );
}

export default CommunityMain;
