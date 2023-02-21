import styled from "styled-components";

// auth background
export const AuthBackground = styled.div`
  width: 100vw;
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

  border: 1px solid black;
`;

// auth logo
export const AuthLogoWrapper = styled.div`
  width: 560px;
  height: 87px;

  text-align: center;
  justify-content: center;
`;
export const AuthLogo = styled.div`
  font-size: 66px;
  font-weight: 600;
  color: #6a24ff;
`;
// export const AuthLogoImg = styled.img`
// width: ;
// `

// auth title
export const AuthTitleTextWrapper = styled.div`
  width: 560px;
  height: 94px;

  text-align: center;
  justify-content: center;
`;
export const AuthTitleWrapper = styled.div`
  width: 560px;
  height: 61px;
`;
export const AuthTitle = styled.div`
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
  flex-wrap: wrap;
  /* box-sizing: border-box; */
`;
export const AuthLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;
export const AuthInput = styled.input`
  width: 420px;
  height: 54px;
  font-size: 15px;
  /* font-weight:  */
  color: #a3a3a3;
  border: 1px solid #a3a3a3;
  border-radius: 10px;

  /* &:focus {
    outline: 1px solid #6a24ff;
  } */
  &:focus {
    outline: none;
  }
`;
export const AuthInputValidationWrapper = styled.div`
  width: 420px;
  height: 35px;
  font-size: 14px;
  color: #ff0000;
`;
export const AuthInputValidationText = styled.div`
  .message {
    &.success {
      color: green;
    }
    &.error {
      color: #ff2727;
    }
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

  :disabled {
    background-color: #dadada;
    color: #fff;
  }
`;

export const BoundaryLineWrapper = styled.div`
  width: 414px;
  height: 20px;
  margin: 40px 0;
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
