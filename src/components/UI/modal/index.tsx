import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
const modalRoot: any = document.getElementById("modal-root");
const htmlElement: any = document.querySelector("html");
let isHtmlScroll = true;

export const Modal = (props: any) => {
  useEffect(() => {
    // prevent html scroll when modal is open
    if (props.isOpen && isHtmlScroll) {
      htmlElement.style.overflow = "hidden";
      isHtmlScroll = false;
    }
    if (!props.isOpen && !isHtmlScroll) {
      htmlElement.style.overflow = "auto";
      isHtmlScroll = true;
    }
  }, [props.isOpen]);
  if (!props.isOpen) return null;
  return ReactDOM.createPortal(
    <Wrapper {...props}>
      <div>
        <div onClick={(e: any) => e.stopPropagation()}>{props.children}</div>
      </div>
    </Wrapper>,
    modalRoot
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  z-index: 99;

  > div {
    min-height: 100%;
    min-width: 100%;
    padding: 50px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    > div {
      background: white;
      min-width: 100px;
      min-height: 100px;
      border-radius: 8px;
    }
  }
`;
