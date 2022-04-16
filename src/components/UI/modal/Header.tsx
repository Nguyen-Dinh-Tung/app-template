import React from "react";
import styled from "styled-components";
import closeIcon from "assets/images/clear-icon.png";

interface Props {
  close?: () => void;
}

export const Header = (props: any) => {
  return (
    <Wrapper {...props}>
      {props.children}
      <img
        className="close-modal"
        src={closeIcon}
        onClick={() => props.close && props.close()}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  margin: 0 32px;
  padding: 32px 0 20px;
  line-height: 36px;
  color: #001d4e;
  border-bottom: 1px solid #f2f2f2;
  position: relative;
  .close-modal {
    position: absolute;
    right: 0;
    top: 40%;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    padding: 25px 0 20px;
    margin: 0 25px;
  }
`;
