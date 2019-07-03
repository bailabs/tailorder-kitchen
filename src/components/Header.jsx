import React from "react";
import styled from "styled-components";

const HeaderBar = styled.div`
  padding: 0.9em;
  border: 1px solid #efefef;
`;

const HeaderTitle = styled.h1`
  font-family: Helvetica, sans-serif;
  font-size: 24px;
  text-align: center;
  color: #777;
  margin: 0;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderBar>
        <HeaderTitle>Kitchen Display</HeaderTitle>
      </HeaderBar>
    );
  }
}

export default Header;
