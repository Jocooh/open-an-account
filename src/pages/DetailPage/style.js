import styled from 'styled-components';

//전체
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

// 목록 돌아가기
export const ReturnButton = styled.div`
  padding: 0px;
  cursor: pointer;
`;

// 수정,삭제, 좋아요, 스크랩
export const Header = styled.div`
  display: flex;
  padding: 1rem 2rem;
  gap: 20px;
  justify-content: flex-end;
`;

// 수정, 삭제만
export const ButtonWrap = styled.div`
  display: flex;
  gap: 5px;
`;
export const Button = styled.button`
  background-color: #6a24ff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

// 좋아요, 스크랩만
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

// 글 제목, 내용
export const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
  margin: 40px 80px;
  background-color: #dbc9ff;
`;

export const Title = styled.div`
  padding: 30px;
  background-color: #ffefc8;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  height: 300px;
  padding: 30px;
  background-color: #ffefc8;
`;

export const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 50px;
  margin: 40px 80px;
  background-color: #dbc9ff;
`;

export const CommentTitle = styled.div`
  display: flex;
`;
export const Comment = styled.div`
  padding: 30px;
  background-color: #ffefc8;
  margin-bottom: 20px;
`;
