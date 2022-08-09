import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Header } from "./Header";
const modalRoot: any = document.getElementById("modal-root");
const htmlElement: any = document.querySelector("html");
let isHtmlScroll = true;

interface Props {
  isOpen: boolean;
  close: () => void;
}

export const Modal = ({ label, isOpen, close, children, ...props }: any) => {
  useEffect(() => {
    // prevent html scroll when modal is open
    if (isOpen && isHtmlScroll) {
      htmlElement.style.overflow = "hidden";
      isHtmlScroll = false;
    }
    if (!isOpen && !isHtmlScroll) {
      htmlElement.style.overflow = "auto";
      isHtmlScroll = true;
    }

    return () => {
      if (!isHtmlScroll) {
        htmlElement.style.overflow = "auto";
        isHtmlScroll = true;
      }
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Styles
      {...props}
      onClick={() => {
        close();
        props.onClick && props.onClick();
      }}
    >
      <div>
        <div onClick={(e: any) => e.stopPropagation()}>
          {label && <Header label={label} close={() => close()} />}
          {children}
        </div>
      </div>
    </Styles>,
    modalRoot
  );
};

const Styles = styled.div`
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
      min-width: 200px;
      min-height: 200px;
      border-radius: 4px;

      > div {
        max-width: 100%;
      }
    }
  }
`;
