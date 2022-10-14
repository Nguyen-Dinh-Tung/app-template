import { Select } from "antd";
import styled from "styled-components";
import { ErrorMessage } from "../form";

export const UISelect = ({ label, error, ...props }: any) => {
  return (
    <Styles>
      {label && <label>{label}</label>}
      <Select
        //   options={Array(100)
        //     .fill("")
        //     .map((item: any, ind: number) => ({
        //       label: "Label " + ind,
        //       value: "value" + ind,
        //     }))}
        //   value={selecteds}
        // suffixIcon={<div>A</div>}
        //   onChange={(e: any) => {
        //     console.log("aaaaaaonChange", e);
        //     setSlected(e);
        //   }}
        //   mode="multiple"
        showSearch
        {...props}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </Styles>
  );
};

const Styles = styled.div`
  .ant-select {
    width: 100%;
    .ant-select-selector {
      height: 40px;
      border-radius: 4px;
      border: 1px solid #e3e8f5;
    }

    .ant-select-selection-item {
      display: flex;
      align-items: center;
    }
  }
`;
