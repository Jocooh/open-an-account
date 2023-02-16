import styled from "styled-components";

// 전체랩
export const Wrap = styled.div`
  width: 100%;
  height: 1500px;
`;

// 모든게시판랩
export const BoardPageWrap = styled.div`
  padding: 60px;
`;

// 게시판랩
export const BoardWrap = styled.div`
  width: 900px;
`;

// 게시판 제목
export const BoardTitle = styled.span`
  font-size: 50px;
  margin-bottom: 40px;
`;

// 글쓰기 버튼
export const BoardButton = styled.button`
  float: right;
  font-size: 20px;
  font-weight: bold;
  border: 1px purple solid;
  border-radius: 20px;
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: #6a24ff;
    color: white;
  }
`;

// 게시판 글 보이는 창
export const BoardContainer = styled.div`
  border: 1px black solid;
  margin-top: 40px;
  width: 900px;
  height: 700px;
`;
