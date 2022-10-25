import React from "react";
import BookItem from "./BookItem";

const BookList = (props) => {
  return (
    <ul>
      {props.items.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          hasRead={book.hasRead}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
};

export default BookList;
