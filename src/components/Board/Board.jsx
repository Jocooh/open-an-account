import React from "react";

function Board({ boards }) {
  return (
    <>
      {boards.map((i) => {
        return (
          <div
            style={{
              border: "1px black solid",
            }}
            key={i.userId}
          >
            <h3>{i.title}</h3>
            <p>{i.contents}</p>
            <div>{i.data}</div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        );
      })}
    </>
  );
}

export default Board;
