import React, { useState } from "react";
import styled from "styled-components";
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

  const NewBookButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
  `;

  const OpenFormButton = styled.button`
    margin-top: 1rem;
    width: 8rem;
    height: 3.3rem;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 9px;
    border: 1px solid #000;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: #ececec;
      background-color: #0984e3;
    }
  `;

  return (
    <NewBookButtonWrapper>
      {!isEditing && (
        <OpenFormButton onClick={startEditingHandler}>
          Add new book
        </OpenFormButton>
      )}
      {isEditing && (
        <NewBookForm
          onCancel={stopEditingHandler}
          onSaveBookData={saveBookDataHandler}
        />
      )}
    </NewBookButtonWrapper>
  );
};

export default NewBook;
