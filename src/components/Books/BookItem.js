import React from "react";
import "./Books.css";

const BookItem = (props) => {
  return (
    <div className="book">
      <img className="book-img" src="default-book.png" alt="book" />
      <div className="book-info--wrapper">
        <p>Title:{props.title}</p>
        <p>Author:{props.author}</p>
      </div>
    </div>
  );
};
export default BookItem;
