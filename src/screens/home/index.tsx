import { DatePicker, Select, TimePicker } from "antd";
import { UIButton } from "components/UI/Button";
// import { DatePicker } from "components/UI/date-picker";
import { UIInput } from "components/UI/input/Input";
import { UIList } from "components/UI/List";
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
import { api } from "store/api";
import { useDispatch, useSelector } from "react-redux";
import { updateStore } from "store/redux";

const defaultValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
  date: "",
  selected: "",
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("stateeeeeee", state);
  return (
    <Styles>
      <Link to="/login">
        <div>Home Screen2</div>
      </Link>

      <UIButton
        // onClick={() => {
        //   onSubmit((data) => {
        //     console.log("dataaaaaa", data);
        //   });
        // }}
        onClick={async () => {
          updateStore("user", 5);
        }}
      >
        Submit
      </UIButton>
    </Styles>
  );
};

export default HomeScreen;

const Styles = styled.div``;
