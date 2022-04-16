import { Container } from "components/layout";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Styles>
      <Container>Footer</Container>
    </Styles>
  );
};

export default Footer;

const Styles = styled.div`
  padding: 10px;
  text-align: center;
  background: black;
  color: white;
  font-size: 18px;
`;
