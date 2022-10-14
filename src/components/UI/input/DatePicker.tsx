import { DatePicker } from "antd";
import moment from "moment";
import styled from "styled-components";
import { ErrorMessage } from "../form";

export const UIDatePicker = ({ error, value, ...props }: any) => {
  return (
    <Styles>
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
  }
`;
