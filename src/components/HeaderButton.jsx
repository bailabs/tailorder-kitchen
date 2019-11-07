import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  border: 0;
  width: 100px;
  transition: all 0.3s ease-out;
  color: ${props => (props.active ? '#FFF' : '#007ac1')};
  background-color: ${props => (props.active ? '#007ac1' : '#03a9f4')};
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
    {props.icon ? <FontAwesomeIcon size="2x" icon={props.icon} /> : null}
    <Text>{props.text}</Text>
  </Button>
);

export default HeaderButton;
