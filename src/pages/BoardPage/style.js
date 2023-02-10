import styled from 'styled-components';

//전체 페이지
export const Container = styled.div`
  margin: 0 120px 0 120px;
`;

//상단 불타는, 인기 부분
export const BestContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

//불타는 상품
export const BestInfo = styled.div`
  padding: 50px 450px 50px 10px;
  margin-right: 20px;
  background-color: gray;
`;

//인기글
export const BestComment = styled.div`
  padding: 50px 450px 50px 10px;
  background-color: aqua;
`;

//게시판
export const Board = styled.div`
  margin: 40px 100px 0 400px;
  //background-color: beige;
`;

//게시글
export const BoardComment = styled.div`
  margin-bottom: 10px;
  text-align: justify;
`;

//게시글쓰기
export const BoardButton = styled.button`
  width: 130px;
  height: 50px;
  margin-top: 20px;
  background-color: red;
  border: none;
  float: right;
`;
