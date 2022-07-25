import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as CalendarIcon } from "assets/svg/calendar.svg";
import { Calendar } from "./Calendar";
import moment from "moment";

const configDay = (day: number) => (day > 9 ? day : "0" + day);
const formatStr = "DD/MM/YYYY";

export const DatePicker = ({ value, onChange }: any) => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const [isOpen, setOpen] = useState(true);
  useEffect(() => {
    if (value) {
      const date = new Date(value);
      const selectedDate = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      setSelectedDate(selectedDate);
      setMonth(month);
      setYear(year);
      const temp = `${configDay(selectedDate)}/${configDay(month + 1)}/${year}`;
      setInputValue(temp);
    } else setInputValue("");
  }, [value]);
  return (
    <Styles>
      <input
        value={inputValue}
        placeholder={formatStr.toLowerCase()}
        onClick={(e: any) => {
          setOpen(!isOpen);
        }}
        onChange={(e: any) => {
          setInputValue(e.target.value);
        }}
        onBlur={(e: any) => {
          const temp = moment(e.target.value, formatStr);
          if (temp.isValid()) {
            setInputValue(temp.format(formatStr));
          } else setInputValue("");
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
