import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  padding: 30px;
  background-color: #dbc9ff;
`;

export const Title = styled.input`
  padding-left: 10px;
`;

export const Content = styled.input`
  padding-left: 10px;
`;

export const Button = styled.button`
  background-color: #6a24ff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
