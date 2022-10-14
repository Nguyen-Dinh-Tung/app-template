import { DatePicker, Select, TimePicker } from "antd";
import { Button } from "components/UI/Button";
// import { DatePicker } from "components/UI/date-picker";
import { Input } from "components/UI/Input";
import { List } from "components/UI/List";
// import { Select } from "components/UI/Select";
import { SlickSlider } from "components/UI/SlickSlider";
import React, { useState } from "react";
import styled from "styled-components";
import { CounterSection } from "./Counter";
import alert from "components/UI/alert";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [date, setDate] = useState<any>("");
  const [selecteds, setSlected] = useState([]);
  return (
    <Styles>
      <Link to="/login">
        <div>Home Screen</div>
      </Link>

      <Link to="/history">
        <div>Ant Design</div>
      </Link>
      <div>
        <input
          type="file"
          onChange={(e: any) => {
            console.log("efileee", e.target.files);
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Button
          onClick={() => {
            alert("Success", "success");
          }}
        >
          Success
        </Button>
        <Button
          onClick={() => {
            alert("Failllllllll", "error");
          }}
        >
          Error
        </Button>
        <Button
          onClick={() => {
            alert("infooooooooooo", "info");
          }}
        >
          Info
        </Button>
        <Button
          onClick={() => {
            alert("warninggggggggggg", "warning");
          }}
        >
          Warning
        </Button>
      </div>
      <Select
        options={Array(100)
          .fill("")
          .map((item: any, ind: number) => ({
            label: "Label " + ind,
            value: "value" + ind,
          }))}
        value={selecteds}
        suffixIcon={<div>A</div>}
        onChange={(e: any) => {
          console.log("aaaaaaonChange", e);
          setSlected(e);
        }}
        mode="multiple"
        showSearch
      />
      <DatePicker
        format={"HH:mm DD/MM/YYYY"}
        suffixIcon="A"
        showTime
        onChange={(e: any) => {
          console.log("aaaaaaonChange", e);
        }}
      />
      <TimePicker
        suffixIcon="A"
        onChange={(e: any) => {
          console.log("aaaaaaonChange", e);
        }}
      />
      <CounterSection />
      <Button>Button</Button>
      <Button outline>Outline button</Button>
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
