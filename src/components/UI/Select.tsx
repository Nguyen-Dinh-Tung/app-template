import React, { useRef, useState } from "react";
import styled from "styled-components";
import downArrow from "assets/svg/down-arrow.svg";
import { useClickOutSide } from "libs/useClickOutSide";

let timeArr: any = [];

for (let i = 0; i < 24; i++) {
  timeArr = timeArr.concat([
    { label: i + ":00", value: i + ":00" },
    { label: i + ":30", value: i + ":30" },
  ]);
}

interface Props {
  options?: any[]; //[{label:'Thứ 2', value:'2'}] or [1,2,3,4,5]
  label?: string;
  value?: any;
  onChange?: (value: any) => void;
  type?: string;
}

export const Select = ({
  label,
  options,
  value,
  onChange,
  type,
  ...props
}: any) => {
  const optionArray = type === "time" ? timeArr : options;
  const selectedLabel = optionArray.find((op: any) => op.value == value)?.label;
  const [isOpen, setOpen] = useState(false);
  const popupRef = useRef(null);
  useClickOutSide(popupRef, () => setOpen(false));
  return (
    <Styles className={"select-wrap " + props.className}>
      {label && <label>{label}</label>}
      <div className="selected-label" onClick={() => setOpen(!isOpen)}>
        <div>{selectedLabel}</div>
        <img src={downArrow} className="down-arrow" />
      </div>
      {isOpen && (
        <div className="dropdown" ref={popupRef}>
          {optionArray.map((item: any, ind: number) => {
            return (
              <div
                className={
                  "select-item" + (item.value == value ? " selected" : "")
                }
                onClick={() => {
                  onChange && onChange(item.value);
                  setOpen(false);
                }}
                key={ind}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      )}
    </Styles>
  );
};

const Styles = styled.div`
  position: relative;
  cursor: pointer;

  label {
    display: block;
    color: #7f8c9b;
    font-size: 14px;
    margin-bottom: 2px;
  }

  .selected-label {
    min-width: 100px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #eaebed;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      margin-left: 12px;
    }
  }

  .dropdown {
    box-shadow: 2px 2px 16px 4px rgba(38, 140, 227, 0.1);
    background: white;
    border-radius: 4px;
    padding: 8px;
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    z-index: 1;
    transform: translateY(100%);
    max-height: 180px;
    overflow: auto;

    .select-item {
      padding: 8px 6px;
      border-radius: 4px;
      cursor: pointer;
      :hover {
        background: rgba(38, 140, 227, 0.05);
      }

      &.selected {
        background: rgba(38, 140, 227, 0.05);
      }
    }
  }

  .layout {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
