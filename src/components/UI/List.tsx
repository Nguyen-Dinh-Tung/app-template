import React from "react";
import styled from "styled-components";

interface Props {
  items: any[];
  children?: any;
}

export const UIList = ({ items, children, ...props }: any) => {
  return (
    <Styles {...props}>
      {items.map(
        (item: any, ind: number) =>
          children && React.cloneElement(children(item, ind), { key: ind })
      )}
    </Styles>
  );
};

const Styles = styled.div`
  -webkit-overflow-scrolling: touch;
`;
