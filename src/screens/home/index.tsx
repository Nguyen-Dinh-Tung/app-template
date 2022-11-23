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
import alert from "components/UI/notify";
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
  const { values, errors, setValues, onChange, onSubmit, register } =
    useForm(defaultValues);
  return (
    <Styles>
      <Link to="/login">
        <div>Home Screen2</div>
      </Link>
      <UIInput
        label="Tài khoản"
        placeholder="Nhập tài khoản"
        {...register("name", {
          required: true,
          validateRegex: "account",
          pattern: {
            regex: /[A-Za-z]{3}/,
            message: "Không đúng định dạng",
          },
          validate: (value: any) => {
            if (value.length < 10) return "Không được ít hơn 10 chữ số";
          },
        })}
      />
      <UIButton
        onClick={() => {
          onSubmit((data) => {
            console.log("dataaaaaa", data);
          });
        }}
      >
        Submit
      </UIButton>
    </Styles>
  );
};

export default HomeScreen;

const Styles = styled.div``;
