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
`;

const FooterText = styled.p`
  color: #b3b3b3;
  font-family: "Inter";
  font-weight: 500;
`;

const Footer = () => {
  return (
    <Foot>
      <FooterText>Made with ❤️ by Kyle</FooterText>
    </Foot>
  );
};

export default Footer;
