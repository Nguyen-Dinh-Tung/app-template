import { DatePicker } from "antd";
import moment from "moment";
import styled from "styled-components";
import { ErrorMessage } from "../form";

export const UIDatePicker = ({ label, value, error, ...props }: any) => {
  return (
    <Styles>
      {label && <label>{label}</label>}
      <DatePicker
        format="DD/MM/YYYY"
        value={value ? moment(value) : undefined}
        //   suffixIcon="A"
        //   showTime
        //   onChange={(e: any) => {
        //     console.log("aaaaaaonChange", e);
        //   }}
        {...props}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </Styles>
  );
};

const Styles = styled.div`
  .ant-picker {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #e3e8f5;
  }
`;
