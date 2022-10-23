import React, { useState } from "react";
import NewBookForm from "./NewBookForm";
import "./NewBook.css";

const NewBook = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveBookDataHandler = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
      id: "b" + Math.random().toString(),
    };
    props.onAddBook(bookData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-book">
      {!isEditing && (
        <button className="open-form--btn" onClick={startEditingHandler}>
          Add new book
        </button>
      )}
      {isEditing && (
        <NewBookForm
          onCancel={stopEditingHandler}
          onSaveBookData={saveBookDataHandler}
        />
      )}
    </div>
  );
};

export default NewBook;
