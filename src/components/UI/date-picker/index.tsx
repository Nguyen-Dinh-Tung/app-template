import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CalendarIcon } from "assets/svg/calendar.svg";
import { Calendar } from "./Calendar";

const configDay = (day: number) => (day > 9 ? day : "0" + day);

export const DatePicker = ({ value, onChange }: any) => {
  const date = value ? new Date(value) : new Date();
  const selectedDate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const [isOpen, setOpen] = useState(true);
  return (
    <Styles>
      <input
        value={`${configDay(selectedDate)}/${configDay(month + 1)}/${year}`}
        placeholder="dd/mm/yyyy"
        readOnly
        onClick={(e: any) => {
          setOpen(!isOpen);
        }}
      />
      <CalendarIcon
        className="calendar-icon"
        onClick={(e: any) => {
          setOpen(!isOpen);
        }}
      />
      {isOpen && (
        <Calendar
          day={selectedDate}
          month={month}
          year={year}
          onChange={(value: any) => {
            onChange(value);
            setOpen(false);
          }}
          close={() => setOpen(false)}
        />
      )}
    </Styles>
  );
};

const Styles = styled.div`
  position: relative;
  width: 250px;
  margin: 50px auto;
  input {
    font-size: 16px;
    border-radius: 8px;
    padding: 0 12px;
    height: 48px;
    width: 100%;
    border: 1px solid #eaebed;
    ::placeholder {
      color: #c4cad1;
    }
    :focus {
      outline: none;
      border: 1px solid ${({ theme }: any) => theme.primary};
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  .calendar-icon {
    position: absolute;
    right: 12px;
    top: 12px;
    background: white;
    cursor: pointer;
    :hover {
      * {
        stroke: ${({ theme }: any) => theme.primary};
      }
    }
  }
`;
