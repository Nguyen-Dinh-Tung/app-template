import styled, { css } from "styled-components";
import React from "react";
import { ReactComponent as Search } from "./search.svg";
import { ReactComponent as Menu } from "./menu.svg";

const icons: any = { menu: <Menu />, search: <Search /> };

export const Icon = (props: any) => {
  return <Wrapper {...props}>{icons[props.name]}</Wrapper>;
};

const Wrapper = styled.div`
  ${(props: any) => css`
    svg > * {
      stroke: ${props.color || ""};
    }
  `}
`;
