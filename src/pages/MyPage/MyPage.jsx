import React, { useState } from "react";
import ChangePassword from "../../components/Mypage/UserAccount/ChangePassword";
// import EnrollNumber from "../../components/Mypage/UserAccount/EnrollNumber";
import ChangeNickname from "../../components/Mypage/UserAccount/ChangeNickname";

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
  ProductTypesBtn,
} from "./style";
import { updatePassword, updateProfile } from "firebase/auth";
import { firebaseConfig } from "../../config/firebase";
import { RiLogoutBoxLine } from "react-icons/ri";
import BookmarkPrdtList from "../../components/Mypage/BookmarkPrdtList";
import { authService } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import UserWriteList from "../../components/Mypage/UserHistory/UserWriteList";
import UserLikeList from "../../components/Mypage/UserHistory/UserLikeList";

function MyPage() {
  const navigate = useNavigate();
  // 세션스토리지에서 로그인했을 때 저장된 current user 가져오기
  const userSession = sessionStorage.getItem(
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
  );
  const currentUser = JSON.parse(userSession ?? "");

  const onLogoutClick = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      return authService.signOut().then(() => {
        sessionStorage.clear(); // ?
        alert("로그아웃 되었습니다.");
        navigate("/", { replace: true });
      });
    } else {
      return;
    }
  };

  const [tab, setTab] = useState(0);

  //마이페이지 기능구현 필요 state
  const user = authService.currentUser;

  const [btnValidation, setBtnValidation] = useState(true);

  const [productTypes, setProductTypes] = useState(1); //예금 적금

  //ChangePassword.jsx
  const [userPassword, setUserPassword] = useState(""); //현재 유저 패스워드
  const [editUserPassword, setEditUserPassword] = useState(""); //고치고 싶은 비밀번호
  const [inputValidationConfirm, setInputValidationConfirm] = useState(true);
  const [password, setPassword] = useState("");

  //ChangeNickName.jsx
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
    if (password !== userPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (window.confirm("개인정보를 수정 하시겠습니까?")) {
      await updateProfile(user, {
        displayName: newNickName,
      });
      await PasswordUpdateHanlder()
        .then(
          alert("개인정보 수정 완료"),
          setName(newNickName),
          setInputValidationConfirm(true),
          setBtnValidation(true)
        )
        .catch((error) => {
          alert(console.log(error));
        });
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

    setPassword("");
    setUserPassword("");
    setEditUserPassword("");
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
            {/* <div>
              <p>연락처</p>
              <p style={{ color: "#aaa" }}>
                {phoneNum !== "" ? <>{phoneNum}</> : "등록된 번호가 없어요"}
              </p>
            </div> */}
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
            {/* <HistoryCategory
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
            </HistoryCategory> */}
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
                  currentUser={currentUser} //현재의 유저 값
                  setBtnValidation={setBtnValidation} // 버튼 활성화
                  password={password} //새 비밀번호
                  setPassword={setPassword} //새 비밀번호
                  editUserPassword={editUserPassword} //현재 비밀번호
                  setEditUserPassword={setEditUserPassword} //현재 비밀번호
                  userPassword={userPassword} //새 비밀번호 확인
                  setUserPassword={setUserPassword} //새 비밀번호 확인
                  inputValidationConfirm={inputValidationConfirm} // 3번째 input 활성화
                  setInputValidationConfirm={setInputValidationConfirm} // 3번째 input 활성화
                />

                <ChangeNickname
                  name={name}
                  isNickName={isNickName}
                  newNickName={newNickName}
                  setIsNickName={setIsNickName}
                  setNewNickName={setNewNickName}
                  setBtnValidation={setBtnValidation}
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

          {tab === 1 && (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <ProductTypesBtn
                  style={
                    productTypes === 1
                      ? { backgroundColor: "#6A24FF", color: "white" }
                      : { backgroundColor: "white", color: "black" }
                  }
                  onClick={() => {
                    setProductTypes(1);
                  }}
                >
                  정기예금
                </ProductTypesBtn>
                <ProductTypesBtn
                  style={
                    productTypes === 2
                      ? { backgroundColor: "#6A24FF", color: "white" }
                      : { backgroundColor: "white", color: "black" }
                  }
                  onClick={() => {
                    setProductTypes(2);
                  }}
                >
                  정기적금
                </ProductTypesBtn>
              </div>
              <BookmarkPrdtList
                currentUser={currentUser}
                productTypes={productTypes}
              />
            </div>
          )}
          {tab === 2 && (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <ProductTypesBtn
                  style={
                    productTypes === 1
                      ? { backgroundColor: "#6A24FF", color: "white" }
                      : { backgroundColor: "white", color: "black" }
                  }
                  onClick={() => {
                    setProductTypes(1);
                  }}
                >
                  좋아한 팁
                </ProductTypesBtn>
                <ProductTypesBtn
                  style={
                    productTypes === 2
                      ? { backgroundColor: "#6A24FF", color: "white" }
                      : { backgroundColor: "white", color: "black" }
                  }
                  onClick={() => {
                    setProductTypes(2);
                  }}
                >
                  작성한 팁
                </ProductTypesBtn>
              </div>
              {productTypes === 1 ? (
                <UserLikeList currentUser={user} />
              ) : (
                <UserWriteList currentUser={currentUser} />
              )}
            </div>
          )}
        </RightBox>
      </MyPageWrapper>
    </>
  );
}

export default MyPage;
