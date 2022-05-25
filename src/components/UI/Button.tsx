import styled from "styled-components";

export const Button = styled.div`
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0e76fd;
  color: white;
  box-shadow: 0px 4px 50px rgba(115, 124, 149, 0.12);
  cursor: pointer;
  :hover {
    box-shadow: 0px 4px 50px #0e76fd;
  }
`;
