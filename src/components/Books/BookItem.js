import React from "react";
import BookCover from "./BookCover";
import "./Books.css";

const BookItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="book">
      <BookCover />
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
        onClick={deleteHandler}
        type="button"
        className="delete-book--btn"
      >
        X
      </button>
    </li>
  );
};
export default BookItem;
