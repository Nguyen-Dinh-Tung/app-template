import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Select } from "../Select";
import { useClickOutSide } from "libs/useClickOutSide";
import downArrow from "assets/svg/down-arrow.svg";

const generateDayInMonth = (month: number, year: number) => {
  let date = new Date(year, month, 1);

  let days: any = [];
  while (date.getMonth() === month) {
    const d = date.getDate();
    days.push({ day: d, month, year });
    date.setDate(d + 1);
  }

  let firstDayInWeek = new Date(year, month, 1).getDay();
  let lastDayInWeek = new Date(year, month, days[days.length - 1].day).getDay();
  date = new Date(year, month, 0);
  if (firstDayInWeek === 0) firstDayInWeek = 7;
  while (firstDayInWeek > 1) {
    const d = date.getDate();
    days.unshift({ day: d, month: date.getMonth(), year: date.getFullYear() });
    date.setDate(d - 1);
    firstDayInWeek -= 1;
  }

  date = new Date(year, month, days[days.length - 1].day);
  date.setDate(days[days.length - 1].day + 1);
  while (lastDayInWeek < 7 && lastDayInWeek > 0) {
    const d = date.getDate();
    days.push({ day: d, month: date.getMonth(), year: date.getFullYear() });
    date.setDate(d + 1);
    lastDayInWeek += 1;
  }

  return days;
};

const generateYears = () => {
  const years = [];
  for (let i = 1990; i < 2101; i++) {
    years.push({ label: i, value: i });
  }
  return years;
};

const dayInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let monthArr: any = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
monthArr = monthArr.map((m: any, ind: number) => ({ label: m, value: ind }));
const yearArr = generateYears();
const configDay = (day: number) => (day > 9 ? day : "0" + day);

export const Calendar = ({ day, month, year, onChange, close }: any) => {
  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedMonth, setSelectedMonth] = useState(month);

  const dayInMonth = generateDayInMonth(selectedMonth, selectedYear);

  const popupRef = useRef(null);
  useClickOutSide(popupRef, () => {
    close();
  });

  return (
    <Styles className="calendar-popup" ref={popupRef}>
      <div className="calendar-top">
        <Select
          className="calendar-year"
          options={yearArr}
          value={selectedYear}
          onChange={(value: any) => {
            setSelectedYear(value);
          }}
        />
        <Select
          className="calendar-month"
          options={monthArr}
          value={selectedMonth}
          onChange={(value: any) => {
            setSelectedMonth(value);
          }}
        />
        <div className="top-right">
          <img
            src={downArrow}
            className="arrow-left"
            onClick={() => {
              const temp = selectedMonth - 1;
              if (temp >= 0) setSelectedMonth(temp);
              else {
                setSelectedMonth(11);
                setSelectedYear(selectedYear - 1);
              }
            }}
          />
          <img
            src={downArrow}
            className="arrow-right"
            onClick={() => {
              const temp = selectedMonth + 1;
              if (temp < 12) setSelectedMonth(temp);
              else {
                setSelectedMonth(0);
                setSelectedYear(selectedYear + 1);
              }
            }}
          />
        </div>
      </div>
      <div className="calendar-label">
        {dayInWeek.map((diw: string, ind: number) => (
          <div className="day-item" key={ind + 100}>
            {diw}
          </div>
        ))}
      </div>
      <div className="calendar-content">
        {dayInMonth.map((d: any, ind: number) => {
          const isSelectedDay =
            d.day == day && d.month == month && d.year == year;
          return (
            <div
              className={
                "day-item" +
                (isSelectedDay ? " selected" : "") +
                (selectedMonth != d.month ? " other-month" : "")
              }
              key={ind}
              onClick={() => {
                const temp = `${d.year}-${configDay(d.month + 1)}-${configDay(
                  d.day
                )}`;
                onChange(temp);
              }}
            >
              {d.day}
            </div>
          );
        })}
      </div>
    </Styles>
  );
};

const Styles = styled.div`
  position: absolute;
  background: red;
  bottom: -2px;
  right: 0;
  transform: translateY(100%);
  background: white;
  box-shadow: 2px 2px 16px 4px rgba(38, 140, 227, 0.1);
  border-radius: 4px;
  padding: 16px;
  z-index: 1;

  .calendar-top {
    display: flex;
    padding-bottom: 16px;

    .calendar-year {
      min-width: 56px;
    }

    .top-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      cursor: pointer;
      .arrow-left {
        width: 20px;
        height: 20px;
        transform: rotate(90deg);
        cursor: pointer;
      }
      .arrow-right {
        width: 20px;
        height: 20px;
        transform: rotate(-90deg);
        cursor: pointer;
      }
    }
  }

  .select-wrap {
    font-size: 16px;
    .selected-label {
      color: ${({ theme }: any) => theme.primary};
      border: unset;
      font-weight: 700;
      padding: unset;
      min-width: unset;
      height: 24px;
      width: min-content;

      .down-arrow {
        width: 20px;
        height: 20px;
        margin-left: 2px;
      }
    }

    .dropdown {
      padding: 8px 4px;
      width: min-content;
      ::-webkit-scrollbar {
        width: 0px;
      }
    }

    &.calendar-month {
      margin-left: 8px;
    }
  }

  .calendar-label {
    display: flex;
    padding-bottom: 4px;
    .day-item {
      :hover {
        background: unset;
        color: unset;
      }
    }
  }

  .calendar-content {
    display: grid;
    grid-template-columns: repeat(7, auto);
    row-gap: 8px;
  }

  .day-item {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
      background: ${({ theme }: any) => theme.primary};
      color: white;
    }
    &.selected {
      background: ${({ theme }: any) => theme.primary};
      color: white;
    }
    &.current-day {
      border: 1px solid ${({ theme }: any) => theme.primary};
    }
    &.other-month {
      color: #c4cad1;
    }
  }
`;
