import { createGlobalStyle } from "styled-components";
import robotoRegular from "assets/font/Roboto-Regular.ttf";
import ralewayExtraBold from "assets/font/Raleway-ExtraBold.ttf";
import robotoExtraBold from "assets/font/Roboto-Black.ttf";
import robotoMedium from "assets/font/Roboto-Medium.ttf";
import robotoBold from "assets/font/Roboto-Bold.ttf";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: Roboto;
  src: url(${robotoExtraBold});
  font-weight: 800;
}

@font-face {
  font-family: Roboto;
  src: url(${robotoBold});
  font-weight: 600;
}

@font-face {
  font-family: Roboto;
  src: url(${robotoMedium});
  font-weight: 500;
}

@font-face {
  font-family: Roboto;
  src: url(${robotoRegular});
  font-weight: 400;
}


@font-face {
  font-family: Raleway;
  src: url(${ralewayExtraBold});
  font-weight: 800;
}

*{
  box-sizing: border-box;
}

ul{
  list-style: none;
}

a{
  text-decoration: none;
  color: unset;
}

html{
  display:block;
  height: 100%;
  margin:0;
  padding: 0;
  overflow-x: hidden;
}

body{
  background-color: #fafafa;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #6A7B97;
  overflow-x: hidden;
}

#root{
  height: 100%;
}
`;

export const theme = {
  primary_text: "#013147",
  secondary_text: "#ffffff",
  primary: "#2767C9",
  accent: "#81FBB8",
  second_accent: "#28C76F",
  orange: "#FFE985",
  second_orange: "#FA9B2B",
  red: "#FEB692",
  second_red: "#EA5455",
};
