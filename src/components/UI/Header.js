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
`;

const MainHeading = styled.h1`
  color: #b3b3b3;
  font-size: 3rem;
  font-family: "Inter";
`;

const Header = () => {
  return (
    <Head>
      <MainHeading>📚MyLibrary</MainHeading>
    </Head>
  );
};

export default Header;
