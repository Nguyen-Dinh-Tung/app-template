import { useClickOutSide } from "libs/useClickOutSide";
import { useRef, useState } from "react";
import styled from "styled-components";

/* <UISelect
  options={Array(10)
    .fill("")
    .map((item, index: number) => ({
      label: "Label" + index,
      value: index,
    }))}
  value={select}
  onChange={(v: any) => setSelect(v)}
/> */

interface Props {
  options: { label: string; value: any }[];
  value: any;
  onChange: (value: any) => void;
}

export const UISelect = ({ options, value, onChange }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const ref: any = useRef();
  useClickOutSide(ref, () => setOpen(false));

  const opValue: any = options.find((op: any) => op.value == value) || {};
  const handleOnChange = (v: any) => {
    onChange(v);
    setOpen(false);
  };
  return (
    <Styles ref={ref} className="select-cover">
      <div className="select-value" onClick={() => setOpen((prev) => !prev)}>
        <span>{opValue.label || ""}</span>
        <span>&#11206;</span>
      </div>
      {isOpen && (
        <div className="select-popup">
          {options.map((op: any) => (
            <div
              className="option-item"
              onClick={() => handleOnChange(op.value)}
            >
              {op.label}
            </div>
          ))}
        </div>
      )}
    </Styles>
  );
};

const Styles = styled.div`
  position: relative;
  width: 200px;

  .select-value {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border: 1px solid #e3e8f5;
    border-radius: 8px;
    background: white;
    cursor: pointer;
  }

  .select-popup {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    transform: translateY(100%);
    padding: 8px;
    background: white;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    max-height: 200px;
    overflow: auto;
    > * {
      padding: 4px;
      cursor: pointer;
      :hover {
        color: blue;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 2px;
      }
    }
  }
`;
