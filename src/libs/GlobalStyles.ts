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
  line-height: 1.5;
  font-weight: 400;
  color: #212121;
  overflow-x: hidden;
}

#root{
  height: 100%;
}
`;

export const theme = {
  primary: "#009688",
  dark_primary: "#00796B",
  light_primary: "#B2DFDB",
  inverted_text: "#FFFFFF",
  accent: "#448AFF",
  pink: "#E91E63",
  orange: "#FF9800",
  amber: "#ffc107",
  light_purple: "#ba68c8",
  primary_text: "#212121",
  secondary_text: "#757575",
  divider: "#BDBDBD",
  yellow: "#ffeb3b",
  teal: "#009688",
  purple: "#7E57C2",
  red: "#F44336",
  card: "#FFF",
  grey: "#e0e0e0",
  light_grey: "#eeeeee",
  light_red: "#EF9A9A",
  shadow_level_1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  shadow_level_2: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  shadow_level_3: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  shadow_level_4: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  shadow_level_5: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
};
