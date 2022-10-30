import React from "react";
import styled from "styled-components";
import BookCover from "./BookCover";

const Book = styled.div`
  width: 37rem;
  height: 5rem;
  background-color: #414141;
  border-radius: 9px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  margin-bottom: 1rem;
  position: relative;

  & div:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & div p:first-of-type {
    font-size: 1.4rem;
    font-weight: 600;
    color: #b3b3b3;
  }

  & div p:nth-child(2) {
    font-size: 1.2rem;
    color: #ccc;
  }

  & button {
    position: absolute;
    right: 1%;
    top: 35%;
    cursor: pointer;
    width: 1.3rem;
    height: 1.3rem;
    border: 1px solid #000;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  & button:hover {
    background-color: #d63031;
    color: #ececec;
    transform: rotate(180deg);
  }
`;

const HasReadIcon = styled.div`
  width: 7rem;
  height: 3rem;
  border-radius: 9px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5%;
  top: 20%;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

  &.icon-true {
    background: linear-gradient(to bottom right, #27ae60, #52be80);
  }

  &.icon-false {
    background: linear-gradient(to bottom right, #c0392b, #cd6155);
  }
`;

const BookItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <Book>
      <BookCover />
      <div>
        <p>{props.title}</p>
        <p>{props.author}</p>
      </div>
      <HasReadIcon className={props.hasRead ? "icon-true" : "icon-false"}>
        {props.hasRead ? "read it!" : "not read yet"}
      </HasReadIcon>
      <button onClick={deleteHandler} type="button">
        ✖
      </button>
    </Book>
  );
};
export default BookItem;
