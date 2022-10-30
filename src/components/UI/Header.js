import React from "react";
import styled from "styled-components";

const Head = styled.header`
  height: 7rem;
  background-color: #464444;
  width: 100vw;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  padding-left: 2rem;

  & h2 {
    color: #b3b3b3;
    font-size: 3rem;
    font-family: "Inter";
  }
`;

const Header = () => {
  return (
    <Head>
      <h2>📚MyLibrary</h2>
    </Head>
  );
};

export default Header;
