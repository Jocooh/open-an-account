import {
  browserSessionPersistence,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authService } from "../../config/firebase";
import {
  SocialLoginForm,
  SocialLoginItem,
  SocialLoginList,
  SocialLoginLogo,
  SocialLoginLogoImg,
  SocialLoginTitle,
} from "./style";

export const SocialLogin = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();

    setPersistence(authService, browserSessionPersistence)
      .then(() => signInWithPopup(authService, provider))
      .then(() => {
        alert("환영합니다!");
        if (state) {
          navigate(state);
        } else {
          navigate("/", { replace: true });
        }
      });
  };

  return (
    <SocialLoginForm>
      <SocialLoginTitle>또는</SocialLoginTitle>
      <SocialLoginList>
        <SocialLoginItem
          onClick={() => {
            alert("아직은 안돼요~");
          }}
        >
          <SocialLoginLogo>
            <SocialLoginLogoImg
              src={require("../../assets/social-login-kakaotalk.png")}
            />
          </SocialLoginLogo>
        </SocialLoginItem>
        <SocialLoginItem
          onClick={() => {
            alert("아직은 안돼요~");
          }}
        >
          <SocialLoginLogo>
            <SocialLoginLogoImg
              src={require("../../assets/social-login-naver.png")}
            />
          </SocialLoginLogo>
        </SocialLoginItem>
        <SocialLoginItem onClick={handleGoogleLogin}>
          <SocialLoginLogo>
            <SocialLoginLogoImg
              src={require("../../assets/social-login-google.png")}
            />
          </SocialLoginLogo>
        </SocialLoginItem>
      </SocialLoginList>
    </SocialLoginForm>
  );
};
