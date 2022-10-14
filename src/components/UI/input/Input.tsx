import React from "react";
import styled from "styled-components";
import { ErrorMessage } from "../form";

export const UIInput = ({ error, ...props }: any) => {
  return (
    <Styles>
      <input {...props} />
      <ErrorMessage>{error}</ErrorMessage>
    </Styles>
  );
};

export const Styles = styled.div`
  input {
    border-radius: 4px;
    padding: 0 15px;
    height: 40px;
    width: 100%;
    border: 1px solid #e3e8f5;
    appearance: none !important;
    :focus {
      outline: none;
    }
  }
`;
