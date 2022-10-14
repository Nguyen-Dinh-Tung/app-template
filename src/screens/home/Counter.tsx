import { UIButton } from "components/UI/Button";
import React from "react";
import { incrementByAmount } from "store/redux/counter";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

export const CounterSection = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Styles>
      <div style={{ padding: "50px" }}>Reduxxxxxxx</div>
      <div style={{ display: "flex" }}>
        <UIButton
          onClick={() => {
            dispatch(incrementByAmount(-1));
          }}
        >
          Minus-
        </UIButton>
        <div>{count}</div>
        <UIButton
          onClick={() => {
            dispatch(incrementByAmount(1));
          }}
        >
          Plus+
        </UIButton>
      </div>
    </Styles>
  );
};

const Styles = styled.div``;
