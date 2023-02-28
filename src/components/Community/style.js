import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  padding: 30px;
`;
export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 100px 20px;
`;
export const Category = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffff;
  border-radius: 10px;

  cursor: pointer;

  :hover {
    background-color: rgba(188, 188, 188, 0.4);
  }
`;
export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  background-color: #ffffff;

  margin: 100px 0;
  padding: 20px;

  width: 200px;
  height: 150px;
  border-radius: 10px;
`;
export const Message = styled.div``;
export const ProfileImg = styled.img`
  width: 25%;
  object-fit: contain;
`;
export const User = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  /* gap: 10px; */
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 60px;

  border-bottom: 0.6px solid #c6c6c6;
`;
export const PostButton = styled.button`
  margin-top: 20px;
`;
