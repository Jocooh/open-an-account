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
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { authService, db } from "../config/firebase";

const Bookmarks = ({
  //상품명
  productName,
  //상품코드
  productCoName,
  //상품 아이디
  productId,
  //상품필드아이디
  productDocId,
}) => {
  const [bookmark, setBookmark] = useState(false);
  const currentUserUid = authService.currentUser?.uid;
  const navigate = useNavigate();

  // 1. addBookmark(addDoc) -> currentUser 에 isBookmark 추가

  const addBookmark = async () => {
    // 로그인 체크
    // newId: 해당하는 필드값을 내가 새로 만들어줌 (setDoc)
    const newId = currentUserUid + productId;
    if (!authService.currentUser) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }

    // 북마크가 체크되어있지 않다면?
    if (!bookmark) {
      // 여기서 아까 지정해준 newId로 새로운 필드값을 정해준 다음 그 안에 속성들은 54~59줄이 들어갈 예정
      await setDoc(doc(db, "bookmarks", newId), {
        userId: currentUserUid,
        productName,
        productCoName,
        productId,
        productDocId,
        // isbookmark: true,
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

  // 2. 내가 북마크한 내역 불러오기 - 원준 작업 중 - (질문🔥 원준님 이거는 마이페이지에서 해당하는 것일까요?!:))
  const [myBookmarkProducts, setMyBookmarkProducs] = useState([]);

  const getMyBookmarkProducts = async () => {
    const querySnapshot = await getDocs(
      collection(db, "bookmarks"),
      where("userId", "==", authService.currentUser?.uid)
    );
    const myBookmarkProduct = [];

    querySnapshot.forEach((doc) => {
      const newBookmarkProduct = {
        documentId: doc.id,
        ...doc.data(),
      };

      myBookmarkProduct.push(newBookmarkProduct);
    });
    setMyBookmarkProducs(myBookmarkProduct);
  };

  console.log("myBookmarkProducts", myBookmarkProducts);

  // const myBookmarkProductsContents = () => {
  //   const a = myBookmarkProducts.map((i) =>
  //     i.productId === productId ? setBookmark(true) : console.log("들어왔니")
  //   );
  // };

  // 내가 북마크한 내역 화면에 출력
  const getBookmark = async () => {
    const newId = currentUserUid + productId;
    const docRef = doc(db, "bookmarks", newId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setBookmark(true);
    }
  };

  //성아-유저의 id가 변경되거나 하면 getMybookmarkProducts()를 다시 실행,, 해당하는 user의 북마크를 가져올 예정
  useEffect(() => {
    getMyBookmarkProducts();
    getBookmark();
  }, []);

  // console.log("myBookmarkProducts : 내가 북마크 한 상품들", myBookmarkProducts);

  // // 3. 채워진 bookmark 클릭시 deleteDoc
  // const isBookmarkChangeHandler = async () => {
  //   if (bookmark) {
  //     await deleteDoc(doc(db, 'bookmarks')); // 선택한 북마크 문서의 아이디??? *** 여기가 문제 myBookmarkProducts.documentId ???

  //     setBookmark(false);
  //   }
  // };

  return (
    //북마크 저장함수 실행
    <div onClick={addBookmark}>
      {/* 찜 유무 */}
      {bookmark ? <BsFillBookmarkFill /> : <BsBookmark />}
    </div>
  );
};
export default Bookmarks;

// const Bookmark = styled.div`
//   align-items: center;
//   display: flex;
//   flex: 1 0 auto;
//   justify-content: flex-end;
// `;
// const BookmarkWrapper = styled.div`
//   margin-top: 1rem;
//   margin-right: 1.2rem;
// `;
// const BookmarkBtnFill = styled.div`
//   border: 3px solid;
//   width: 50px;
//   height: 50px;
//   font-size: 26px;
//   background-color: black;
//   cursor: pointer;

//   border-radius: 1px solid black;
// `;
// const BookmarkBtnLine = styled.div`
//   width: 50px;
//   height: 50px;
//   font-size: 26px;
//   cursor: pointer;

//   border-radius: 1px solid black;
// `;

// // 클릭한 item.fin_prdt_nm 과 컬렉션 bookmarks 문서에 있는 bookmarkProducts 와 같은 친구들만 걸러서 changelikedetail 할당
// const changeBookmarkDetail = (checkedItem) =>
//   checkedItem.filter((item) => item.bookmarkPrdt === bookmarkPrdt);
// // console.log(bookmarkPrdt);
// // 2. 북마크한 내역 가져오기
// const getBookmark = () => {
//   if (!authService.currentUser) {
//     setBookmark(false);
//     return;
//   }

//   const BookmarkClick = async () => {
//     let selectedArray = [];
//     const q = query(
//       collection(db, "bookmarks"),
//       where("userId", "==", authService.currentUser?.uid)
//     );
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       const bookmarkObj = {
//         id: doc.id,
//         ...doc.data(),
//       };
//       selectedArray.push(bookmarkObj);
//     });
//     // selectedArray 에는 내가 북마크한 모든 상품들의 정보가 있음.
//     // changeBookmarkDetail 의 함수에 selectedArray 를 인자로 넘겨 filter 를 거쳐 내가 클릭한 상품의 상품명 만 filteredBookmark 에 할당.
//     const filteredBookmark = changeBookmarkDetail(selectedArray);
//     // filteredBookmark 를 전역에서 사용할 수 있게 setCheckedItem 에 넘겨준다.
//     setCheckedItem(filteredBookmark);
//     // filteredBookmark 의 길이가 0 보다 크면 true or false
//     setBookmark(filteredBookmark.length > 0 ? true : false);
//   };
//   BookmarkClick();
// };
