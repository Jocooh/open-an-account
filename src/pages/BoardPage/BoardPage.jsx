import React, { useState } from "react";
import PostingModal from "../../components/PostingModal/PostingModal";

function BoardPage() {
  const [postingModalOpen, setPostingModalOpen] = useState(false);

  const OpenPostingModal = () => {
    setPostingModalOpen(true);
  };

  return (
    <div>
      <button onClick={OpenPostingModal}>글쓰기</button>
      {postingModalOpen && (
        <PostingModal setPostingModalOpen={setPostingModalOpen} />
      )}
    </div>
  );
}

export default BoardPage;
