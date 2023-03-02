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
} from "firebase/firestore";
import { async } from "@firebase/util";

function LoggedIn({ username, categorytab, setCategoryTab }) {
  const [postingModalOpen, setPostingModalOpen] = useState(false);
  const [boards, setBoards] = useState([]);

  console.log(categorytab);

  const OpenPostingModal = () => {
    setPostingModalOpen(true);
  };
  // 게시글 불러오기
  // const getPostlist = () => {
  //   const q = query(
  //     collection(db, "posts"),
  //     where("category", "==", "금융상품 후기")

  //     // orderBy("createdAt", "desc")
  //   );
  //   const array = [];
  //   onSnapshot(q, (snapshot) => {
  //     snapshot.docs.map((doc) =>
  //       array.push({
  //         id: doc.id,
  //         ...doc.data(),
  //       })
  //     );
  //     setBoards(array);
  //   });
  // };
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
  const result = posts?.filter((item) => item.category === categorytab);
  console.log(result);
  useEffect(() => {
    getPostList();
  }, []);
  // console.log(posts);
  return (
    <Wrapper>
      <Categories>
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

      <div>
        {categorytab === "금융상품 후기" && (
          <Content>
            <Title>관심있는 팁을 찾아보세요</Title>
            {postingModalOpen && (
              <PostingModal
                setPostingModalOpen={setPostingModalOpen}
                setBoards={setBoards}
                categorytab={categorytab}
              />
            )}
            <Boards>
              <Tipper boards={boards} result={result} />
            </Boards>

            {/* 작성창 제일 위  */}
            {/* 그 다음 글 카테고리 순서대로 쌓기 */}
          </Content>
        )}

        {categorytab === "팁과 노하우" && (
          <Content>
            <Title>관심있는 팁을 찾아보세요</Title>
            {postingModalOpen && (
              <PostingModal
                setPostingModalOpen={setPostingModalOpen}
                setBoards={setBoards}
                categorytab={categorytab}
              />
            )}
            <Boards>
              <Tipper boards={boards} result={result} />
            </Boards>

            {/* 작성창 제일 위  */}
            {/* 그 다음 글 카테고리 순서대로 쌓기 */}
          </Content>
        )}

        {categorytab === "공지사항" && (
          <Content>
            <Title>관심있는 팁을 찾아보세요</Title>
            {postingModalOpen && (
              <PostingModal
                setPostingModalOpen={setPostingModalOpen}
                setBoards={setBoards}
                categorytab={categorytab}
              />
            )}
            <Boards>
              <Tipper boards={boards} result={result} />
            </Boards>

            {/* 작성창 제일 위  */}
            {/* 그 다음 글 카테고리 순서대로 쌓기 */}
          </Content>
        )}
      </div>

      <UserWrapper>
        <User>
          <ProfileImg src={require("../../assets/profileimg.png")} />

          {username}
        </User>
        <PostButton onClick={OpenPostingModal}>글 작성하기</PostButton>
      </UserWrapper>
    </Wrapper>
  );
}

export default LoggedIn;
