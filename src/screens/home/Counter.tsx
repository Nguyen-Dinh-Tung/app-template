import { Button } from "components/UI/Button";
import React from "react";
import { incrementByAmount } from "store/redux/counter";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const a = 1;

export const CounterSection = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Styles>
      <div style={{ padding: "50px" }}>Reduxxxxxxx</div>
      <div style={{ display: "flex" }}>
        <Button
          onClick={() => {
            dispatch(incrementByAmount(-1));
          }}
        >
          Minus-
        </Button>
        <div>{count}</div>
        <Button
          onClick={() => {
            dispatch(incrementByAmount(1));
          }}
        >
          Plus+
        </Button>
      </div>
    </Styles>
  );
};

const Styles = styled.div``;
