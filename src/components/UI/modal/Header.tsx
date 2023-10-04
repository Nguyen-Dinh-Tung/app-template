import React from "react";
import styled from "styled-components";
import closeIcon from "assets/images/close.svg";

interface Props {
  close?: () => void;
}

export const Header = ({ label, ...props }: any) => {
  return (
    <Styles {...props}>
      <div>{label}</div>
      <div
        className="close-modal-icon"
        onClick={() => props.close && props.close()}
      >
        &times;
      </div>
    </Styles>
  );
};

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 500;
  padding: 16px 15px 12px 20px;
  border-bottom: 1px solid #eaebed;
  .close-modal-icon {
    cursor: pointer;
    font-size: 32px;
    font-weight: 400;
    line-height: 30px;
  }
`;
