import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Modal = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  border-radius: 9px;

  & header {
    background: #464444;
    padding: 1rem;
  }

  & header h2 {
    color: #b3b3b3;
  }

  & div {
    padding: 1rem;
    text-align: center;
    background-color: #908f8f;
  }
`;

const ErrorModal = (props) => {
  return (
    <Backdrop>
      <Modal>
        <header>
          <h2>Error! {props.title}.</h2>
        </header>
        <div>{props.message}.</div>
        <div>
          <button onClick={props.onConfirm}>Okay</button>
        </div>
      </Modal>
    </Backdrop>
  );
};

export default ErrorModal;
