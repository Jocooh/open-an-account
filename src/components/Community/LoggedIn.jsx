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

function LoggedIn({ username, categorytab, setCategoryTab }) {
  const [postingModalOpen, setPostingModalOpen] = useState(false);
  const [boards, setBoards] = useState([]);

  const OpenPostingModal = () => {
    setPostingModalOpen(true);
  };

  const [posts, setPosts] = useState([]);
  const getPostList = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
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
  console.log("posts :>> ", posts);
  console.log("posts.id :>> ", posts.id);
  const result = posts?.filter((item) => item.category === categorytab);

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <Wrapper>
      <div>
        {categorytab === "금융상품 후기" && (
          <Content>
            <Title>
              마음에 드는 팁이 있다면 <br /> 하트!
            </Title>
            {postingModalOpen && (
              <PostingModal
                setPostingModalOpen={setPostingModalOpen}
                posts={posts}
                categorytab={categorytab}
              />
            )}
            <Boards>
              <Tipper posts={posts} result={result} />
            </Boards>

            {/* 작성창 제일 위  */}
            {/* 그 다음 글 카테고리 순서대로 쌓기 */}
          </Content>
        )}

        {categorytab === "팁과 노하우" && (
          <Content>
            <Title>
              마음에 드는 팁이 있다면 <br /> 하트!
            </Title>
            {postingModalOpen && (
              <PostingModal
                setPostingModalOpen={setPostingModalOpen}
                posts={posts}
                categorytab={categorytab}
              />
            )}
            <Boards>
              <Tipper posts={posts} result={result} />
            </Boards>

            {/* 작성창 제일 위  */}
            {/* 그 다음 글 카테고리 순서대로 쌓기 */}
          </Content>
        )}

        {categorytab === "공지사항" && (
          <Content>
            <Title>
              마음에 드는 팁이 있다면 <br /> 하트!
            </Title>
            {postingModalOpen && (
              <PostingModal
                setPostingModalOpen={setPostingModalOpen}
                posts={posts}
                categorytab={categorytab}
              />
            )}
            <Boards>
              <Tipper posts={posts} result={result} />
            </Boards>
          </Content>
        )}
      </div>

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
