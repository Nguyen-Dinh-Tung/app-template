import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginScreen = () => {
  return (
    <Styles>
      <Link to="/">Login Screen</Link>
    </Styles>
  );
};

export default LoginScreen;

const Styles = styled.div``;
