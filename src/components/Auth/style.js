import styled from "styled-components";

// auth background
export const AuthBackground = styled.div`
  /* width: 100vw; */
  height: calc(100vh - 11.6rem);

  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  /* e3e3e3 */
`;

// auth wrapper
export const AuthWrapper = styled.div`
  width: 560px;
  height: 749px;
  background-color: #fff;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 1px solid black; */
`;

// auth logo
export const AuthLogoWrapper = styled.div`
  width: 560px;
  height: 87px;

  display: flex;
  justify-content: center;

  margin-bottom: -20px;
`;
export const AuthLogo = styled.div`
  width: 215px;
  height: 67px;
  color: #6a24ff;
`;
export const AuthLogoImg = styled.img`
  width: 100%;
`;

// auth title - log in
export const LoginTitleTextWrapper = styled.div`
  width: 560px;
  height: 94px;

  margin: 30px 0;
  text-align: center;
  justify-content: center;
`;
export const LoginTitleWrapper = styled.div`
  width: 560px;
  height: 61px;

  margin-bottom: -5px; // css 안먹어서 임시로.
`;
export const LoginTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #000000;
`;
export const AuthTextWrapper = styled.div`
  width: 560px;
  height: 33px;
`;
export const AuthText = styled.span`
  font-size: 18px;
  font-weight: medium;
  color: #505050;
`;
export const LinkText = styled.span`
  color: #6a24ff;
  font-size: 18px;
  font-weight: medium;

  /* margin: 1rem 0.5rem 2rem; */
`;
// auth title - sign up
export const SignUpTitleTextWrapper = styled.div`
  width: 560px;
  height: 119px;

  margin: 30px 0;
  text-align: center;
  justify-content: center;
`;
export const SignnUpTitleWrapper = styled.div`
  width: 560px;
  height: 86px;

  text-align: center;
  justify-content: center;

  margin-bottom: -30px; // css 안먹어서 임시로.
`;
export const SignUpTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #000000;
`;

// auth form
export const AuthLoginForm = styled.div`
  width: 420px;
  height: 338px;
`;
export const AuthSignUpForm = styled.div`
  width: 420px;
  height: 594px;
`;
export const AuthInputWrapper = styled.div`
  width: 420px;
  height: 119px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap; // css 안먹어서 임시로 - 이거 하니까 왜 옆으로 안넘어가지
  /* box-sizing: border-box; */
`;
export const AuthLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #000000;

  margin-bottom: 10px; // css 안먹어서 임시로
`;
export const AuthInput = styled.input`
  width: 420px;
  height: 54px;
  font-size: 15px;
  /* font-weight:  */
  color: #a3a3a3;
  border: 1px solid #a3a3a3;
  border-radius: 10px;

  text-indent: 25px;

  &:focus {
    outline: none;
  }
`;
export const AuthButton = styled.button`
  width: 420px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #6a24ff;
  border: none;
  border-radius: 10px;

  cursor: pointer;

  margin-top: 15px; // css 안먹어서 임시로

  :disabled {
    background-color: #dadada;
    color: #fff;
  }
`;
export const AuthInputValidationWrapper = styled.div`
  width: 420px;
  height: 35px;
  font-size: 14px;
  color: #ff0000;

  margin-top: 5px; // 인풋창이 줄어들음.....................
`;
export const AuthInputValidationText = styled.p`
  .message {
    &.success {
      color: green;
    }
    &.error {
      color: #ff0000;
    }
  }
`;

export const BoundaryLineWrapper = styled.div`
  width: 414px;
  height: 20px;
  margin: 10px 0 30px 0; // css 안먹어서 임시로
`;
export const BoundaryLine = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #505050;

  display: block;
  text-align: center;
  position: relative;

  &::before {
    width: 179px;
    height: 1px;
    background-color: #ddd;
    position: absolute;
    left: 0;
    top: 8px;
    content: "";
  }

  &::after {
    width: 179px;
    height: 1px;
    background-color: #ddd;
    position: absolute;
    right: 0;
    top: 8px;
    content: "";
  }
`;

// social login form
export const SocialLoginForm = styled.div`
  width: 420px;

  /* margin: 20px 0; */
`;
// export const SocialLoginList = styled.div`
//   width: 419px;
//   /* height: 60px; */
// `;

export const SocialLoginItem = styled.div`
  width: 419px;
  height: 60px;

  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
`;

export const GoogleImg = styled.img`
  width: 100%;
`;

// export const SocialLoginTitleWrapper = styled.div`
//   width: 414px;
//   height: 20px;
// `;

// export const NaverLoginItem = styled.li`
//   width: 4.5rem;
//   height: 4.5rem;
//   border-radius: 50%;

//   /* margin: 1rem 1.3rem; */
//   overflow: hidden;
//   cursor: pointer;
// `;

// export const SocialLoginLogo = styled.div`
//   /* display: block; */
// `;
// export const SocialLoginLogoImg = styled.img`
//   /* background-size: cover; */

//   max-width: 100%; // 이걸 하니까 맞춰지네???
// `;
