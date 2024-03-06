import { useClickOutSide } from "libs/useClickOutSide";
import moment from "moment";
import { useRef, useState } from "react";
import styled from "styled-components";

const weeks = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const getDayInMonth = (day: any) => {
  const date = moment(day);
  const daysInMonth = date.daysInMonth();
  const monthYear = date.format("YYYY-MM-");
  const arr = Array(daysInMonth)
    .fill("")
    .map((item: any, ind: number) => {
      const temp = ind + 1;
      return monthYear + (temp > 9 ? temp : "0" + temp);
    });
  return arr;
};

export const DatePopup = ({ setOpen, value, onChange }: any) => {
  const [month, setMonth] = useState(moment(value));
  const daysInMonth = getDayInMonth(month);
  const firstDayInWeek = moment(daysInMonth[0]).isoWeekday();

  const ref: any = useRef();
  useClickOutSide(ref, () => {
    setOpen(false);
  });

  return (
    <Styles ref={ref}>
      <div className="date-header">
        <div
          onClick={() => {
            setMonth((prev) => moment(prev).subtract(1, "month"));
          }}
          className="nav-button"
        >
          {"<"}
        </div>
        <div>{month.format("MMMM YYYY")}</div>
        <div
          onClick={() => {
            setMonth((prev) => moment(prev).add(1, "month"));
          }}
          className="nav-button"
        >
          {">"}
        </div>
      </div>
      <div className="date-week">
        {weeks.map((w: any) => (
          <div key={w}>{w}</div>
        ))}
      </div>
      <div className="date-days">
        {Array(firstDayInWeek - 1)
          .fill("")
          .map((_, ind: any) => (
            <div key={ind + 100} className="no-day"></div>
          ))}
        {daysInMonth.map((day: any, ind: number) => {
          const isActive = moment(day).isSame(value, "day");
          return (
            <div
              key={day}
              className={isActive ? "active" : undefined}
              onClick={() => {
                onChange(day);
                setOpen(false);
              }}
            >
              {ind + 1}
            </div>
          );
        })}
      </div>
    </Styles>
  );
};

const Styles = styled.div`
  width: 240px;
  background: white;
  border-radius: 8px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3), -1px -1px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: -4px;
  transform: translateY(100%);

  .date-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3;
    font-size: 16px;
    font-weight: 500;
    background: #f5f5f5;
    padding: 4px 8px;

    .nav-button {
      color: #9e9e9e;
      cursor: pointer;
      padding: 0 4px;
      :hover {
        color: black;
      }
    }
  }

  .date-week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    background: #f5f5f5;
    padding: 0 8px 4px;
    font-size: 12px;
    font-weight: 500;
    color: grey;
    text-align: center;
  }

  .date-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    padding: 4px 8px;
    > div {
      width: 28px;
      height: 28px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      :hover,
      &.active {
        background: ${({ theme }: any) => theme.primary + "20"};
        border: 1px solid ${({ theme }: any) => theme.primary};
      }
    }

    .no-day {
      background: none !important;
      border: none !important;
      cursor: unset;
    }
  }
`;
