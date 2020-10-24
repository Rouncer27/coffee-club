import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";

const NavigationStyled = styled.div``;

const Navigation = () => {
  return (
    <Header>
      <button type="button">
        <span />
        <span />
        <span />
      </button>
      <h1>
        <Link to="/">Mocha mayhem</Link>
      </h1>
      <nav></nav>
    </Header>
  );
};

export default Navigation;
