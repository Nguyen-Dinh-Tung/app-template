import React from "react";
import styled from "styled-components";
import { ErrorMessage } from "../form";

export const UIInput = ({ label, error, ...props }: any) => {
  return (
    <Styles>
      {label && <label>{label}</label>}
      <input {...props} />
      <ErrorMessage>{error}</ErrorMessage>
    </Styles>
  );
};

export const Styles = styled.div`
  label {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  input {
    padding: 0 11px;
    height: 40px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #e3e8f5;
    appearance: none !important;
    :focus {
      outline: none;
    }
  }
`;
