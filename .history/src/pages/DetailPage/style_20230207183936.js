import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
export const ButtonWrap = styled.div`
  display: flex;
`;
export const LikeWrap = styled.div`
  display: flex;
  gap: 5px;
`;
export const Like = styled.div`
  display: flex;
`;
export const Scrap = styled.div`
  display: flex;
`;
export const Body = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
  padding: 40px;
  background-color: #dbc9ff;
`;

export const Title = styled.div`
  padding: 30px;
  background-color: #ffefc8;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  padding: 30px;
  background-color: #ffefc8;
`;

export const Button = styled.button`
  background-color: #6a24ff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
