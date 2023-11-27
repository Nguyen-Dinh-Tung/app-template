import { useEffect } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { Header } from "./Header";
const modalRoot: any = document.getElementById("modal-root");
const htmlElement: any = document.querySelector("html");
let isHtmlScroll = true;

interface Props {
  isOpen: boolean;
  close: () => void;
}

export const UIModal = ({ label, isOpen, close, children, ...props }: any) => {
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

  return ReactDOM.createPortal(
    <Styles
      {...props}
      onClick={() => {
        close();
        props.onClick && props.onClick();
      }}
      isActive={isOpen}
    >
      <div className="modal-cover">
        <div
          className="modal-content"
          onClick={(e: any) => e.stopPropagation()}
        >
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
  inset: 0;
  overflow: auto;
  z-index: 99;
  pointer-events: none;
  opacity: 0;
  transition: 0.7s;

  .modal-cover {
    min-height: 100%;
    min-width: 100%;
    padding: 50px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(120%);
    transition: 0.7s;
  }

  .modal-content {
    background: white;
    min-width: 200px;
    min-height: 200px;
    border-radius: 4px;

    > div {
      max-width: 100%;
    }
  }

  ${({ isActive }: any) =>
    isActive &&
    css`
      pointer-events: unset;
      opacity: 1;
      background: rgba(0, 0, 0, 0.7);

      .modal-cover {
        transform: translateY(0);
      }
    `}
`;
