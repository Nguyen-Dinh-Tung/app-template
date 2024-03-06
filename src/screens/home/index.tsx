import { UIDatePicker } from "components/UI/date-picker";
import { UIInput } from "components/UI/input/Input";
import { useState } from "react";
import styled from "styled-components";

export const HomeScreen = (props: any) => {
  const [num, setNum] = useState("23232.543");
  const [isOpen, setOpen] = useState(false);
  const [select, setSelect] = useState("");
  const [date, setDate] = useState();
  return (
    <Styles>
      <UIInput
        isFormatNumber
        value={num}
        onChange={(value: any) => {
          setNum(value);
        }}
      />
      <UIDatePicker
        label="Start Date"
        format="MMM DD YYYY hh:mm A"
        value={date}
        isTime
        onChange={(d: any) => {
          console.log("onChangeeee", d);
          setDate(d);
        }}
      />
    </Styles>
  );
};

const Styles = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .slide-item {
    width: 200px;
    height: 200px;
    color: white;
    background: blue;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
`;
