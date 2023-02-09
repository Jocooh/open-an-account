import React, { useState } from "react";
import ComparingModal from "../../components/ComparingModal/ComparingModal";
import PostingModal from "../../components/PostingModal/PostingModal";

function BoardPage() {
  const [postingModalOpen, setPostingModalOpen] = useState(false);
  const [comparingModalOpen, setComparingModalOpen] = useState(false);

  const OpenPostingModal = () => {
    setPostingModalOpen(true);
  };
  return (
    <div>
      <button onClick={OpenPostingModal}>글쓰기</button>
      {postingModalOpen && (
        <PostingModal setPostingModalOpen={setPostingModalOpen} />
      )}
      <button onClick={OpenPostingModal}>비교하기</button>
      {comparingModalOpen && (
        <ComparingModal setComparingModalOpen={setComparingModalOpen} />
      )}
    </div>
  );
}

export default BoardPage;
