import React from "react";
import styled from "styled-components";
import BookCover from "./BookCover";
import "./Books.css";

const BookItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const Book = styled.div`
    width: 37rem;
    height: 5rem;
    background-color: #414141;
    border-radius: 9px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
    display: flex;
    margin-bottom: 1rem;
    position: relative;
  `;

  return (
    <Book>
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
    </Book>
  );
};
export default BookItem;
