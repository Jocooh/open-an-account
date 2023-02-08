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
  margin: 20px;
  padding: 30px;
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

export const Input = styled.Input`
  border: none;
  color: #555;
  box-sizing: border-box;
  font-size: 18px;
  :focus-visible {
    outline: none;
  }
  margin-top: 3px;
  padding-left: 10px;
`;

export const Button = styled.button`
  background-color: #6a24ff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
