import styled from "styled-components";

export const Button = styled.div`
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffe985 0%, #fa9b2b 100%);
  color: #001538;
  box-shadow: 0px 4px 50px rgba(115, 124, 149, 0.12);
  cursor: pointer;
  :hover {
    box-shadow: 0px 4px 50px #fa9b2b;
  }
`;
