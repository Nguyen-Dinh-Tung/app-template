import Select from "react-select";
import styled, { css } from "styled-components";

let timeArr: any = [];

for (let i = 0; i < 24; i++) {
  timeArr = timeArr.concat([
    { label: i + ":00", value: i + ":00" },
    { label: i + ":30", value: i + ":30" },
  ]);
}

interface Props {
  options: any[]; //[{label:'Thứ 2', value:'2'}] or [1,2,3,4,5]
  label?: string;
  value?: any;
  onChange?: (value: any) => void;
  type?: string;
}

export const ReactSelect = ({ label, type, ...props }: any) => {
  return (
    <Styles isMulti={props.isMulti} className="select-wrap">
      {label && <label>{label}</label>}
      <Select
        options={type == "time" ? timeArr : props.options}
        {...props}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </Styles>
  );
};

const Styles = styled.div<any>`
  label {
    display: block;
    color: #7f8c9b;
    font-size: 14px;
    margin-bottom: 2px;
  }
  .react-select__control {
    min-height: 48px;
    border: 1px solid #eaebed;
    border-radius: 8px;
    min-width: 110px;
  }

  .react-select__multi-value {
    height: 32px;
    padding: 4px 8px;
    border-radius: 8px;
  }
  .react-select__multi-value__label {
    font-size: 16px;
    padding: unset;
  }
  .react-select__placeholder {
    white-space: nowrap;
  }

  ${({ isMulti }: any) =>
    !isMulti &&
    css`
      .react-select__indicator-separator {
        display: none;
      }
    `}
`;
