import React from "react";
import Header from "./header";
import styled from "styled-components";
import Footer from "./footer";

const Main = ({ children }: any) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Main;

const Content = styled.div`
  min-height: 100vh;
`;
