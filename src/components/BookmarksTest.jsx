import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authService, db } from "../config/firebase";

const BookmarksTest = ({ item }) => {
  const [bookmark, setBookmark] = useState(false);
  // useeffect 에 bookmarkdetail 을 전역에서 사용하기 위한 usestate
  const [checkedItem, setCheckedItem] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // 북마크 -> addDoc 에 currentUser 에 isBookmark 추가
  const addBookmark = async () => {
    // 로그인 체크
    if (!authService.currentUser) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }

    await addDoc(collection(db, "bookmarks"), {
      userId: authService.currentUser?.uid,
      isBookmark: true,
    });
    setBookmark(true);
  };

  // 클릭한 item 의 fin_prdt_nm 과 dbservice 에 bookmarks 문서에 있는 fin_prdt_nm 가 같은지 필터
  const changeBookmarkDetail = (checkedItem) =>
    checkedItem.filter((item) => item.fin_prdt_nm === item.fin_prdt_nm);

  // 북마크한 내역 가져오기
  const getBookmark = () => {
    if (!authService.currentUser) {
      setBookmark(false);
      return;
    }

    const BookmarkClick = async () => {
      let selectedArray = [];
      const q = query(
        collection(db, "bookmarks"),
        where("userId", "==", authService.currentUser?.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const bookmarkObj = {
          id: doc.id,
          ...doc.data(),
        };
        selectedArray.push(bookmarkObj);
      });
      // selectedArray 에는 내가 북마크한 모든 상품들의 정보가 있음.
      // changeBookmarkDetail 의 함수에 selectedArray 를 인자로 넘겨 filter 를 거쳐 내가 클릭한 상품의 상품명 만 filteredBookmark 에 할당.
      const filteredBookmark = changeBookmarkDetail(selectedArray);
      // filteredBookmark 를 전역에서 사용할 수 있게 setCheckedItem 에 넘겨준다.
      setCheckedItem(filteredBookmark);
      // filteredBookmark 의 길이가 0 보다 크면 true or false
      setBookmark(filteredBookmark.length > 0 ? true : false);
    };
    BookmarkClick();
  };

  // 채워진 bookmark 클릭시 deleteDoc
  const isBookmarkChangeHandler = async () => {
    if (bookmark) {
      await deleteDoc(doc(db, "bookmarks", checkedItem[0].id));
      setBookmark(false);
    }
  };

  useEffect(() => {
    getBookmark();
  }, [bookmark, pathname]);

  return (
    <Bookmark>
      <BookmarkWrapper
        onClick={() => (bookmark ? isBookmarkChangeHandler() : addBookmark())}
      >
        {/* 찜 유무 */}
        {bookmark ? <BookmarkBtnFill /> : <BookmarkBtnLine />}
      </BookmarkWrapper>
    </Bookmark>
  );
};
export default BookmarksTest;

const Bookmark = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
`;
const BookmarkWrapper = styled.div`
  margin-top: 1rem;
  margin-right: 1.2rem;
`;
const BookmarkBtnFill = styled.div`
  border: 3px solid;
  width: 50px;
  height: 50px;
  font-size: 26px;
  background-color: black;
  cursor: pointer;

  border-radius: 1px solid black;
`;
const BookmarkBtnLine = styled.div`
  width: 50px;
  height: 50px;
  font-size: 26px;
  cursor: pointer;

  border-radius: 1px solid black;
`;
