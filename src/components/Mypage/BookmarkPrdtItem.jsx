import React from "react";

const BookmarkPrdtItem = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h1>{item.productName}</h1>
      <h3>{item.userId}</h3>
    </div>
  );
};

export default BookmarkPrdtItem;
