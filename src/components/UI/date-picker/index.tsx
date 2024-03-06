import { ReactComponent as CalendarIcon } from "assets/svg/calendar.svg";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DatePopup } from "./Popup";

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
  const formatStr = format || "DD/MM/YYYY";

  useEffect(() => {
    ref.current.value = moment(value).format(formatStr);
  }, [value]);

  return (
    <Styles>
      {label && <label>{label}</label>}
      <input
        ref={ref}
        onClick={() => {
          setOpen(true);
        }}
        onBlur={(e: any) => {
          const temp = moment(e.target.value, formatStr);
          if (temp.isValid()) {
            onChange(temp);
          } else {
            e.target.value = moment(value).format(formatStr);
          }
        }}
      />
      <CalendarIcon className="calendar-icon" />
      {isOpen && (
        <DatePopup setOpen={setOpen} onChange={onChange} value={value} />
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
