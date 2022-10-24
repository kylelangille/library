import React from "react";
import BookList from "./BookList";
import "./Books.css";

const Books = (props) => {
  return (
    <div className="books-list--wrapper">
      <BookList items={props.items} onDelete={props.onDeleteBook} />
    </div>
  );
};

export default Books;
