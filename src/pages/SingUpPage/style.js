import styled from "styled-components";

// auth background
export const AuthBackground = styled.div`
  width: 100vw;
  height: calc(100vh - 180px);

  /* padding: 200px 0; */

  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;

  background-color: #e9e9e9;
  /* e3e3e3 */
`;

// auth wrapper
export const AuthWrapper = styled.div`
  width: 420px;
  /* min-width: 400px; */
  background-color: white;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

// auth logo, title
export const AuthLogo = styled.div`
  width: 120px;
  margin: 1.5rem 0;
`;
export const AuthLogoImg = styled.img`
  width: 100%;
`;
export const AuthTitle = styled.div`
  width: 300px;
  font-size: 1.4rem;
  font-weight: 600;

  margin-top: 1rem;
  text-align: center;
`;
export const AuthText = styled.span`
  color: #656666;
  font-size: 0.7rem;
  font-weight: 600;

  margin: 0.5rem 0 2.2rem;
`;

// auth form
export const AuthForm = styled.div``;
export const AuthInputWrapper = styled.div`
  width: 300px;

  display: flex;
  flex-direction: column;
`;
export const AuthLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
`;
export const AuthInput = styled.input`
  height: 1.6rem;
  font-size: 0.9rem;
  border: 2px solid #6a24ff;
  border-radius: 0.2rem;

  margin: 0.3rem 0 0.8rem;
  padding: 0.3rem;
  &:focus {
    outline: 2px solid #6a24ff;
  }
`;
export const AuthButton = styled.button`
  width: 300px;
  height: 2.5rem;
  color: white;
  background-color: #6a24ff;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.2rem;
  cursor: pointer;

  margin: 0.7rem 0;
`;
