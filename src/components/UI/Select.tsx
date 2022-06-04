import React from "react";
import styled from "styled-components";
// import downArrow from "assets/images/down-arrow.png";

interface Props {
  options: any[]; //[{label:'Thứ 2', value:'2'}] or [1,2,3,4,5]
}

export const Select = ({ options, ...props }: any) => {
  return (
    <Wrapper className="select-wrap" {...props}>
      {options.map((item: any, ind: number) => {
        return (
          <option
            key={ind}
            value={item.value !== undefined ? item.value : item}
          >
            {item.label || item}
          </option>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  border: 1px solid #e3e8f5;
  border-radius: 4px;
  padding: 0 15px;
  height: 40px;
  width: 100%;
  /* appearance: none; */
  /* background: url({downArrow}); */
  background-color: white;
  background-position: center right 15px;
  background-repeat: no-repeat;
  :focus {
    outline: none;
  }
`;
