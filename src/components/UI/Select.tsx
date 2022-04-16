import React from "react";
import styled from "styled-components";
// import downArrow from "assets/images/down-arrow.png";

export const Select = (props: any) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

const Wrapper = styled.select`
  border: 1px solid #e3e8f5;
  border-radius: 4px;
  padding: 0 15px;
  height: 40px;
  width: 100%;
  /* appearance: none; */
  /* background: url({downArrow}); */
  background-color: white;
  background-position: center right 15px;
  background-repeat: no-repeat;
  :focus {
    outline: none;
  }
`;
