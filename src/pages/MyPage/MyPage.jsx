import React, { useEffect, useState } from "react";
import ChangePassword from "../../components/Mypage/ChangePassword";
import EnrollNumber from "../../components/Mypage/EnrollNumber";
import ChangeNickname from "../../components/Mypage/ChangeNickname";
import {
  setDoc,
  doc,
  collection,
  getDoc,
  onSnapshot,
  query,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  updatePassword,
  updateProfile,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import { db, firebaseConfig } from "../../config/firebase";
// import { useNavigate } from "react-router-dom";

import { RiLogoutBoxLine } from "react-icons/ri";
import {
  MyPageWrapper,
  LeftBox,
  StyledImage,
  RightBox,
  UserNicknameDiv,
  UserText,
  UserContentDiv,
  ContentDiv,
  UserAccountDiv,
  UserHistoryDiv,
  RightWrapper,
  LogOutBtn,
  StyledIcons,
  HistoryCategory,
  CategoryImg,
  SaveBtn,
} from "./style";
import BookmarkPrdtList from "../../components/Mypage/BookmarkPrdtList";
import { authService } from "../../config/firebase";

import { useNavigate } from "react-router-dom";

function MyPage() {
  // 세션스토리지에서 로그인했을 때 저장된 current user 가져오기
  const userSession = sessionStorage.getItem(
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
  );
  const currentUser = JSON.parse(userSession ?? "");
  const [tab, setTab] = useState(0);

  //마이페이지 기능구현 필요 state
  const user = authService.currentUser;
  const [userEmail, setUserEmail] = useState(currentUser.email);
  const [btn, setBtn] = useState(false);
  const [btnValidation, setBtnValidation] = useState(true);
  //ChangePassword.jsx
  const [userPassword, setUserPassword] = useState(""); //현재 유저 패스워드
  const [editUserPassword, setEditUserPassword] = useState(""); //고치고 싶은 비밀번호

  //-> ChangeNickName.jsx
  //newNickname: 유저의 바꿀 닉네임 ,  name: 왼쪽박스 유저 네임
  const [newNickName, setNewNickName] = useState(currentUser?.displayName);
  const [name, setName] = useState(newNickName);
  const [isNickName, setIsNickName] = useState(false);

  //EnrollNum.jsx
  //PhoneNum: 유저가 인풋에 본인의 휴대폰번호를 적을 경우 add될 state
  const [phoneNum, setPhoneNum] = useState("");
  const [phoneList, setPhoneList] = useState(""); //firebase에 저장되어있는 키값

  //닉네임 업데이트 함수
  const clickUserUpdate = async (e) => {
    e.preventDefault();
    if (window.confirm("개인정보를 수정 하시겠습니까?")) {
      await updateProfile(user, {
        displayName: newNickName,
      })
        .then(
          alert("개인정보 수정 완료"),
          setName(newNickName),
          setEditUserPassword("")
        )
        .catch((error) => {
          console.log(error);
        });
      await PasswordUpdateHanlder().then(console.log("비밀번호 변경확인"));
    } else {
      alert("개인정보 수정 취소");
    }
  };
  //비밀번호 바꾸기 함수
  const PasswordUpdateHanlder = async () => {
    await updatePassword(user, userPassword)
      .then(() => {
        console.log("password변경 성공");
      })
      .catch((error) => {
        console.log(error);
      });
    setUserPassword("");
  };
  //핸드폰은 user라는 이름으로 컬렉션에 들어갑니다.  => 계속 진행 중이니까 주석처리중
  // const addPhoneNumber = async () => {
  //   const newNumber = currentUser.uid;
  //   await setDoc(doc(db, "users", newNumber), {
  //     userId: currentUser.uid,
  //     phoneNumber: phoneNum,
  //   });
  // };

  // const getPhoneNumber = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   const phoneLists = [];
  //   querySnapshot.forEach((doc) => {
  //     const newProduct = {
  //       id: doc.id,
  //       ...doc.data(),
  //     };
  //     phoneLists.push(newProduct);
  //     setPhoneNum(phoneList[0]?.phoneNumber);
  //   });
  // };
  const navigate = useNavigate();
  const onLogoutClick = () => {
    authService.signOut().then(() => {
      sessionStorage.clear(); // ?
      alert("로그아웃 되었습니다.");
      navigate("/", { replace: true });
    });
  };
  return (
    <>
      {/* <div style={{ backgroundColor: "#fff", height: "40px" }}></div> */}
      <MyPageWrapper className="제일 큰 박스">
        {/* ###########  Left    ################# */}
        <LeftBox className="왼쪽 박스">
          {/* 유저 닉네임 확인 */}
          <UserNicknameDiv>
            <StyledImage
              src={require("../../assets/defaultImage.png")}
              alt="유저사진"
            ></StyledImage>
            <h3 style={{ fontSize: "25px" }}>{name}</h3>
          </UserNicknameDiv>
          {/* 유저 이름,id,연락처 부분 */}
          <UserContentDiv>
            {/* 로그인 ID */}
            <ContentDiv>
              <div>
                <p>로그인 ID</p>
                <p style={{ color: "#aaa" }}>{currentUser?.email}</p>
              </div>
              {/* 로그아웃 버튼 */}
              <LogOutBtn onClick={onLogoutClick}>
                <RiLogoutBoxLine />
                로그아웃
              </LogOutBtn>
            </ContentDiv>
            <div>
              <p>연락처</p>
              <p style={{ color: "#aaa" }}>
                {phoneNum !== "" ? <>{phoneNum}</> : "등록된 번호가 없어요"}
              </p>
            </div>
          </UserContentDiv>
          {/* 유저 계정 변경 부분 (디폴트부분) */}
          <UserAccountDiv
            style={tab === 0 ? { backgroundColor: "#e6e8ea" } : null}
          >
            <CategoryImg>
              <StyledIcons
                src={require("../../assets/lock.png")}
                alt="자물쇠"
              />
              <button
                onClick={() => {
                  setTab(0);
                }}
                style={{ fontSize: "20px" }}
              >
                계정 관리
              </button>
            </CategoryImg>
            <p>〉</p>
          </UserAccountDiv>
          {/* 히스토리 */}
          <UserHistoryDiv>
            <UserText
              style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px" }}
            >
              히스토리
            </UserText>
            <HistoryCategory
              style={tab === 1 ? { backgroundColor: "#e6e8ea" } : null}
            >
              <CategoryImg>
                <StyledIcons src={require("../../assets/diamond.png")} />
                <button
                  onClick={() => {
                    setTab(1);
                  }}
                  style={{ fontSize: "18px" }}
                >
                  찜한 상품
                </button>
              </CategoryImg>
              <p>〉</p>
            </HistoryCategory>
            <HistoryCategory
              style={tab === 2 ? { backgroundColor: "#e6e8ea" } : null}
            >
              <CategoryImg>
                <StyledIcons src={require("../../assets/paper.png")} />
                <button
                  onClick={() => {
                    setTab(2);
                  }}
                  style={{ fontSize: "18px" }}
                >
                  내가 쓴 글
                </button>
              </CategoryImg>
              <p>〉</p>
            </HistoryCategory>
            <HistoryCategory
              style={tab === 3 ? { backgroundColor: "#e6e8ea" } : null}
            >
              <CategoryImg>
                <StyledIcons src={require("../../assets/lists.png")} />
                <button
                  onClick={() => {
                    setTab(3);
                  }}
                  style={{ fontSize: "18px" }}
                >
                  스크랩한 글
                </button>
              </CategoryImg>
              <p>〉</p>
            </HistoryCategory>
          </UserHistoryDiv>
        </LeftBox>

        <RightBox className="오른쪽 박스">
          {tab === 0 && (
            <RightWrapper className="첫번째 탭 박스">
              <form
                onSubmit={(e) => {
                  clickUserUpdate(e);
                }}
              >
                <ChangePassword
                  editUserPassword={editUserPassword}
                  setEditUserPassword={setEditUserPassword}
                  currentUser={currentUser}
                  userPassword={userPassword}
                  setUserPassword={setUserPassword}
                  setBtnValidation={setBtnValidation}
                />
                <EnrollNumber
                  setPhoneNum={setPhoneNum}
                  phoneNum={phoneNum}
                  currentUser={currentUser}
                  phoneList={phoneList}
                />
                <ChangeNickname
                  newNickName={newNickName}
                  setNewNickName={setNewNickName}
                  setIsNickName={setIsNickName}
                  isNickName={isNickName}
                  setBtnValidation={setBtnValidation}
                  name={name}
                />

                <SaveBtn
                  disabled={btnValidation}
                  style={
                    btnValidation === true ? { backgroundColor: "#aaa" } : null
                  }
                >
                  변경사항 저장
                </SaveBtn>
              </form>
            </RightWrapper>
          )}

          {tab === 1 ? <BookmarkPrdtList currentUser={currentUser} /> : null}
          {tab === 2 && <div>comming soon ...</div>}
          {tab === 3 && <div>comming soon ...</div>}
        </RightBox>
      </MyPageWrapper>
    </>
  );
}

export default MyPage;

// 잊지마라 조성아 여기 넣어야댄다. 네..
/*  // console.log(nickName);
  // 원준 작업.
  // 상단 currentUser 가져오면서 예외처리 되지만 alert, navigate 를 위해 추가. -- 현재 위 코드로 먼저 걸러주기 때문에 실행되지 않음. 더 알아볼 것.
  // useEffect(() => {
  //   if (!authService.currentUser) {
  //     alert("마이페이지는 로그인 후 접근이 가능합니다.");
  //     navigate("/login");
  //     return;
  //   }
  // }, []); */
