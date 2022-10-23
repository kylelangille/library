import React from "react";
import BookItem from "./BookItem";
import "./Books.css";

const BookList = (props) => {
  if (props.items.length === 0) {
    return <h2>No books found.</h2>;
  }

  return (
    <div>
      {props.items.map((book) => (
        <BookItem
          key={book.id}
          title={book.title}
          author={book.author}
          hasRead={book.hasRead}
        />
      ))}
    </div>
  );
};

export default BookList;
