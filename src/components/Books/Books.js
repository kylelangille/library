import React from "react";
import BookList from "./BookList";
import styled from "styled-components";

const BookListWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Books = (props) => {
  return (
    <BookListWrapper>
      <BookList items={props.items} onDelete={props.onDeleteBook} />
    </BookListWrapper>
  );
};

export default Books;
