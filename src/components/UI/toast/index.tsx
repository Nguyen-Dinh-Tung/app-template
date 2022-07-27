import { useEffect, useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as SuccessIcon } from "./icon/success.svg";
import { ReactComponent as ErrorIcon } from "./icon/error.svg";
import { ReactComponent as InfoIcon } from "./icon/info.svg";
import { ReactComponent as WarningIcon } from "./icon/warning.svg";
import { ReactComponent as CloseIcon } from "./icon/close.svg";

let toastFun: any = "";

export default function toast(
  description: any,
  type?: "success" | "error" | "info" | "warning"
) {
  return toastFun(description, type);
}

export const Toast = () => {
  const [isOpen, setOpen] = useState(false);
  const [type, setType] = useState("success");
  const [description, setDescription] = useState("");
  useEffect(() => {
    let t: any = "";
    toastFun = (
      description: any,
      type?: "success" | "error" | "info" | "warning"
    ) => {
      setOpen(true);
      setType(type || "error");
      setDescription(description);
      if (t) clearTimeout(t);
      t = setTimeout(() => {
        setOpen(false);
      }, 2500);
    };
  }, []);
  const toastInfo = toastOptions[type] || {};
  return (
    <Styles
      className={isOpen ? "active" : ""}
      style={{ background: toastInfo.color }}
      onClick={() => !isOpen && setOpen(true)}
    >
      <div className="toast-icon">{toastInfo.icon}</div>
      <div className="toast-content">
        <div className="toast-title">{toastInfo.title}</div>
        <div className="toast-description">{description}</div>
      </div>
      <CloseIcon className="toast-close" onClick={() => setOpen(false)} />
    </Styles>
  );
};

const toastOptions: any = {
  success: {
    icon: <SuccessIcon />,
    title: "Success",
    description: "This is a success toast component",
    color: "#5cb85c",
  },
  error: {
    icon: <ErrorIcon />,
    title: "Error",
    description: "This is a error toast component",
    color: "#d9534f",
  },
  info: {
    icon: <InfoIcon />,
    title: "Info",
    description: "This is a info toast component",
    color: "#5bc0de",
  },
  warning: {
    icon: <WarningIcon />,
    title: "Warning",
    description: "This is a warning toast component",
    color: "#f0ad4e",
  },
};

const Styles = styled.div`
  &.active {
    transform: translateX(0);
  }
  min-height: 68px;
  min-width: 280px;
  max-width: 300px;

  transform: translateX(200%);
  position: fixed;
  top: 40px;
  right: 40px;
  color: white;
  z-index: 999;
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px 15px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  transition: 0.3s;

  .toast-icon {
    width: 24px;
    height: 24px;
    margin-right: 15px;
    svg {
      width: 24px;
      height: 24px;
      * {
        fill: white;
      }
    }
  }

  .toast-content {
    .toast-title {
      font-size: 18px;
    }
  }

  .toast-close {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    * {
      stroke: white;
    }
  }
`;
