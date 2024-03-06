import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { UIButton } from "../Button";
import { UIModal } from "../modal";

let confirmIt: any = "";

export { confirmIt };

export const ConfirmModal = () => {
  const [isOpen, setOpen] = useState(false);
  const [values, setValues] = useState<any>({});

  const ref: any = useRef();

  useEffect(() => {
    if (!confirmIt) {
      confirmIt = (label: string, content: string) => {
        setValues({ label, content });
        setOpen(true);
        return new Promise((resolve: any) => {
          ref.current = resolve;
        });
      };
    }
  }, []);

  return (
    <UIModal label={values.label} isOpen={isOpen} close={() => setOpen(false)}>
      <Styles>
        <div className="confirm-content">{values.content}</div>
        <div className="confirm-footer">
          <UIButton
            onClick={() => {
              ref.current(false);
              setOpen(false);
            }}
            className="cancel-button"
          >
            Cancel
          </UIButton>
          <UIButton
            onClick={() => {
              ref.current(true);
              setOpen(false);
            }}
          >
            OK
          </UIButton>
        </div>
      </Styles>
    </UIModal>
  );
};

const Styles = styled.div`
  width: 300px;
  padding: 20px 24px 24px;
  min-height: unset;

  .confirm-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 20px;

    .cancel-button {
      background: unset;
      color: #757575;
      box-shadow: unset;
      border: 1px solid #757575;
    }
  }
`;
