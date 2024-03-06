import { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "./icon/close.svg";
import { ReactComponent as ErrorIcon } from "./icon/error.svg";
import { ReactComponent as InfoIcon } from "./icon/info.svg";
import { ReactComponent as SuccessIcon } from "./icon/success.svg";
import { ReactComponent as WarningIcon } from "./icon/warning.svg";

const toastTime = 3000; //ms
let toastFun: any = () => {};

const toast = {
  success: (description: string) => toastFun(description, "success"),
  error: (description: string) => toastFun(description, "error"),
  info: (description: string) => toastFun(description, "info"),
  warning: (description: string) => toastFun(description, "warning"),
};

Object.freeze(toast);
export { toast };

export const ToastComponent = () => {
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
      setType(type || "success");
      setDescription(description);
      if (t) clearTimeout(t);
      t = setTimeout(() => {
        setOpen(false);
      }, toastTime);
    };
  }, []);

  const toastInfo = toastOptions[type] || {};
  return (
    <Styles
      className={isOpen ? "active" : ""}
      style={{ background: toastInfo.color }}
      onClick={() => !isOpen && setOpen(true)}
    >
      <div className="alert-icon">{toastInfo.icon}</div>
      <div className="alert-content">
        {/* <div className="alert-title">{alertInfo.title}</div> */}
        <div className="alert-description">{description}</div>
      </div>
      <CloseIcon className="alert-close" onClick={() => setOpen(false)} />
    </Styles>
  );
};

const toastOptions: any = {
  success: {
    icon: <SuccessIcon />,
    title: "Success",
    color: "#00BC3C",
  },
  error: {
    icon: <ErrorIcon />,
    title: "Error",
    color: "#F44336",
  },
  info: {
    icon: <InfoIcon />,
    title: "Info",
    color: "#03A9F4",
  },
  warning: {
    icon: <WarningIcon />,
    title: "Warning",
    color: "#FF9800",
  },
};

const Styles = styled.div`
  &.active {
    transform: translateX(0);
    :after {
      right: 100%;
      transition: linear ${toastTime}ms;
    }
  }
  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: rgba(0, 0, 0, 0.1);
    transition: 1s;
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
  padding: 5px 15px 10px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  transition: 0.7s;

  .alert-icon {
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

  .alert-content {
    .alert-title {
      font-size: 18px;
    }
    .alert-description {
      font-size: 16px;
    }
  }

  .alert-close {
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
