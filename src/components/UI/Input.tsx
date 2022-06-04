import React from "react";
import styled from "styled-components";
// import calendar from "assets/images/calendar.png";

// const inputBg: any = { date: calendar, time: calendar };

export const Input = styled.input<any>`
  border-radius: 4px;
  padding: 0 15px;
  height: 40px;
  width: 100%;
  border: 1px solid #e3e8f5;
  appearance: none !important;
  /* background-image: ${(props: any) => `url({inputBg[props.type]})`}; */
  background-position: center right 15px;
  background-repeat: no-repeat;
  :focus {
    outline: none;
  }
  ::-webkit-calendar-picker-indicator {
    cursor: pointer;
    padding-right: 5px;
    opacity: 0.7;
  }
`;
