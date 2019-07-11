import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

import Button from "./Button";

const TextModal = styled.div`
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: ${props => props.header ? "#777" : "#555"};
  font-weight: ${props => props.bold ? "bold" : "normal"};
`;

const ModalContent = styled.div`
  padding: 15px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 15px;
`;

const ModalHeader = styled.div`
  padding: 13px 15px;
`;

const Modal = (props) => (
  <Popup
    modal
    closeOnDocumentClick 
    trigger={props.trigger}
    contentStyle={contentStyle}
  >
    <ModalHeader>
      <TextModal bold header>
        {props.headerText}
      </TextModal>
    </ModalHeader>
    <ModalContent>
      <TextModal>{props.text}</TextModal>
    </ModalContent>
    <ModalFooter>
      <Button danger={props.danger}>
        {props.confirmText}
      </Button>
    </ModalFooter>
  </Popup> 
);

const contentStyle = {
  width: '33.33%',
  borderRadius: 3,
  padding: 0,
};

export default Modal;
