import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

export let setLoading: any = () => {};

export const ApiLoading = () => {
  const [isLoading, setOpen] = useState(false);

  useEffect(() => {
    setLoading = setOpen;
  }, []);
  return (
    <Styles style={{ display: isLoading ? "flex" : "none" }}>
      {isLoading && <div></div>}
    </Styles>
  );
};

const spin = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

const Styles = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    border: 5px solid white;
    border-right: 5px solid rgba(255, 255, 255, 0.3);
    animation: ${spin} 1s linear infinite;
  }
`;
