import { UIButton } from "components/UI/Button";
import { confirmIt } from "components/UI/confirm";
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
      <UIButton
        onClick={async () => {
          const res = await confirmIt(
            "Warning",
            "Are you sure to delete this member?"
          );
          console.log("ressssss", res);
        }}
      >
        Confirm
      </UIButton>
      <UIInput
        isFormatNumber
        value={num}
        onChange={(value: any) => {
          console.log("valueeeeee", value);
          setNum(value);
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
