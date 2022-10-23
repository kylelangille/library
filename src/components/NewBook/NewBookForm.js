import React, { useState } from "react";
import "./NewBook.css";

const NewBookForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredHasRead, setEnteredHasRead] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const hasReadChangeHandler = (event) => {
    setEnteredHasRead(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredAuthor.trim().length === 0 ||
      enteredAuthor.trim().length === 0
    ) {
      return;
    }

    const bookData = {
      title: enteredTitle,
      author: enteredAuthor,
      hasRead: enteredHasRead,
    };

    props.onSaveBookData(bookData);
    setEnteredTitle("");
    setEnteredAuthor("");
    setEnteredHasRead("");
  };

  return (
    <form onSubmit={submitHandler} className="add-book--form">
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={enteredTitle}
        onChange={titleChangeHandler}
      />

      <label htmlFor="author">Author</label>
      <input
        id="author"
        type="text"
        value={enteredAuthor}
        onChange={authorChangeHandler}
      />

      <div className="input-wrapper">
        <label htmlFor="hasRead">Have you read it?</label>
        <input
          id="hasRead"
          name="hasRead"
          type="checkbox"
          value={enteredHasRead}
          onChange={hasReadChangeHandler}
        />
      </div>
      <div className="add-book--controls">
        <button type="submit" className="add-book--btn">
          Add Book
        </button>
        <button
          onClick={props.onCancel}
          type="button"
          className="add-book--cancel"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewBookForm;
