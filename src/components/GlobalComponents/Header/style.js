import styled from "styled-components";

export const Container = styled.div`
  /* width: 1440px; */
  height: 52px;
  /* box-sizing: border-box; */

  /* padding: 2rem 3rem; */
  /* text-align: center; */
  /* position: fixed; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// components -> GlobalComponents -> Header -> style.js

export const Logo = styled.img`
  width: 70px;
  height: 19px;
  display: flex;
  justify-content: flex-start;
  margin-left: 70px;
  cursor: pointer;
`;
export const NavBar = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 70px;
  gap: 40px;
`;
export const Nav = styled.div`
  font-size: 14px;
  font-weight: bold;
  box-sizing: border-box;
  cursor: pointer;

  /* @media screen and (max-width: 600px) {
    font-size: 14px;
    padding-left: 15px;
  } */
`;
export const LoginToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
