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
      <img
        className="close-modal"
        src={closeIcon}
        onClick={() => props.close && props.close()}
      />
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
  img {
    cursor: pointer;
  }
`;
