import React from "react";
import "./Books.css";

const BookItem = (props) => {
  return (
    <div className="book">
      <img className="book-img" src="default-book.png" alt="book" />
      <div className="book-info--wrapper">
        <p className="book-title">{props.title}</p>
        <p className="book-author">{props.author}</p>
      </div>

      <div
        className={
          props.hasRead
            ? `${"has-read--icon-true"}`
            : `${"has-read--icon-false"}`
        }
      >
        {props.hasRead ? "read it!" : "not read yet"}
      </div>
      <button
        onClick={props.onDeleteBook}
        type="button"
        className="delete-book--btn"
      >
        X
      </button>
    </div>
  );
};
export default BookItem;
