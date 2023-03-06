import React, { useState, useEffect } from "react";
import PostingModal from "../PostingModal/PostingModal";
import {
  Wrapper,
  Content,
  Title,
  Boards,
  UserWrapper,
  User,
  Category,
  Categories,
  ProfileImg,
  PostButton,
  Message,
  Body,
} from "./style";
import Tipper from "../../components/MainPage/Tipper";
import { db } from "../../config/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { useCallback } from "react";

function LoggedIn({ username, categorytab, setCategoryTab }) {
  const [postingModalOpen, setPostingModalOpen] = useState(false);
  const [boards, setBoards] = useState([]);

  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const OpenPostingModal = () => {
    lockScroll();
    setPostingModalOpen(true);
  };

  //게시글 불러오기
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

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <Wrapper>
      <Body>
        <Title>
          마음에 드는 팁이 있다면 <br /> 하트!
        </Title>
        {categorytab === "금융상품 후기" && (
          <Content>
            {postingModalOpen && (
              <PostingModal
                setPostingModalOpen={setPostingModalOpen}
                getPostList={getPostList}
                posts={posts}
                categorytab={categorytab}
              />
            )}
            <Boards>
              <Tipper posts={posts} result={result} getPostList={getPostList} />
            </Boards>
          </Content>
        )}

        {categorytab === "팁과 노하우" && (
          <Content>
            {postingModalOpen && (
              <PostingModal
                setPostingModalOpen={setPostingModalOpen}
                getPostList={getPostList}
                posts={posts}
                categorytab={categorytab}
              />
            )}
            <Boards>
              <Tipper posts={posts} result={result} getPostList={getPostList} />
            </Boards>
          </Content>
        )}

        {categorytab === "공지사항" && (
          <Content>
            {postingModalOpen && (
              <PostingModal
                setPostingModalOpen={setPostingModalOpen}
                getPostList={getPostList}
                posts={posts}
                categorytab={categorytab}
              />
            )}
            <Boards>
              <Tipper posts={posts} result={result} getPostList={getPostList} />
            </Boards>
          </Content>
        )}
      </Body>

      <UserWrapper>
        <User>
          {username}
          <ProfileImg src={require("../../assets/profileimg.png")} />
          <PostButton onClick={OpenPostingModal}>팁 작성하기</PostButton>
        </User>
        <Categories>
          <Message>카테고리</Message>
          <Category
            style={
              categorytab === "금융상품 후기"
                ? { backgroundColor: "brown", color: "white" }
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
                ? { backgroundColor: "brown", color: "white" }
                : null
            }
            onClick={() => {
              setCategoryTab("팁과 노하우");
            }}
          >
            팁과 노하우
          </Category>
          <Category
            style={
              categorytab === "공지사항"
                ? { backgroundColor: "brown", color: "white" }
                : null
            }
            onClick={() => {
              setCategoryTab("공지사항");
            }}
          >
            공지사항
          </Category>
        </Categories>
      </UserWrapper>
    </Wrapper>
  );
}

export default LoggedIn;
