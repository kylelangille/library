import React from "react";
import BookList from "./BookList";
import "./Books.css";

const Books = (props) => {
  return (
    <div className="books-list--wrapper">
      <BookList items={props.items} onDeleteBook={props.deleteBookHandler} />
    </div>
  );
};

export default Books;
