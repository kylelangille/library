import React from "react";
import styled from "styled-components";
import "./Books.css";

const Cover = styled.img`
  height: 4.4rem;
  width: 4.4rem;
  margin: 0.25rem 1rem 0 0;
`;

const BookCover = () => {
  return <Cover src="default-book.png" />;
};

export default BookCover;
