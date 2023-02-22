import styled from "styled-components";

export const Container = styled.div`
  // 글로벌 스타일 적용 및 로그인&회원가입 페이지 반응형 웹 높이 설정으로 지정되어 있지 않던 heigth 값 추가. 기존 높이 값과 큰 차이는 없음. - 원준
  width: 100vw;
  /* height: 120px; */
  height: 7.5rem;
  /* box-sizing: border-box; */

  /* padding: 2rem 3rem; */
  /* text-align: center; */
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;
export const Logo = styled.img`
  width: 116px;
  height: 36px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`;
export const NavBar = styled.div`
  display: flex;
  justify-content: end;
  gap: 40px;
`;
export const Nav = styled.div`
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
  font-size: 15px;
  display: flex;
  align-items: center;
`;
