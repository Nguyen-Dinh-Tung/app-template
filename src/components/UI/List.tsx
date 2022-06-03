import React from "react";
import styled from "styled-components";

interface Props {
  items: any[];
  children?: any;
}

export const List = ({ items, children, ...props }: any) => {
  return (
    <Wrapper {...props}>
      {items.map(
        (item: any, ind: number) =>
          children && React.cloneElement(children(item, ind), { key: ind })
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  -webkit-overflow-scrolling: touch;
`;
