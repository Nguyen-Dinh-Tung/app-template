import React from "react";
import Header from "./header";
import styled from "styled-components";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  );
};

const Content = styled.div`
  min-height: 100vh;
`;

export const LoginLayout = () => {
  return <Outlet />;
};
