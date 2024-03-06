import { ReactComponent as CalendarIcon } from "assets/svg/calendar.svg";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DatePopup } from "./Popup";

/* <UIDatePicker
  label="Start Date"
  format="DD/MM/YYYY"
  value={date}
  isTime
  onChange={(d: any) => {
    setDate(d);
  }}
/>; */

interface Props {
  label?: string;
  value?: any;
  onChange?: any;
  format?: string;
  isTime?: boolean;
}

export const UIDatePicker = ({
  label,
  value,
  onChange,
  format,
  isTime,
}: Props) => {
  const [isOpen, setOpen] = useState(false);
  const ref: any = useRef();
  const formatStr = format || (isTime ? "HH:mm DD/MM/YYYY" : "DD/MM/YYYY");

  useEffect(() => {
    ref.current.value =
      value && moment(value).isValid() ? moment(value).format(formatStr) : "";
  }, [value]);

  const onInputBlur = (e: any) => {
    if (e.target.value.trim() == "") {
      onChange(null);
      return;
    }

    const temp = moment(e.target.value, formatStr);
    if (temp.isValid()) {
      onChange(temp);
    } else {
      e.target.value =
        value && moment(value).isValid() ? moment(value).format(formatStr) : "";
    }
  };

  return (
    <Styles>
      {label && <label>{label}</label>}
      <input
        ref={ref}
        onClick={() => {
          setOpen(true);
        }}
        onBlur={onInputBlur}
      />
      <CalendarIcon className="calendar-icon" />
      {isOpen && (
        <DatePopup
          setOpen={setOpen}
          onChange={onChange}
          value={value}
          isTime={isTime}
        />
      )}
    </Styles>
  );
};

const Styles = styled.div`
  position: relative;
  label {
    font-size: 13px;
    font-weight: 500;
  }

  input {
    padding: 0 11px;
    height: 40px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #e3e8f5;
    appearance: none !important;
    :focus {
      outline: none;
    }
  }

  .calendar-icon {
    position: absolute;
    right: 8px;
    bottom: 8px;
    color: #757575;
  }
`;
