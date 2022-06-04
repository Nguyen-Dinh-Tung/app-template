import styled, { css } from "styled-components";

export const Button = styled.button<any>`
  border: unset;
  font-family: Roboto;
  height: 40px;
  min-width: 100px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }: any) => theme.primary};
  color: white;
  box-shadow: ${({ theme }: any) => theme.shadow_level_1};
  cursor: pointer;
  :hover {
    box-shadow: ${({ theme }: any) => theme.shadow_level_2};
  }

  ${({ outline, theme }: any) =>
    outline &&
    css`
      color: ${theme.primary};
      background: unset;
      border: 1px solid ${theme.primary};
    `}
`;
