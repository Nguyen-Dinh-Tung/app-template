import { useClickOutSide } from "libs/useClickOutSide";
import moment from "moment";
import { useRef, useState } from "react";
import styled from "styled-components";

const weeks = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const formatHour = (num: number) => (num >= 10 ? num : "0" + num);
const generateHours = () => {
  const result = [];
  let value = 0;
  const minutesOfDay = 60 * 24;
  while (value < minutesOfDay) {
    result.push(value);
    value += 30;
  }
  return result.map(
    (r: any) => `${formatHour(Math.floor(r / 60))}:${formatHour(r % 60)}`
  );
};

const hours = generateHours();

const getDayInMonth = (day: any) => {
  const date = moment(day).isValid() ? moment(day) : moment();
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

export const DatePopup = ({ setOpen, value, onChange, isTime }: any) => {
  const [month, setMonth] = useState(moment(value || undefined));
  const daysInMonth = getDayInMonth(month);
  const firstDayInWeek = moment(daysInMonth[0]).isoWeekday();

  const ref: any = useRef();
  useClickOutSide(ref, () => {
    setOpen(false);
  });

  const date = moment(value || undefined);
  const dayStr = date.format("YYYY-MM-DD");
  const hourStr = date.format("HH:mm");

  const onChangeDay = (day: string) => {
    const temp = day + (value ? moment(value).format("HH:mm") : "00:00");
    onChange(moment(temp, "YYYY-MM-DD HH:mm").toISOString());
    if (!isTime) setOpen(false);
  };

  const onChangeHour = (hour: string) => {
    const temp = `${moment(value || undefined).format("YYYY-MM-DD")} ${hour}`;
    onChange(moment(temp, "YYYY-MM-DD HH:mm").toISOString());
    setOpen(false);
  };

  return (
    <Styles ref={ref}>
      <div className="date-cover">
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
            const isActive = day == dayStr;
            return (
              <div
                key={day}
                className={isActive ? "active" : undefined}
                onClick={() => {
                  onChangeDay(day);
                }}
              >
                {ind + 1}
              </div>
            );
          })}
        </div>
      </div>
      {isTime && (
        <div className="hours-cover">
          <label>Time</label>
          <div className="hours-list">
            {hours.map((h: any) => {
              const isActive = h == hourStr;
              return (
                <div
                  key={h}
                  className={isActive ? "active" : undefined}
                  onClick={() => {
                    onChangeHour(h);
                  }}
                >
                  {h}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Styles>
  );
};

const Styles = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3), -1px -1px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: -4px;
  transform: translateY(100%);
  display: flex;

  .date-cover {
    width: 240px;
  }

  .date-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    font-size: 16px;
    font-weight: 500;
    background: #f5f5f5;
    padding: 8px 8px 4px;

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

  .hours-cover {
    border-left: 1px solid #e0e0e0;
    label {
      height: 58px;
      background: #f5f5f5;
      text-align: center;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .hours-list {
      height: 190px;
      overflow: auto;

      > div {
        padding: 4px 8px;
        border: 1px solid transparent;
        border-radius: 4px;
        cursor: pointer;

        :hover,
        &.active {
          background: ${({ theme }: any) => theme.primary + "20"};
          border-color: ${({ theme }: any) => theme.primary};
        }
      }

      :-webkit-scrollbar-track {
        background-color: #fff;
      }

      ::-webkit-scrollbar {
        width: 4px;
        background-color: #e5e5e5;
        height: 4px;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #e5e5e5;
        width: 10px;
        height: 4px;
      }
    }
  }
`;
