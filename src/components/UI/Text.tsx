import styled, { css } from "styled-components";

/* <UIText maxLines={2}>Text Content</UIText> */

export const UIText = ({ children, ...props }: any) => {
  return <Styles {...props}>{children}</Styles>;
};

const Styles = styled.div<any>`
  ${({ maxLines }: any) =>
    maxLines &&
    css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${maxLines};
    `}
`;
