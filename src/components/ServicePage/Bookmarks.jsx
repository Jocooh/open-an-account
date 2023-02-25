import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authService, db } from "../../config/firebase";

const Bookmarks = ({
  //상품명
  productName,
  //상품코드
  productCoName,
  //상품 아이디
  productId,
  //상품필드아이디
  productDocId,
  productCoCode,
  deposit,
}) => {
  // const bookMarkDetailInfo = deposit.map((i) => [
  //   i.join_member,
  //   i.join_way,
  //   i.mtrt_int,
  // ]);
  // console.log(bookMarkDetailInfo);

  const [bookmark, setBookmark] = useState(false);
  const currentUserUid = authService.currentUser?.uid;
  const navigate = useNavigate();

  // 북마크 추가 및 삭제
  const handleBookmarkChange = async () => {
    // 로그인 체크
    // newId: 해당하는 필드값을 내가 새로 만들어줌 (setDoc)
    const newId = currentUserUid + productId;
    if (!authService.currentUser) {
      if (
        window.confirm("로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?")
      ) {
        return navigate("/login");
      } else {
        return;
      }
    }

    // 북마크가 체크되어있지 않다면?
    if (!bookmark) {
      // 여기서 아까 지정해준 newId로 새로운 필드값을 정해준 다음 그 안에 속성들은 userId ~~~ 등등 애들이 들어갈 예정.
      await setDoc(doc(db, "bookmarks", newId), {
        userId: currentUserUid,
        productName,
        productCoName,
        productId,
        productDocId,
        productCoCode,
      });

      // true가 되면서 북마크 더이상 못하게 막기
      setBookmark(true);
    } else {
      // bookmark 면? 해당 newId 가 있으니 delete 이 실행
      const haveBookMark = doc(db, "bookmarks", newId);
      deleteDoc(haveBookMark);
      //다시 북마크가 저장가능한 상태
      setBookmark(false);
    }
  };

  // 내가 북마크한 내역 화면에 출력
  const getBookmark = async () => {
    const newId = currentUserUid + productId;
    const docRef = doc(db, "bookmarks", newId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setBookmark(true);
    }
  };

  useEffect(() => {
    getBookmark();
  }, []);

  return (
    <Bookmarked onClick={handleBookmarkChange}>
      {bookmark ? (
        <BookmarkedImg src={require("../../assets/bookmarked.png")} />
      ) : (
        <BookmarkedImg src={require("../../assets/bookmarked-empty.png")} />
      )}
    </Bookmarked>
  );
};
export default Bookmarks;

// const StyledBookmarkFill = styled(BsFillBookmarkFill)`
//   width: 20px;
//   height: 27px;
//   color: #6a24ff;
// `;
// const StyledBookmark = styled(BsBookmark)`
//   width: 20px;
//   height: 27px;
//   color: #6a24ff;
// `;

const Bookmarked = styled.div`
  width: 20px;
  height: 25px;
`;
const BookmarkedImg = styled.img`
  width: 100%;
`;
