import { Container } from "components/layout";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Styles>
      <Container>
        <div className="header">
          <Link to="/">
            <div>Home</div>
          </Link>
        </div>
      </Container>
    </Styles>
  );
};

export default Header;

const Styles = styled.div`
  height: 80px;
  background: black;
  color: white;
  font-size: 28px;
  text-align: center;

  .header {
    height: 80px;
    display: flex;
    align-items: center;
  }
`;
