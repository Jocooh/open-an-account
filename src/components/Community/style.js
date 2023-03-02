import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const Content = styled.div`
  width: 900px;
  height: 1500px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background-color: beige;
`;

export const Title = styled.div`
  /* color: white; */
  display: flex;
  padding: 20px 0;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 64px;

  color: #ffffff;
`;

export const Boards = styled.div`
  display: flex;
  flex-flow: wrap-reverse;
`;

export const UserWrapper = styled.div`
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

  background-color: #ffffff;
  border-radius: 5px;
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
    background-color: rgba(188, 188, 188, 0.4);
  }
`;
