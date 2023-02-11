import styled from "styled-components";

// auth background
export const AuthBackground = styled.div`
  width: 100vw;
  height: calc(100vh - 11.6rem);

  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;

  background-color: #f7f9fa;
  /* e3e3e3 */
`;

// auth wrapper
export const AuthWrapper = styled.div`
  width: 28rem;
  /* min-width: 400px; */
  background-color: #fff;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

// auth logo, title
export const AuthLogo = styled.div`
  width: 8rem;
  margin: 1.5rem 0;
`;
export const AuthLogoImg = styled.img`
  width: 100%;
`;
export const AuthTitle = styled.div`
  width: 22rem;
  font-size: 1.7rem;
  font-weight: bold;

  margin: 0.5rem;
  text-align: center;
`;
export const AuthText = styled.span`
  color: #656666;
  font-size: 0.95rem;
  font-weight: bold;

  margin: 1rem 0.5rem 2rem;
`;
export const LinkText = styled.span`
  color: #6a24ff;
  font-size: 0.95rem;
  font-weight: bold;

  margin: 1rem 0.5rem 2rem;
`;
// auth form
export const DefaultLoginForm = styled.div``;
export const AuthInputWrapper = styled.div`
  width: 22rem;

  display: flex;
  flex-direction: column;
`;
export const AuthLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;
export const AuthInput = styled.input`
  height: 1.8rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: 3px solid #6a24ff;
  border-radius: 0.2rem;

  margin: 0.4rem 0 0.8rem;
  padding: 0.4rem;
  &:focus {
    outline: 3px solid #6a24ff;
  }
`;
export const AuthButton = styled.button`
  width: 22rem;
  height: 3rem;
  color: white;
  background-color: #6a24ff;
  border: none;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 0.2rem;
  cursor: pointer;

  margin: 0.7rem 0;
`;

// social login form
// export const SocialLoginTitle = styled.span`
//   font-size: 0.8rem;
//   font-weight: bold;

//   display: block;
//   text-align: center;
//   /* color: #656666; */
//   margin: 0.5rem 0;
//   position: relative;

//   &::before {
//     width: 130px;
//     height: 1px;
//     background-color: #ddd;
//     position: absolute;
//     left: 2rem;
//     top: 0.6rem;
//     content: "";
//   }

//   &::after {
//     width: 130px;
//     height: 1px;
//     background-color: #ddd;
//     position: absolute;
//     right: 2rem;
//     top: 0.6rem;
//     content: "";
//   }
// `;
// export const SocialLoginForm = styled.div`
//   width: 300px;

//   margin: 0.8rem 0;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// export const SocialLoginButton = styled.div`
//   border: 1px solid #c7cace;
//   border-radius: 0.2rem;
//   width: 48%;
//   height: 2.5rem;
//   cursor: pointer;

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 0.4rem;
// `;
// export const SocialLoginButtonLogo = styled.div`
//   width: 28px;

//   padding: 4px 0 0 10px;
// `;
// export const SocialLoginButtonLogoImg = styled.img`
//   width: 100%;
// `;
// export const SocialLoginButtonText = styled.div`
//   font-size: 0.9rem;
//   font-weight: bold;

//   margin: auto;
// `;

// social login form
export const SocialLoginForm = styled.div`
  width: 22rem;

  margin: 0.5rem 0 0.5rem;
`;

export const SocialLoginTitle = styled.span`
  font-size: 1.1rem;
  font-weight: bold;

  display: block;
  text-align: center;
  /* color: #656666; */
  margin: 0.5rem 0;
  position: relative;

  &::before {
    width: 9rem;
    height: 0.2rem;
    background-color: #ddd;
    position: absolute;
    left: 0;
    top: 0.6rem;
    content: "";
  }

  &::after {
    width: 9rem;
    height: 0.2rem;
    background-color: #ddd;
    position: absolute;
    right: 0rem;
    top: 0.6rem;
    content: "";
  }
`;
export const SocialLoginList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SocialLoginItem = styled.li`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;

  margin: 1rem 1.3rem;
  overflow: hidden;
  cursor: pointer;
`;
export const SocialLoginLogo = styled.div`
  /* display: block; */
`;
export const SocialLoginLogoImg = styled.img`
  /* background-size: cover; */

  max-width: 100%; // 이걸 하니까 맞춰지네???
`;
