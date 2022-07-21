import { Button } from "components/UI/Button";
import { DatePicker } from "components/UI/date-picker";
import { Input } from "components/UI/Input";
import { List } from "components/UI/List";
import { ReactSelect } from "components/UI/ReactSelect";
import { Select } from "components/UI/Select";
import { SlickSlider } from "components/UI/SlickSlider";
import React, { useState } from "react";
import styled from "styled-components";
import { CounterSection } from "./Counter";

const HomeScreen = () => {
  const [date, setDate] = useState<any>(new Date());
  return (
    <Styles>
      Home Screen
      {/* <CounterSection /> */}
      <Select type="time" />
      <ReactSelect label="Date time" type="time" isMulti isSearchable />
      <DatePicker value={date} onChange={(date: string) => setDate(date)} />
      <Button>Button</Button>
      <Button outline>Outline button</Button>
      <Select options={[1, 2, 3, 4, 5]} />
      <Input type="date" />
      <SlickSlider items={Array(10).fill("")}>
        {(item: any, ind: number) => {
          return (
            <div>
              <div style={{ background: "red" }}>{ind}</div>
            </div>
          );
        }}
      </SlickSlider>
      <List items={[300, 400, 500, 600, 700, 800, 900]}>
        {(item: any) => {
          return (
            <p style={{ fontWeight: item, fontSize: "24px" }}>ROBOTO {item}</p>
          );
        }}
      </List>
    </Styles>
  );
};

export default HomeScreen;

const Styles = styled.div``;
