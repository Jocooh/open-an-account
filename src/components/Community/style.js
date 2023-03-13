import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  //성아-수정
  min-height: 100%;
  /* padding-bottom: 120px; */
  position: relative; ;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 3rem 0 5rem;
  //성아-수정
  min-height: 100%;
  /* padding-bottom: 120px; */
  position: relative; ;
`;
export const Title = styled.div`
  display: flex;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 64px;

  color: #ffffff;

  @media (max-width: 480px) {
    font-size: 30px;
    line-height: 50px;
  }
`;

export const Content = styled.div`
  max-width: 900px;
  /* height: 1500px; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex-wrap: wrap;

  /* @media (max-width: 100%) {
    width: 610px;
  } */
`;
export const Boards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 3rem;

  margin: 20px 0;
  @media screen {
  }
`;

export const UserWrapper = styled.div`
  z-index: 998;
  position: fixed;
  top: 37%;
  right: 10%;
  display: flex;
  flex-direction: column;
`;
export const Message = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 33px;

  margin-top: 20px;

  color: #ffffff;
`;
export const ProfileImg = styled.img`
  width: 50%;
  object-fit: contain;
  margin-bottom: 15px;
`;
export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 221px;
  gap: 5px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;

  background-color: #ffffff;
  border-radius: 5px;
`;

export const LoginButton = styled.button`
  margin-top: 20px;
  text-decoration: underline;
  color: #6a24ff;
`;
export const PostButton = styled.button`
  margin-top: 20px;
  text-decoration: underline;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Category = styled.button`
  width: 125px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  border-radius: 5px;

  cursor: pointer;

  :hover {
    background-color: #f5f5f5;
  }
`;
