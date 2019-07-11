import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.15);

  background: ${props => {
    if (props.danger) {
      return "#eb5a46";
    }
    if (props.secondary) {
      return "#ff9f1a";
    }
    return "#0079bf";
  }};
`;

export default Button;
