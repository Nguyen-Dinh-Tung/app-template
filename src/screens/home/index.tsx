import { DatePicker, Select, TimePicker } from "antd";
import { UIButton } from "components/UI/Button";
// import { DatePicker } from "components/UI/date-picker";
import { UIInput } from "components/UI/input/Input";
import { List } from "components/UI/List";
// import { Select } from "components/UI/Select";
import { SlickSlider } from "components/UI/SlickSlider";
import React, { useState } from "react";
import styled from "styled-components";
import { CounterSection } from "./Counter";
import alert from "components/UI/alert";
import { Link } from "react-router-dom";
import { useForm } from "components/UI/form";
import { UIDatePicker } from "components/UI/input/DatePicker";
import moment from "moment";
import { UISelect } from "components/UI/input/Select";
import { UIGrid } from "components/layout";

const defaultValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
  date: "",
  selected: "",
};

const HomeScreen = () => {
  const [date, setDate] = useState<any>("");
  const [selecteds, setSlected] = useState([]);
  const { values, onChange, register, onSubmit } = useForm(defaultValues);
  return (
    <Styles>
      <Link to="/login">
        <div>Home Screen</div>
      </Link>
      <UIGrid template="1fr 1fr" gap="15px 20px">
        <UIInput
          label="Tài khoản"
          {...register("name", "account")}
          // value={values.name}
          // onChange={(e: any) => {
          //   onChange("name", e.target.value);
          // }}
          // onBlur={() => validate("name", "account")}
          // error={errors.name}
        />
        <UIInput
          label="Số điện thoại"
          // {...register("phone")}
          value={values.phone}
          onChange={(e: any) => {
            onChange("phone", e.target.value);
          }}
          // error={errors.phone}
        />
        <UIInput
          label="Email"
          {...register("email")}
          // value={values.email}
          // onChange={(e: any) => {
          //   onChange("email", e.target.value);
          // }}
          // error={errors.email}
        />
        <UIInput
          label="Mật khẩu"
          {...register("password")}
          // value={values.password}
          // onChange={(e: any) => {
          //   onChange("password", e.target.value);
          // }}
          // error={errors.password}
        />
        <UIDatePicker
          label="Ngày tháng"
          {...register("date")}
          // value={values.date}
          onChange={(e: any) => {
            onChange("date", e ? e.toISOString() : e);
          }}
          // error={errors.date}
        />
        <UISelect
          label="Chọn label"
          options={Array(100)
            .fill("")
            .map((item: any, ind: number) => ({
              label: "Label " + ind,
              value: "value" + ind,
            }))}
          {...register("selected")}
          // value={values.selected}
          onChange={(e: any) => {
            onChange("selected", e);
          }}
          // error={errors.selected}
        />
        <UIButton
          onClick={() => {
            if (
              onSubmit((values: any) => {
                console.log("xozzzzzzzz", values);
              })
            ) {
              // console.log("valuesssss22222", values);
            }
          }}
        >
          Submit
        </UIButton>
        <UIButton
          onClick={() => {
            alert("warninggggggggggg", "warning");
          }}
        >
          Warning
        </UIButton>
      </UIGrid>
      {/* <Link to="/history">
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
      </List> */}
    </Styles>
  );
};

export default HomeScreen;

const Styles = styled.div``;
