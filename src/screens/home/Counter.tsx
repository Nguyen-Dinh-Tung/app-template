import { Button } from "components/UI/Button";
import React from "react";
import { decrement, increment } from "store/redux/counter";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

export const CounterSection = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Styles>
      <div style={{ padding: "50px" }}>Reduxxxxxxx</div>
      <div style={{ display: "flex" }}>
        <Button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Minus-
        </Button>
        <div>{count}</div>
        <Button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Plus+
        </Button>
      </div>
    </Styles>
  );
};

const Styles = styled.div``;
