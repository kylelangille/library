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

  const DeleteButton = styled.button`
    position: absolute;
    right: 1%;
    top: 35%;
    cursor: pointer;
    width: 1.3rem;
    height: 1.3rem;
    border: 1px solid #000;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      background-color: #d63031;
      color: #ececec;
      transform: rotate(180deg);
    }
  `;

  const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const BookTitle = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
    color: #b3b3b3;
  `;

  const BookAuthor = styled.p`
    font-size: 1.2rem;
    color: #ccc;
  `;

  return (
    <Book>
      <BookCover />
      <InfoWrapper>
        <BookTitle>{props.title}</BookTitle>
        <BookAuthor>{props.author}</BookAuthor>
      </InfoWrapper>
      <div
        className={
          props.hasRead
            ? `${"has-read--icon-true"}`
            : `${"has-read--icon-false"}`
        }
      >
        {props.hasRead ? "read it!" : "not read yet"}
      </div>
      <DeleteButton onClick={deleteHandler} type="button">
        ✖
      </DeleteButton>
    </Book>
  );
};
export default BookItem;
