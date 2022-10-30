import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  position: fixed;
  bottom: 0;
  height: 3rem;
  background: #464444;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    color: #b3b3b3;
    font-family: "Inter";
    font-weight: 500;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <p>Made with ❤️ by Kyle</p>
    </Foot>
  );
};

export default Footer;
