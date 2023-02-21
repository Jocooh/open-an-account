import React from "react";

const BookmarkPrdtItem = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h1>{item.productCoName}</h1>
      <h1>{item.productName}</h1>
    </div>
  );
};

export default BookmarkPrdtItem;
