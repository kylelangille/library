import React, { useState } from "react";
import styled from "styled-components";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 25rem;
  border: 1px solid #ececec;
  border-radius: 9px;
  margin: 1rem auto 0 auto;

  & label {
    color: #ececec;
    margin-left: 1rem;
    font-size: 1.2rem;
  }

  & input {
    margin: 0 1rem 0 1rem;
    height: 2rem;
    outline: none;
  }
`;

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
    background: #0984e3;
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
    background: #d63031;
    color: #ececec;
  }
`;

const NewBookForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredHasRead, setEnteredHasRead] = useState(false);
  const [error, setError] = useState();

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
      setError({
        title: "Invalid input",
        message: "Please enter a valid title and author",
      });
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Form onSubmit={submitHandler}>
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
      </Form>
    </Wrapper>
  );
};

export default NewBookForm;
