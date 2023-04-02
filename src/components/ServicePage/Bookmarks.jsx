import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authService, db } from "../../config/firebase";

const Bookmarks = ({
  baseList, // base list
  isMyPage, // 마이페이지 내 북마크 수정할 경우 true 를 받기 위함
  isModal, // 서비스페이지 - 모달 내 북마크 수정할 경우 true 를 받기 위함
  selectedProductId, // 서비스페이지 - 모달일 경우 doc id 가 달라 다르게 받아야 함
  productTypes, // 예적금 필터링
}) => {
  const [bookmark, setBookmark] = useState(false);
  const currentUserUid = authService.currentUser?.uid;
  const navigate = useNavigate();

  // 북마크 추가 및 삭제
  const handleBookmarkChange = async () => {
    // 로그인 체크
    if (!authService.currentUser) {
      if (
        window.confirm("로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?")
      ) {
        return navigate("/login");
      } else {
        return;
      }
    }

    const newId = isMyPage
      ? `${currentUserUid}${baseList.docId}`
      : isModal
      ? `${currentUserUid}${selectedProductId}`
      : `${currentUserUid}${baseList.id}`;

    // 북마크가 체크되어있지 않다면?
    if (!bookmark) {
      await setDoc(doc(db, "bookmarks", newId), {
        // user id
        userId: currentUserUid,
        // firebase field id
        docId: baseList.id || selectedProductId || baseList.docId,
        // base list
        fin_prdt_nm: baseList.fin_prdt_nm.replace(",", " "), // 상품 명 - 상품명에 쉼표가 포함된 경우 제거 위해
        fin_prdt_cd: baseList.fin_prdt_cd, // 상품 코드
        kor_co_nm: baseList.kor_co_nm, // 상품 회사 명
        join_way: baseList.join_way, // 가입 방법
        max_limit: baseList.max_limit, // 최고 한도
        join_member: baseList.join_member, // 가입 대상
        etc_note: baseList.etc_note, // 기타 유의사항
        fin_co_no: baseList.fin_co_no, // 상품 회사 코드
        productTypes: productTypes, // 예적금 구분 타입
      });

      // true가 되면서 북마크 더이상 못하게 막기
      setBookmark(true);
    } else {
      // bookmark 면? 해당 newId 존재 -> delete 실행
      const haveBookMark = doc(db, "bookmarks", newId);
      deleteDoc(haveBookMark);
      // 북마크가 저장 가능한 상태
      setBookmark(false);
    }
  };

  // 내가 북마크한 내역 화면에 출력
  const getBookmarks = async () => {
    const newId = isMyPage
      ? `${currentUserUid}${baseList.docId}`
      : isModal
      ? `${currentUserUid}${selectedProductId}`
      : `${currentUserUid}${baseList.id}`;
    const docRef = doc(db, "bookmarks", newId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setBookmark(true);
    }
  };

  // 로딩, 에러 상태 추가
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    getBookmarks()
      .catch((e) => setError("에러 발생"))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <BookmarkedWrap>
      <Bookmarked onClick={handleBookmarkChange}>
        {bookmark ? (
          <BookmarkedImg src={require("../../assets/bookmarked.png")} />
        ) : (
          <BookmarkedImg src={require("../../assets/bookmarked-empty.png")} />
        )}
      </Bookmarked>
    </BookmarkedWrap>
  );
};
export default Bookmarks;

export const BookmarkedWrap = styled.div`
  display: flex;
`;

export const BookmarkedImg = styled.img`
  width: 20px;
`;

export const Bookmarked = styled.div`
  width: 20px;
  height: 25px;
  cursor: pointer;
`;

export const NoBookmark = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin-top: 100px;
  width: 990px;
  @media screen and (max-width: 1200px) {
    width: 700px;
  }
  @media screen and (max-width: 1100px) {
    width: 600px;
  }
  @media screen and (max-width: 1000px) {
    width: 500px;
  }
`;
