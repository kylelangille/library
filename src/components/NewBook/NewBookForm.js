import React, { useState } from "react";
import styled from "styled-components";
import "./NewBook.css";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddBookButton = styled.button`
  width: 8rem;
  height: 3rem;
  margin: 1rem auto 0.5rem auto;
  font-weight: 700;
  border-radius: 9px;
  border: 1px solid #000;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ececec;
    background-color: #0984e3;
  }
`;

const CancelButton = styled.button`
  height: 3rem;
  margin: 1rem 1rem 0 0;
  width: 4rem;
  border-radius: 9px;
  border: 1px solid #000;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d63031;
    color: #ececec;
  }
`;

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
      <InputWrapper>
        <label htmlFor="hasRead">Have you read it?</label>
        <input
          id="hasRead"
          name="hasRead"
          type="checkbox"
          value={enteredHasRead}
          onChange={hasReadChangeHandler}
        />
      </InputWrapper>
      <ControlsContainer>
        <AddBookButton>Add Book</AddBookButton>
        <CancelButton onClick={props.onCancel}>Cancel</CancelButton>
      </ControlsContainer>
    </form>
  );
};

export default NewBookForm;
