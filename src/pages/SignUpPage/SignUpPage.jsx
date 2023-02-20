import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  updateProfile,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/Auth/AuthForm";
import { authService } from "../../config/firebase";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const nicknameRef = useRef(null);

  // 이메일, 패스워드 유효성 값 초기화
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  // 이메일, 패스워드
  // 이메일 입력
  const changeEmail = (event) => {
    setEmail(event.target.value);
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (emailRegex.test(event.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  // 비밀번호 입력
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  // 비밀번호 재입력
  const changeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  // 닉네임 입력
  const changeNickname = (event) => {
    setNickname(event.target.value);
  };

  // 이메일, 비밀번호, 닉네임 유효성 검사
  const checkValidation = () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    const checkEmailValidation = email.match(emailRegex);
    const checkPasswordValidation = password.match(passwordRegex);

    if (!email || !checkEmailValidation) {
      if (!email) {
        alert("이메일을 입력해주세요.");
        emailRef?.current?.focus();
        return false;
      } else {
        alert("이메일 형식을 올바르게 입력해주세요.");
        emailRef?.current?.focus();
        return false;
      }
    }

    if (!password || !checkPasswordValidation) {
      if (!password) {
        alert("비밀번호를 입력해주세요.");
        passwordRef?.current?.focus();
        return false;
      } else {
        alert(
          "비밀번호는 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다."
        );
        passwordRef?.current?.focus();
        setPassword("");
        return false;
      }
    }
    if (!confirmPassword) {
      alert("비밀번호를 다시 한번 더 입력해주세요.");
      confirmPasswordRef?.current?.focus();
      return false;
    }
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      confirmPasswordRef?.current?.focus();
      // setPassword("");
      setConfirmPassword("");
      return false;
    }

    if (!nickname || nickname.length < 2 || nickname.length > 6) {
      if (!nickname) {
        alert("닉네임을 입력해주세요.");
        nicknameRef?.current?.focus();
        return false;
      } else {
        alert("닉네임은 2글자 이상, 6글자 미만으로 입력해주세요.");
        nicknameRef?.current?.focus();
        return false;
      }
    }

    return true;
  };

  // // 비밀번호 일치 여부
  // const checkValidationForSignUp = () => {
  //   if (!confirmPassword) {
  //     alert("비밀번호를 다시 한번 더 입력해주세요.");
  //     return false;
  //   }
  //   if (password !== confirmPassword) {
  //     alert("비밀번호가 일치하지 않습니다.");
  //     confirmPasswordRef?.current?.focus();
  //     // setPassword("");
  //     setConfirmPassword("");
  //     return false;
  //   }
  //   return true;
  // };

  // 회원가입
  const submitSignUp = () => {
    // 이메일, 비밀번호, 닉네임 유효성 검사 확인
    if (!checkValidation()) return;

    // // 비밀번호 일치여부 확인 -> 닉네임 추가로 변수 없애고 상단으로 이동
    // if (!checkValidationForSignUp()) return;

    // setPersistence => 세션스토리지에 유저 정보 저장
    setPersistence(authService, browserSessionPersistence)
      .then(() => createUserWithEmailAndPassword(authService, email, password))
      .then(() => {
        if (authService.currentUser) {
          updateProfile(authService?.currentUser, {
            displayName: nickname,
          });
        }
      })
      .then(() => {
        alert("회원가입이 완료 되었습니다.");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setNickname("");
        navigate("/");
      })
      .catch((err) => {
        if (err.message.includes("already-in-use")) {
          alert("이미 가입된 계정입니다.");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setNickname("");
          navigate("/login");
        }
      });
  };

  return (
    <AuthForm
      title="회원 가입 정보 입력"
      text="회원이신가요?"
      linkText="로그인하기"
      email={email}
      changeEmail={changeEmail}
      emailRef={emailRef}
      password={password}
      changePassword={changePassword}
      passwordRef={passwordRef}
      confirmPassword={confirmPassword}
      changeConfirmPassword={changeConfirmPassword}
      confirmPasswordRef={confirmPasswordRef}
      nickname={nickname}
      changeNickname={changeNickname}
      nicknameRef={nicknameRef}
      submitSignUp={submitSignUp}
    />
  );
};

export default SignUpPage;
