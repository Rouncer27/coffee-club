import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header``;

const Header = (props) => {
  return <HeaderStyled>{props.children}</HeaderStyled>;
};

export default Header;
