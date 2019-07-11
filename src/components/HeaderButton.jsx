import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  border: 0;
  border-left: 1px solid #ccc;
  width: 100px;
  transition: all 0.3s ease-out;
  color: ${props => props.active ? "#fff": "#555"};
  background-color: ${props => props.active ? "#0079bf" : "#fff"};
  border-right: ${props => props.borderRight ? "1px solid #ccc" : 0 }
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const HeaderButton = props => (
  <Button 
    active={props.active}
    onClick={props.onClick}
    borderRight={props.borderRight}
  >
    {
      props.icon 
      ? <FontAwesomeIcon size="2x" icon={props.icon} />
      : null
    }
    <Text>{props.text}</Text>
  </Button>
);

export default HeaderButton;
