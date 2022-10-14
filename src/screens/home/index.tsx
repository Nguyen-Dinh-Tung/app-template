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
    </Styles>
  );
};

export default HomeScreen;

const Styles = styled.div``;
